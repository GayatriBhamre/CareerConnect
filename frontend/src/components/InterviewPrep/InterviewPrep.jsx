import React, { useState } from "react";

const InterviewPrep = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [questions, setQuestions] = useState([]);

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Data Scientist",
    "Machine Learning Engineer",
    "DevOps Engineer",
    "Mobile App Developer",
    "Product Manager",
    "UI/UX Designer",
    "QA Engineer"
  ];

  const questionsBank = {
    "Frontend Developer": [
      { q: "What is the Virtual DOM?", a: "A lightweight copy of the real DOM for faster updates." },
      { q: "Difference between var, let, const?", a: "Var is function-scoped, let/const are block-scoped." },
      { q: "What is React state?", a: "Data managed by a component that triggers re-render on change." },
      { q: "Explain useEffect hook.", a: "Runs side effects after rendering." },
      { q: "What is JSX?", a: "A syntax extension that looks like HTML in JS." },
      { q: "What are React props?", a: "Data passed from parent to child components." },
      { q: "What is lifting state up?", a: "Moving state to a common ancestor to share it." },
      { q: "Explain React Router.", a: "Library for routing in React apps." },
      { q: "What is component lifecycle?", a: "Phases of mounting, updating, unmounting." },
      { q: "Explain keys in lists.", a: "Unique identifiers to help React track items." },
      { q: "What is Redux?", a: "State management library for predictable state." },
      { q: "Explain controlled components.", a: "Form elements controlled by React state." },
      { q: "What is context API?", a: "Provides global data to components without props drilling." },
      { q: "What is HOC?", a: "Higher Order Component: a function that returns a component." },
      { q: "Explain React Fragment.", a: "Wraps multiple elements without adding extra DOM nodes." }
    ],
    "Backend Developer": [
      { q: "What is REST?", a: "Architectural style for designing networked applications." },
      { q: "Explain CRUD operations.", a: "Create, Read, Update, Delete." },
      { q: "What is middleware?", a: "Functions that handle requests before reaching the route." },
      { q: "What is JWT?", a: "JSON Web Token for secure authentication." },
      { q: "Explain CORS.", a: "Cross-Origin Resource Sharing to control resource access." },
      { q: "What is MVC?", a: "Model-View-Controller design pattern." },
      { q: "How to handle errors in Express?", a: "Using middleware with error-handling signature." },
      { q: "What is database indexing?", a: "Improves query performance." },
      { q: "Explain connection pooling.", a: "Reuse database connections for efficiency." },
      { q: "What is ORM?", a: "Object Relational Mapping for DB abstraction." },
      { q: "Difference between SQL and NoSQL.", a: "Relational vs non-relational databases." },
      { q: "What is API rate limiting?", a: "Controlling number of requests from clients." },
      { q: "Explain WebSockets.", a: "Real-time bi-directional communication." },
      { q: "What is HTTPS?", a: "Secure HTTP with SSL/TLS encryption." },
      { q: "How to hash passwords?", a: "Using bcrypt or similar libraries." }
    ],
    "Full Stack Developer": [
      { q: "What is full stack development?", a: "Frontend and backend development together." },
      { q: "How does frontend communicate with backend?", a: "Using HTTP APIs, REST, GraphQL." },
      { q: "What is CORS?", a: "Browser security feature controlling cross-origin requests." },
      { q: "What is SSR?", a: "Server Side Rendering for SEO and speed." },
      { q: "Explain state management.", a: "Handling app-wide state with tools like Redux." },
      { q: "What is authentication vs authorization?", a: "Verifying identity vs access control." },
      { q: "What is GraphQL?", a: "Query language for APIs." },
      { q: "Explain cookies vs tokens.", a: "Different ways of storing user session data." },
      { q: "What is load balancing?", a: "Distributing traffic across servers." },
      { q: "How do you deploy a full stack app?", a: "Hosting frontend and backend on servers/cloud." },
      { q: "What is Docker?", a: "Containerization platform for packaging apps." },
      { q: "Explain CI/CD.", a: "Continuous Integration/Continuous Deployment." },
      { q: "What is reverse proxy?", a: "Server handling requests on behalf of another server." },
      { q: "What is environment variable?", a: "External config for applications." },
      { q: "Explain Monorepo.", a: "Single repository for multiple projects." }
    ],
    "Data Scientist": [
      { q: "What is overfitting?", a: "Model fits training data too well, poor generalization." },
      { q: "Explain bias-variance tradeoff.", a: "Balancing underfitting and overfitting." },
      { q: "What is supervised learning?", a: "Learning with labeled data." },
      { q: "What is unsupervised learning?", a: "Learning with unlabeled data." },
      { q: "Explain PCA.", a: "Dimensionality reduction technique." },
      { q: "What is cross-validation?", a: "Technique to evaluate model generalization." },
      { q: "What is confusion matrix?", a: "Table showing true vs predicted classifications." },
      { q: "What is precision and recall?", a: "Metrics for classification performance." },
      { q: "Explain ROC curve.", a: "Graphical plot for binary classifiers." },
      { q: "What is clustering?", a: "Grouping similar data points." },
      { q: "Explain k-means.", a: "Popular clustering algorithm." },
      { q: "What is feature engineering?", a: "Creating meaningful features from data." },
      { q: "What is NLP?", a: "Natural Language Processing." },
      { q: "What is time series analysis?", a: "Analyzing data over time." },
      { q: "What is ensemble learning?", a: "Combining models for better performance." }
    ],
    "Machine Learning Engineer": [
      { q: "What is a hyperparameter?", a: "Configuration external to the model learned from data." },
      { q: "Explain gradient descent.", a: "Optimization algorithm to minimize loss." },
      { q: "What is regularization?", a: "Technique to reduce overfitting." },
      { q: "Explain batch normalization.", a: "Normalizing inputs to layers in a neural network." },
      { q: "What is dropout?", a: "Randomly turning off neurons during training to prevent overfitting." },
      { q: "What is a neural network?", a: "Model inspired by the human brain." },
      { q: "Explain backpropagation.", a: "Algorithm to compute gradients for training." },
      { q: "What is transfer learning?", a: "Using pre-trained models for new tasks." },
      { q: "What is data augmentation?", a: "Increasing training data via transformations." },
      { q: "What is reinforcement learning?", a: "Learning via rewards and penalties." },
      { q: "Explain SVM.", a: "Support Vector Machine for classification tasks." },
      { q: "What is a decision tree?", a: "Model that splits data based on features." },
      { q: "Explain ensemble methods.", a: "Combining models for better results." },
      { q: "What is learning rate?", a: "Step size in optimization." },
      { q: "What is early stopping?", a: "Halting training to prevent overfitting." }
    ],
    "DevOps Engineer": [
      { q: "What is CI/CD?", a: "Continuous Integration and Continuous Deployment." },
      { q: "Explain Docker.", a: "Platform for containerizing applications." },
      { q: "What is Kubernetes?", a: "Container orchestration tool." },
      { q: "What is Infrastructure as Code?", a: "Managing infra with code." },
      { q: "Explain load balancing.", a: "Distributing traffic among servers." },
      { q: "What is monitoring?", a: "Observing system health and metrics." },
      { q: "Explain rollback.", a: "Reverting to a previous stable state." },
      { q: "What is blue-green deployment?", a: "Two environments for safe deployment." },
      { q: "What is canary release?", a: "Gradually rolling out changes." },
      { q: "Explain Jenkins.", a: "CI/CD automation server." },
      { q: "What is artifact repository?", a: "Stores build artifacts." },
      { q: "What is immutable infrastructure?", a: "Servers are replaced not changed." },
      { q: "What is Ansible?", a: "Configuration management tool." },
      { q: "What is cloud computing?", a: "Delivering computing services over internet." },
      { q: "What is scaling?", a: "Adjusting resources to meet demand." }
    ],
    "Mobile App Developer": [
      { q: "What is React Native?", a: "Framework for building native apps using React." },
      { q: "What is Flutter?", a: "UI toolkit by Google for cross-platform apps." },
      { q: "Explain lifecycle methods.", a: "Methods called during component's life." },
      { q: "What is state management?", a: "Managing app-wide state." },
      { q: "Explain push notifications.", a: "Messages sent from server to user device." },
      { q: "What is APK?", a: "Android Package for apps." },
      { q: "What is responsive design?", a: "Adapts UI to different screens." },
      { q: "What is native app?", a: "Built for specific platform with native code." },
      { q: "What is hybrid app?", a: "Web technologies wrapped in native shell." },
      { q: "Explain deep linking.", a: "Linking to specific content in app." },
      { q: "What is app store optimization?", a: "Improving visibility in app stores." },
      { q: "What is Expo?", a: "Toolchain for React Native development." },
      { q: "What is build.gradle?", a: "Build configuration for Android." },
      { q: "What is Xcode?", a: "IDE for iOS development." },
      { q: "Explain SQLite.", a: "Lightweight database for mobile." }
    ],
    "Product Manager": [
      { q: "What is product roadmap?", a: "Plan outlining product vision and priorities." },
      { q: "Explain MVP.", a: "Minimum Viable Product with core features." },
      { q: "What is user persona?", a: "Fictional user representing target audience." },
      { q: "Explain agile methodology.", a: "Iterative development approach." },
      { q: "What is backlog grooming?", a: "Prioritizing tasks in backlog." },
      { q: "What is sprint planning?", a: "Defining work for upcoming sprint." },
      { q: "What is KPI?", a: "Key Performance Indicator." },
      { q: "Explain OKRs.", a: "Objectives and Key Results." },
      { q: "What is user story?", a: "Short description of feature from user perspective." },
      { q: "What is wireframe?", a: "Basic design layout of UI." },
      { q: "Explain stakeholder management.", a: "Engaging with people with interest in product." },
      { q: "What is market fit?", a: "Product satisfies market demand." },
      { q: "What is A/B testing?", a: "Comparing two versions to see which performs better." },
      { q: "Explain churn rate.", a: "Percentage of users stopping use." },
      { q: "What is product lifecycle?", a: "Stages from introduction to decline." }
    ],
    "UI/UX Designer": [
      { q: "What is UX design?", a: "Designing user experience." },
      { q: "What is UI design?", a: "Designing user interface." },
      { q: "What is wireframe?", a: "Basic layout of a page." },
      { q: "What is prototyping?", a: "Early sample of product." },
      { q: "Explain user journey.", a: "Path user takes through a product." },
      { q: "What is user journey?", a: "Path user takes through a product." },
      { q: "What is usability testing?", a: "Evaluating how easy a design is to use." },
      { q: "Explain accessibility.", a: "Designing for users with disabilities." },
      { q: "What is design system?", a: "Reusable components and guidelines." },
      { q: "Explain information architecture.", a: "Organizing content for usability." },
      { q: "What is persona?", a: "Fictional user to guide design." },
      { q: "What is empathy map?", a: "Tool to understand user needs." },
      { q: "What is heuristic evaluation?", a: "Expert review for usability." },
      { q: "What is responsive design?", a: "Adapts UI to screen sizes." },
      { q: "Explain Figma.", a: "Collaborative design tool." },
      { q: "What is mood board?", a: "Visual inspiration board." },
      { q: "What is design thinking?", a: "Problem-solving approach with empathy." },
      { q: "What is A/B testing?", a: "Comparing two designs for performance." }
    ],
    "QA Engineer": [
      { q: "What is software testing?", a: "Process to verify software quality." },
      { q: "What is unit testing?", a: "Testing individual components." },
      { q: "Explain integration testing.", a: "Testing combined components." },
      { q: "What is system testing?", a: "Testing complete system." },
      { q: "What is regression testing?", a: "Ensuring new changes don't break existing features." },
      { q: "What is test case?", a: "Document describing input, action, expected result." },
      { q: "What is bug life cycle?", a: "Phases of bug from discovery to closure." },
      { q: "Explain automation testing.", a: "Using tools to execute tests." },
      { q: "What is Selenium?", a: "Automation testing tool for web apps." },
      { q: "What is API testing?", a: "Testing APIs for functionality and security." },
      { q: "Explain load testing.", a: "Testing performance under load." },
      { q: "What is smoke testing?", a: "Basic tests to ensure critical functionality." },
      { q: "What is sanity testing?", a: "Quick test after minor changes." },
      { q: "Explain black-box testing.", a: "Testing without knowing internal code." },
      { q: "What is white-box testing?", a: "Testing with knowledge of internal code." }
    ]
  };

 const handleRoleChange = (e) => {
    const role = e.target.value;
    setSelectedRole(role);
    setQuestions(questionsBank[role] || []);
  };

  // Improved, modern, attractive styling
  const styles = {
    container: {
      maxWidth: "850px",
      margin: "40px auto",
      padding: "30px 40px",
      borderRadius: "16px",
      background: "linear-gradient(to bottom right, #f9fbff, #e0e7ef)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      fontFamily: "Arial, sans-serif",
      color: "#333",
    },
    title: {
      fontSize: "30px",
      marginBottom: "30px",
      textAlign: "center",
      color: "#2c3e50",
      borderBottom: "3px solid #4b6cb7",
      paddingBottom: "12px",
      letterSpacing: "1px",
    },
    field: {
      marginBottom: "30px",
      textAlign: "center"
    },
    label: {
      fontWeight: "bold",
      display: "block",
      marginBottom: "12px",
      fontSize: "17px",
      color: "#34495e"
    },
    select: {
      width: "60%",
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "16px",
      outline: "none",
      transition: "border-color 0.3s",
      cursor: "pointer",
      backgroundColor: "#fff",
    },
    questionBox: {
      marginTop: "35px"
    },
    questionTitle: {
      fontSize: "24px",
      marginBottom: "20px",
      color: "#34495e",
      textAlign: "center",
      borderBottom: "2px solid #ccc",
      paddingBottom: "8px"
    },
    questionItem: {
      background: "linear-gradient(to right, #e8f0ff, #f9fbff)",
      padding: "18px 24px",
      borderRadius: "12px",
      marginBottom: "18px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.05)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    question: {
      fontWeight: "bold",
      color: "#2c3e50",
      marginBottom: "8px",
      fontSize: "17px"
    },
    answer: {
      color: "#555",
      fontSize: "16px",
      lineHeight: "1.6"
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Interview Preparation</h2>

      <div style={styles.field}>
        <label style={styles.label}>Select Role:</label>
        <select
          value={selectedRole}
          onChange={handleRoleChange}
          style={styles.select}
        >
          <option value="">Select a role</option>
          {roles.map((role, i) => (
            <option key={i} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      {questions.length > 0 && (
        <div style={styles.questionBox}>
          <h3 style={styles.questionTitle}>Top 15 Interview Questions and Answers:</h3>
          {questions.map((q, i) => (
            <div key={i} style={styles.questionItem}>
              <div style={styles.question}>{i + 1}. {q.q}</div>
              <div style={styles.answer}>{q.a}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InterviewPrep;