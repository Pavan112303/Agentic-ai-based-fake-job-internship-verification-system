import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ease, rise } from "../lib/motion.js";
import { Icon } from "./Icons.jsx";

export function Hero({ onCheck, onTrySample }) {
  return (
    <section id="home" className="hero wrap">
      <div className="hero-copy">
        <motion.p className="eyebrow" variants={rise} initial="hidden" animate="show" custom={0}>
          HireGuard AI · For students &amp; freshers
        </motion.p>
        <motion.h1 variants={rise} initial="hidden" animate="show" custom={1}>
          <span className="project-title">Agentic AI Based Fake Job &amp; Internship Verification System</span>
          Verify Before You Apply.
          <span className="h1-gold">
            Protect your career.
            <svg className="h1-streak" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
              <motion.path
                d="M4 13 C 70 4, 150 18, 296 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease, delay: 0.8 }}
              />
            </svg>
          </span>
        </motion.h1>
        <motion.p className="lede" variants={rise} initial="hidden" animate="show" custom={2}>
          Protect your career from fraudulent job offers and internship scams. Our Agentic AI system
          investigates job opportunities, verifies recruiters and analyzes suspicious activities before
          you make a decision.
        </motion.p>
        <motion.div className="hero-cta" variants={rise} initial="hidden" animate="show" custom={3}>
          <button type="button" className="btn btn-dark" onClick={onCheck}>
            Verify Job / Internship <Icon name="arrow" />
          </button>
          <button type="button" className="btn btn-ghost" onClick={onTrySample}>
            Explore How It Works
          </button>
        </motion.div>
        <motion.ul className="chips" variants={rise} initial="hidden" animate="show" custom={4}>
          <li><b>4</b> AI agents</li>
          <li><b>5</b> SerpApi engines</li>
          <li>Every claim sourced</li>
        </motion.ul>
        <motion.p className="name-note" variants={rise} initial="hidden" animate="show" custom={5}>
          <span className="hero-shield" aria-hidden="true">✓</span>
          Four cooperating AI agents turn offer claims into an evidence-based risk assessment.
        </motion.p>
      </div>
      <ScanDemo />
    </section>
  );
}

// A looping, synthetic example of HireGuard AI flagging a scam.
const FLAGS = {
  pay: { note: "Asks you to pay over UPI", tone: "scam", at: 1.0 },
  rush: { note: "24-hour pressure", tone: "warn", at: 1.5 },
  mail: { note: "Free gmail sender, not infosys.com", tone: "scam", at: 2.3 },
};

function Flagged({ id, children }) {
  const f = FLAGS[id];
  return (
    <motion.mark
      className={`hl hl-${f.tone}`}
      initial={{ backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={{ duration: 0.5, ease, delay: f.at }}
    >
      {children}
    </motion.mark>
  );
}

function ScanDemo() {
  const reduce = useReducedMotion();
  const [cycle, setCycle] = useState(0);
  useEffect(() => {
    if (reduce) return undefined;
    const id = setInterval(() => setCycle((c) => c + 1), 9000);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <motion.div
      className="scan-card"
      initial={{ opacity: 0, y: 28, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.9, ease, delay: 0.25 }}
      role="img"
      aria-label="Example: HireGuard AI flags a synthetic scam message: a UPI deposit, a 24-hour deadline and a gmail sender."
    >
      <div className="scan-head">
        <span className="scan-dot" />
        Incoming offer · WhatsApp
        <span className="scan-tag">synthetic example</span>
      </div>
      <div className="scan-body" key={cycle}>
        <motion.div
          className="scan-beam"
          initial={{ top: "-12%", opacity: 0 }}
          animate={{ top: ["-12%", "104%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3, ease: "easeInOut", times: [0, 0.1, 0.9, 1] }}
        />
        <p>Dear Candidate, congratulations! You are shortlisted for <b>Data Analyst Intern</b> at Infosys Limited.</p>
        <p>
          To confirm your seat, pay a <Flagged id="pay">refundable laptop deposit of ₹2,499 via UPI</Flagged>{" "}
          <Flagged id="rush">within 24 hours</Flagged>.
        </p>
        <p className="scan-from">HR Desk · <Flagged id="mail">infosys.hrdesk.careers@gmail.com</Flagged></p>
        <ul className="scan-notes">
          {Object.entries(FLAGS).map(([id, f]) => (
            <motion.li
              key={id}
              className={`note note-${f.tone}`}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease, delay: f.at + 0.15 }}
            >
              <span className="note-dot" />
              {f.note}
            </motion.li>
          ))}
        </ul>
        <motion.div
          className="scan-verdict"
          initial={{ opacity: 0, scale: 1.7, rotate: -14 }}
          animate={{ opacity: 1, scale: 1, rotate: -5 }}
          transition={{ type: "spring", stiffness: 420, damping: 18, delay: 3.1 }}
        >
          Likely scam · 95
        </motion.div>
      </div>
    </motion.div>
  );
}
