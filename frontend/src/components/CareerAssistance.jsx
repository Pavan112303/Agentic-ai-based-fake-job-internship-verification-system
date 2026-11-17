import { motion } from "framer-motion";
import { reveal } from "../lib/motion.js";

const FEATURES = [
  ["AI Preparation Module", "Get a personalized preparation roadmap based on the job role and company requirements.", ["Technical subject preparation", "Aptitude preparation", "Role-specific study roadmap"]],
  ["Company Exam Pattern", "Understand the recruitment process and examination pattern before applying.", ["Aptitude and technical assessment", "Coding and communication rounds", "Interview stages and sections"]],
  ["AI Interview Preparation", "Prepare for company-specific technical and HR interviews.", ["Technical and HR questions", "Frequently asked questions", "Practice interview sessions"]],
  ["CTC and Salary Insights", "Understand the compensation and benefits offered for the job or internship.", ["Offered CTC and salary breakdown", "Monthly compensation and stipend", "Additional benefits and comparisons"]],
  ["Company Insights", "Explore the company before applying for the opportunity.", ["Company overview and industry", "Office locations and work culture", "Official website and links"]],
  ["Skill Development Roadmap", "Understand the skills required for the position and prepare accordingly.", ["Technical skills and languages", "Frameworks and technologies", "Learning resources and roadmap"]],
];

export function CareerAssistance({ eligible = false }) {
  return (
    <section id="career" className="wrap career-section" aria-labelledby="career-title">
      <div className="section-heading">
        <p className="eyebrow">Career Assistance · Next Phase</p>
        <h2 id="career-title">Your Career Journey Doesn&apos;t End With Verification</h2>
        <p>
          Once an opportunity is assessed as likely legitimate, HireGuard AI will go beyond
          verification and help students prepare for the recruitment process.
        </p>
        {eligible && (
          <p className="career-qualified">
            This opportunity passed an AI-based initial assessment. That is not a guarantee of authenticity;
            continue to verify through official channels.
          </p>
        )}
      </div>
      <div className="career-grid">
        {FEATURES.map(([title, description, capabilities]) => (
          <motion.article key={title} className="career-card" {...reveal}>
            <span className="coming-soon">Coming Soon - Next Phase</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>{capabilities.map((item) => <li key={item}>{item}</li>)}</ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="wrap about-grid">
        <div>
          <p className="eyebrow">About HireGuard AI</p>
          <h2>Evidence before action.</h2>
        </div>
        <div className="about-copy">
          <p>
            Agentic AI Based Fake Job &amp; Internship Verification System is an intelligent job
            verification platform designed to protect students and freshers from fraudulent recruitment
            opportunities.
          </p>
          <p>
            The system uses multiple cooperating AI agents to extract claims, investigate companies and
            recruiters, analyze evidence and generate a risk-based verification report.
          </p>
          <p>
            In the next development phase, the platform will also provide career preparation assistance,
            company exam patterns, interview preparation, salary insights and skill development roadmaps.
          </p>
          <p className="stack"><b>Technology stack:</b> React.js · Python · FastAPI · LangChain · Gemini / Groq · SerpApi</p>
        </div>
      </div>
    </section>
  );
}
