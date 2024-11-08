"use client";

import QuestionDetailLoading from "@/app/components/dev-discuss/QuestionDetailLoading";
import { Button } from "@/components/ui/button";
import { getQuestionById } from "@/lib/actions/question";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown"; // Import react-markdown
import { toast } from "react-toastify";
import remarkGfm from "remark-gfm"; // Import GitHub-flavored markdown (optional)

export default function QuestionDetailPage({ params }) {
  const { Id } = params;

  const [questionData, setQuestionData] = useState(null);
  const [votes, setVotes] = useState(0);
  const [userVote, setUserVote] = useState(0);
  const [replyContent, setReplyContent] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchQuestion = async () => {
      const question = await getQuestionById(Id);
      question.replies = question.replies || [];
      setQuestionData(question);
      setVotes(question.votes);
    };

    fetchQuestion();
  }, [Id]);

  const handleUpvote = async () => {
    if (userVote === 1) return;

    try {
      const response = await fetch(`/api/questions/${Id}/upvote`, {
        method: "POST",
      });
      if (response.ok) {
        setVotes((prev) => prev + 1);
        setUserVote(1);
      } else {
        toast.error("Failed to upvote");
      }
    } catch (error) {
      console.error("Error upvoting:", error);
      toast.error("Error upvoting. Please try again.");
    }
  };

  const handleDownvote = async () => {
    if (userVote === -1) return;

    try {
      const response = await fetch(`/api/questions/${Id}/downvote`, {
        method: "POST",
      });
      if (response.ok) {
        setVotes((prev) => prev - 1);
        setUserVote(-1);
      } else {
        toast.error("Failed to downvote");
      }
    } catch (error) {
      console.error("Error downvoting:", error);
      toast.error("Error downvoting. Please try again.");
    }
  };

  const handlePostReply = async () => {
    if (!replyContent.trim()) return;
    setIsPosting(true);

    try {
      const response = await fetch(`/api/questions/${Id}/reply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: replyContent }),
      });

      if (response.ok) {
        const { reply, answers } = await response.json();
        setQuestionData((prevData) => ({
          ...prevData,
          replies: [...prevData.replies, reply],
          answers,
        }));
        setReplyContent("");
      } else {
        toast.error("Failed to post reply");
      }
    } catch (error) {
      console.error("Error posting reply:", error);
    } finally {
      setIsPosting(false);
    }
  };

  if (!questionData) {
    return <QuestionDetailLoading />;
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <header className="mb-6 border-b pb-4">
          <h1 className="text-3xl font-bold mb-2">{questionData.title}</h1>
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div>
              <span className="text-blue-600">by {questionData.author}</span> |{" "}
              <span>{new Date(questionData.createdAt).toLocaleString()}</span>
            </div>
            <div className="flex gap-2">
              {questionData.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="flex gap-6 items-start mb-8">
          <div className="flex flex-col items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleUpvote}
              disabled={userVote === 1}
            >
              <ArrowUp
                className={`h-6 w-6 ${userVote === 1 ? "text-blue-600" : ""}`}
              />
            </Button>
            <span className="text-xl font-semibold">{votes}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDownvote}
              disabled={userVote === -1}
            >
              <ArrowDown
                className={`h-6 w-6 ${userVote === -1 ? "text-red-600" : ""}`}
              />
            </Button>
          </div>
          <div className="flex-1">
            {/* Render question description as markdown */}
            <ReactMarkdown remarkPlugins={[remarkGfm]} className="text-lg mb-6">
              {questionData.description}
            </ReactMarkdown>
            <p className="text-muted-foreground">
              <span className="font-semibold">{questionData.answers}</span>{" "}
              answers
            </p>
          </div>
        </div>

        {/* AI Answer Section (if exists) */}
        {questionData.aiAnswerRequested && questionData.aiAnswer.content && (
          <section className="bg-gray-100 p-6 mb-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">AI Generated Answer</h2>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {questionData.aiAnswer.content}
            </ReactMarkdown>
          </section>
        )}

        {/* Replies Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Replies</h2>
          <div className="space-y-6">
            {questionData.replies && questionData.replies.length ? (
              questionData.replies.map((reply, index) => (
                <div key={index} className="border rounded-lg p-4 bg-card">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-blue-600">
                      {reply.author}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {new Date(reply.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{reply.content}</p>
                </div>
              ))
            ) : (
              <div>No replies yet. Be the first to reply!</div>
            )}
          </div>
        </section>

        {/* Add a Reply */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Your Reply</h2>
          <textarea
            rows="4"
            className="w-full p-3 border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
            placeholder="Write your answer here..."
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
          />
          <Button
            className="mt-4"
            onClick={handlePostReply}
            disabled={isPosting}
          >
            {isPosting ? "Posting..." : "Post Reply"}
          </Button>
        </div>
      </div>
    </main>
  );
}
