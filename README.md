# Inherit: A Unified Learning & Coding Platform

## Update

Our team, **XtraDrill**, consisting of **Ahabab Imtiaz Risat**, **Tasnim Ashraf**, and **Taki Tajwaruzzaman Khan**, achieved the **1st Runner-Up** position out of **178 participating teams** at the *Programming Hero presents National Hackathon at EWU National RoboFest 2024*. Our project, **Inherit**, is an integrated online platform designed to bridge the skills gap in Bangladesh's IT sector and reduce educational inequalities between urban and rural areas.

![Team XtraDrill at EWU National RoboFest 2024](https://github.com/user-attachments/assets/5cfde8c2-2d5a-4fb2-b1d5-09fa98d944c2)

---

## Table of Contents

- [Problem Statement](#problem-statement)
  - [Skills Gap in IT Sector](#skills-gap-in-it-sector)
  - [Educational Inequality](#educational-inequality)
- [Solution Overview](#solution-overview)
- [Platform Features](#platform-features)
  - [1. Interactive Learning Environment](#1-interactive-learning-environment)
    - [Learn Page](#learn-page)
    - [Video Page](#video-page)
  - [2. Real-Time Collaborative IDE](#2-real-time-collaborative-ide)
    - [Playground Page](#playground-page)
    - [Live Playground](#live-playground)
  - [3. Community Discussion Forum (DevDiscuss)](#3-community-discussion-forum-devdiscuss)
  - [4. AI Integration](#4-ai-integration)
    - [AI-Powered Code Review](#ai-powered-code-review)
    - [AI-Generated Forum Responses](#ai-generated-forum-responses)
- [Technology Stack](#technology-stack)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [APIs and Services](#apis-and-services)
  - [Database](#database)
  - [Real-Time Communication](#real-time-communication)
- [Installation and Setup](#installation-and-setup)
  - [Prerequisites](#prerequisites)
  - [Steps](#steps)
- [Usage Guide](#usage-guide)
  - [Accessing the Platform](#accessing-the-platform)
- [Additional Notes](#additional-notes)
  - [Live Deployment](#live-deployment)
  - [Future Work](#future-work)

---


## Problem Statement

Bangladesh faces significant challenges in its IT sector and education system:

### Skills Gap in IT Sector

- There is an annual demand for approximately **7,500–8,000 technical professionals**, but a shortage of qualified candidates.
- Alarmingly, around **80% of computer science and engineering graduates struggle with basic coding skill tests**, highlighting deficiencies in their education.

### Educational Inequality

A stark disparity exists between urban and rural education:

- Only **34% of university students come from rural areas**, even though nearly 70% of school-age children reside there.
- **80% of school dropouts originate from rural backgrounds**.
- **81% of rural children do not acquire basic numeracy skills**.

These statistics indicate systemic barriers that prevent rural students from accessing quality education and pursuing further studies, contributing to increased inequalities.

**Sources:**

- [Assessing Skill Gaps and Exploring Employment Opportunities in Bangladesh’s ICT Sector](https://inspira-bd.com/case-studies/addressing-skill-gaps-and-employment-opportunities/)
- [How to bridge the rural-urban education divide in Bangladesh | The Daily Star](https://www.thedailystar.net/opinion/views/news/how-bridge-the-rural-urban-education-divide-bangladesh-3621516)
- [Growing rural-urban education divide is hurting Bangladesh's future]([https://www.example.com](https://www.thedailystar.net/opinion/views/news/growing-rural-urban-education-divide-hurting-bangladeshs-future-3580771))

---

## Solution Overview

**Inherit** is an integrated online platform focused on:

- **SDG 4: Quality Education**
- **SDG 10: Reduced Inequalities**

![SDG Goals](https://github.com/user-attachments/assets/d1c9f193-7121-45f1-9ec4-16bca5a0eb98)

Our platform aims to:

- **Enhance Coding Proficiency**: Equip users with the necessary skills to meet industry demands.
- **Reduce Educational Inequality**: Provide equal access to quality education resources for rural and urban students alike.
- **Promote Collaborative Learning**: Foster a supportive community that encourages mentorship and peer-to-peer learning.
- **Leverage AI for Personalized Education**: Utilize AI to offer tailored support and accelerate learning outcomes.

---

## Platform Features

### 1. Interactive Learning Environment

#### Learn Page

- **Random Video Tutorials & Search Functionality**: Utilizes YouTube Data API to provide a curated list of coding-related tutorials, minimizing distractions from unrelated content.

  ![Learn Page](https://github.com/user-attachments/assets/15dcae0c-4477-4654-b348-83aa2912c1ba)

#### Video Page

- **Embedded YouTube Videos**: Features embedded videos alongside an online code editor.
- **Online Code Editor**: Allows users to practice coding in real-time.
- **Note-Saving Feature**: Users can take and save notes for an interactive learning experience.

  ![Video Page](https://github.com/user-attachments/assets/ba494034-36e7-4930-968a-c74d869b1e81)

### 2. Real-Time Collaborative IDE

#### Playground Page

- **Session Management**: Users can create, save, and manage collaborative coding sessions.

  ![Playground Page](https://github.com/user-attachments/assets/041a2b5b-d1fd-442b-9a3f-005815a9aaa2)

#### Live Playground

- **Real-Time Collaboration**: A real-time collaborative IDE where multiple users can edit code simultaneously.
- **Mentorship and Pair Programming**: Promotes mentoring and peer-to-peer learning.

  ![Live Playground GIF](https://github.com/user-attachments/assets/7b526025-6471-4afc-9a20-b28733038602)

### 3. Community Discussion Forum (DevDiscuss)

- **Discussion Forum**: A community-driven Q&A section where users can ask questions and receive answers from peers, similar to Stack Overflow.

  ![DevDiscuss Forum](https://github.com/user-attachments/assets/a4c41165-e9fd-405a-83d8-f6c179b2364f)

- **AI Assistance**: Provides automatic AI-generated answers with disclaimers, offering immediate support while encouraging community engagement.

  ![AI-Generated Answer](https://github.com/user-attachments/assets/fa4aa8dd-e810-4d9a-8117-fd786ec26561)

  ![AI Disclaimer](https://github.com/user-attachments/assets/8c34617c-66b4-4b34-b47b-e8707df25dea)

### 4. AI Integration

#### AI-Powered Code Review

- **Code Evaluation**: Offers evaluations of current code, suggests better approaches, and enhances coding practices.
- **Availability**: Integrated within the code editor on both the Video Page and Playground.

#### AI-Generated Forum Responses

- **Instant Answers**: In DevDiscuss, AI provides instant answers to user questions.
- **Disclaimers**: Responses are clearly marked to indicate they are AI-generated.

---

## Technology Stack

### Frontend

- [**Next.js**](https://nextjs.org/) - React framework for server-side rendering.
- [**shadcn**](https://ui.shadcn.com/) - For interactive UI components.
- [**Monaco Editor**](https://microsoft.github.io/monaco-editor/) - Code editor component.

### Backend

- [**Express.js**](https://expressjs.com/) - Web application framework for Node.js.

### APIs and Services

- **YouTube Data API v3** - Fetches curated coding tutorials.
- **Piston API** - Executes code snippets in various programming languages.
- **Groq API** - Integrates Meta LLaMA3 70B LLM model for AI features.
- **Clerk** - User authentication and management.

### Database

- **MongoDB Atlas** - Cloud-based NoSQL database.

### Real-Time Communication

- **WebSockets** - Enables real-time collaborative coding (Note: Limited in live deployment due to hosting constraints).

---

## Installation and Setup

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- **API Keys** for the following services:
  - Clerk
  - MongoDB Atlas
  - YouTube Data API v3
  - Groq API (for Meta LLaMA3 70B LLM model)
  - Piston API

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/takitajwar17/inherit-ewu-hackathon-xtradrill.git
   cd inherit-ewu-hackathon-xtradrill
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and fill it with the following variables:

   ```env
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

   CLERK_SECRET_KEY=your_clerk_secret_key

   WEBHOOK_SECRET=your_webhook_secret

   MONGODB_URI=your_mongodb_uri

   GROQ_API_KEY=your_groq_api_key
   NEXT_PUBLIC_YOUTUBE_API_KEY=your_youtube_api_key

   NEXT_PUBLIC_SOCKET_SERVER_URL=http://localhost:3000
   NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000
   ```

   Replace `your_*` with your actual API keys and URIs.

4. **Run the Development Server**

   ```bash
   npm run dev
   ```

   The application should now be running on `http://localhost:3000`.

---

## Usage Guide

### Accessing the Platform

1. **Sign Up / Sign In**

   - Navigate to `/sign-up` to create a new account or `/sign-in` to log in.
   - Authentication is managed by Clerk.

2. **Learn Page**

   - Access a curated list of coding tutorials.
   - Use the search functionality to find specific topics.

3. **Video Page**

   - Watch embedded YouTube tutorials.
   - Practice coding in the adjacent code editor.
   - Save notes for future reference.

4. **Playground**

   - Create new coding sessions.
   - Collaborate in real-time with other users.
   - Save and manage your sessions.

5. **DevDiscuss**

   - Ask questions or share knowledge in the community forum.
   - Receive answers from peers or AI-generated responses.

6. **AI Features**

   - Utilize AI-powered code review within the code editor.
   - Get instant AI-generated answers in the discussion forum.

---

## Additional Notes

### Live Deployment

The platform is live at [https://inherit-ewu-hackathon-xtra-drill.vercel.app](https://inherit-ewu-hackathon-xtra-drill.vercel.app).

- **Limitations**:
  - The **socket part doesn't work** in the live link as Vercel doesn't support WebSocket connections.
  - The **YouTube API** has a limited number of free usage per day.
  - The website has some bugs; we are actively working on fixing them.
- **Recommendation**: It is recommended to run the project locally with your own API keys for full functionality.

### Future Work

- Fixing existing bugs and improving stability.
- Enhancing AI features for better personalization.
- Seeking partnerships with educational institutions and NGOs.

---

Thank you for your interest in **Inherit**.
