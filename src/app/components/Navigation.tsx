import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CommendatoriLogo } from "./CommendatoriLogo";
import { Link } from "react-router-dom";

export function Navigation() {
  const [open, setOpen] = useState(false);

  const linkClasses =
    "text-muted-foreground hover:text-foreground transition-colors";

  const linkStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "0.875rem",
    letterSpacing: "0.05em",
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto py-6 flex justify-between items-center md:px-12 lg:px-24 px-6">
        
        {/* Logo */}
        <Link to="/" className={linkClasses} style={linkStyle}>
          <CommendatoriLogo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <Link to="/" className={linkClasses} style={linkStyle}>
            Home
          </Link>
          <Link to="/blog" className={linkClasses} style={linkStyle}>
            Blog & Insights
          </Link>
          <a href="/contact" className={linkClasses} style={linkStyle}>
            Contact
          </a>
        </div>

        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="block w-6 h-[1.5px] bg-foreground" />
          <span className="block w-6 h-[1.5px] bg-foreground" />
          <span className="block w-6 h-[1.5px] bg-foreground" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              <Link
                to="/"
                className={linkClasses}
                style={linkStyle}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/blog"
                className={linkClasses}
                style={linkStyle}
                onClick={() => setOpen(false)}
              >
                Blog & Insights
              </Link>
              <a
                href="/contact"
                className={linkClasses}
                style={linkStyle}
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
