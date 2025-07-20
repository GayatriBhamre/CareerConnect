import React, { useState } from "react";
import "./JobBot.css";

const jobQuestions = {
  "what is a resume": "A resume is a formal document that showcases your work experience, skills, and education to potential employers.",
  "how to write a cover letter": "A cover letter should introduce yourself, explain why you're a good fit for the job, and highlight key experiences.",
  "what are soft skills": "Soft skills are interpersonal skills like communication, teamwork, adaptability, and emotional intelligence.",
  "tips for job interviews": "Be confident, research the company, practice common questions, and dress appropriately.",
  "best job search websites": "Some popular ones include LinkedIn, Indeed, Naukri, Monster, and Glassdoor.",
  "how to follow up after interview": "Wait 2-3 days, then send a polite email thanking them for the opportunity and expressing continued interest.",
  "how to improve linkedin profile": "Use a professional photo, write a clear headline, fill out your experience, and get endorsements.",
  "how to explain career gap": "Be honest and focus on how you stayed productive — e.g., freelancing, upskilling, or personal projects.",
  "difference between cv and resume": "A CV is more detailed and academic, while a resume is concise and tailored for jobs.",
  "what is ats": "Applicant Tracking System (ATS) is software employers use to scan and rank resumes based on keywords.",
  "how to prepare for HR round": "Research the company, understand your resume well, and be ready with answers for strengths, weaknesses, and career goals.",
  "how to write objective in resume": "Keep it concise, job-specific, and mention your goal and how you can help the company.",
  "what is networking in job search": "Networking is building relationships to learn about job opportunities, often before they're publicly posted.",
  "how to crack aptitude test": "Practice regularly, focus on speed & accuracy, and understand the basics of Quant, Reasoning, and Verbal skills.",
  "what is campus placement": "It is the process where companies visit colleges to hire students for jobs or internships before they graduate.",
  "how to negotiate salary": "Know your worth, research average salaries, stay polite, and express flexibility while stating your expectations.",
  "what is group discussion": "A GD is a test of communication, leadership, and knowledge where candidates discuss a topic in a group.",
};

const JobBot = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! I’m JobBot 🤖. Ask me anything about jobs or careers!" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userInput = input.trim().toLowerCase();

    // Find the most relevant question
    const matchedKey = Object.keys(jobQuestions).find((key) =>
      userInput.includes(key)
    );

    const response = matchedKey
      ? jobQuestions[matchedKey]
      : "I'm still learning! Try asking another job-related question.";

    setMessages((prev) => [
      ...prev,
      { type: "user", text: input },
      { type: "bot", text: response },
    ]);

    setInput("");
  };

  return (
    <div className="jobbot-container">
      <div className="jobbot-header">💼 Meet JobBot – Your Career Guardian</div>
      <div className="jobbot-chat">
        {messages.map((msg, i) => (
          <div key={i} className={`jobbot-message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="jobbot-input">
        <input
          type="text"
          placeholder="Ask me job-related questions..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default JobBot;
