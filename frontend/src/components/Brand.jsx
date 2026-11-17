import { motion } from "framer-motion";

export function HireGuardMark({ size = 30, draw = true }) {
  return (
    <svg className="mark" width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect x="2" y="5" width="28" height="22" rx="6" className="mark-stone" />
      <motion.path
        d="M8 20 C 12 12, 18 22, 24 11"
        className="mark-streak"
        initial={draw ? { pathLength: 0 } : false}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
      />
    </svg>
  );
}

export function TopBar() {
  return (
    <header className="topbar">
      <div className="wrap topbar-inner">
        <a className="brand" href="/" aria-label="HireGuard AI home">
          <HireGuardMark />
          <span className="brand-name">HireGuard <em>AI</em></span>
        </a>
        <nav className="topnav" aria-label="Main">
          <a href="#home">Home</a>
          <a href="#how">How It Works</a>
          <a href="#check">Verify Job</a>
          <a href="#career">Career Assistance</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-brand"><HireGuardMark size={22} draw={false} /> HireGuard AI</div>
        <strong>Agentic AI Based Fake Job &amp; Internship Verification System</strong>
        <p>Verify Opportunities. Protect Your Career.</p>
        <p>
          HireGuard AI gives evidence, not legal advice. If you've already paid, report it at{" "}
          <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">cybercrime.gov.in</a> or call <b>1930</b>.
        </p>
        <p className="muted">Search powered by SerpApi</p>
      </div>
    </footer>
  );
}
