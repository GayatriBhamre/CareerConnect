// You can expand this object with 10 roles and 20 questions each
const interviewQA = {
  "Frontend Developer": [
    { question: "What is Virtual DOM?", answer: "An in-memory representation of real DOM." },
    { question: "What is useEffect used for?", answer: "Managing side effects in functional components." },
  ],
  "Backend Developer": [
    { question: "What is REST?", answer: "Architectural style for designing APIs." },
    { question: "What is JWT?", answer: "JSON Web Token for authentication." },
  ],
  // Add more roles here!
};

export const getInterviewQuestions = (req, res) => {
  res.status(200).json({
    success: true,
    data: interviewQA,
  });
};
