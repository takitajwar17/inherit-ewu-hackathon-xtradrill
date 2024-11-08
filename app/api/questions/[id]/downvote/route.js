import Question from "@/lib/models/questionModel";
import { connect } from "@/lib/mongodb/mongoose";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  try {
    await connect();
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const questionId = params.id;
    const question = await Question.findById(questionId);

    if (!question) {
      return NextResponse.json(
        { error: "Question not found" },
        { status: 404 }
      );
    }

    if (!question.voters) {
      question.voters = [];
    }

    const existingVote = question.voters.find(
      (voter) => voter.userId === userId
    );

    if (existingVote) {
      if (existingVote.vote === -1) {
        return NextResponse.json(
          { error: "You have already downvoted this question" },
          { status: 400 }
        );
      } else {
        question.votes -= 2;
        existingVote.vote = -1;
        question.markModified("voters"); // Ensure MongoDB registers the change
      }
    } else {
      question.votes -= 1;
      question.voters.push({ userId, vote: -1 });
    }

    await question.save();
    return NextResponse.json({ success: true, votes: question.votes });
  } catch (error) {
    console.error("Error downvoting question:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
