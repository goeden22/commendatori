import { motion } from "motion/react";
import { CommendatoriLogo } from "./CommendatoriLogo";

export function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md "
    >
      <div className="mx-auto py-6 flex justify-between items-center md:px-12 lg:px-24 px-6">
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.5rem',
            letterSpacing: '-0.01em',
            fontWeight: 500,
          }}
        >
          <CommendatoriLogo variant="full" color="light" size="sm" />
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-12">
          <a
            href="#contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.875rem',
              letterSpacing: '0.05em',
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
