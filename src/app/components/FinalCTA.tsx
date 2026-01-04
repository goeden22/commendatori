import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="contact" className="py-40 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-10"
        >
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: '1.15',
              letterSpacing: '-0.02em',
              fontWeight: 500,
            }}
          >
            Let's Discuss Your Position in the Market
          </h2>

          <p
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontSize: '1.125rem', lineHeight: '1.8' }}
          >
            If you're ready to move beyond generic marketing and build lasting authority in the interior design industry, we should talk.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="pt-6"
          >
            <a
              href="mailto:contact@commendatori.org"
              className="inline-block mb-4 bg-primary text-primary-foreground px-12 py-5 hover:bg-accent transition-all duration-300"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.875rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              Start a Conversation
            </a>
          </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="pt-6"
          >
       <a
              href="mailto:contact@commendatori.org"
              className="block mb-3 text-foreground hover:text-primary transition-colors"
              style={{ fontSize: "1rem" }}
            >
              contact@commendatori.org
            </a>
            <a
              href="tel:+48501347369"
              className="block text-foreground hover:text-primary transition-colors"
              style={{ fontSize: "1rem" }}
            >
              +48 501 347 369
            </a>
          </motion.div>
               
          
        </motion.div>
      </div>
    </section>
  );
}
