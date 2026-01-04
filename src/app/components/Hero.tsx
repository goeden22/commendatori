import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1761472651560-f5ae4f4fda1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXJibGUlMjBpbnRlcmlvciUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjcyMTUzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury interior architecture"
          className="w-full h-full object-cover grayscale-5"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Small overline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="uppercase tracking-[0.2em] text-muted-foreground"
            style={{ fontSize: '0.75rem', fontFamily: 'DM Sans, sans-serif' }}
          >
            Commendatori
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-5xl"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              fontWeight: 500,
            }}
          >
            SEO & Marketing for Interior Designers Who Compete at the Top
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-2xl text-muted-foreground"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: '1.7',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            We build lasting authority and visibility for design studios who refuse to compete on price. Strategic, sophisticated, built for the long term.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="pt-4"
          >
            <a
              href="#contact"
              className="inline-block border border-primary px-10 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.875rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Request a Strategy Call
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}