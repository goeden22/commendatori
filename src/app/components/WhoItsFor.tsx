import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function WhoItsFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-32 px-6 md:px-12 lg:px-24 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <p
              className="uppercase tracking-[0.2em] text-muted-foreground mb-8"
              style={{ fontSize: "0.75rem", fontFamily: "DM Sans, sans-serif" }}
            >
              Who It's For
            </p>
            <div className="top-32 overflow-hidden aspect-[3/4]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763598461615-610264129bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYnVzaW5lc3NtYW4lMjBzdWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NzIxNTM5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional interior designer"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 space-y-8"
          >
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
                fontWeight: 500,
              }}
            >
              Interior designers, studios, and architecture-led brands seeking
              clients who value craft over cost
            </h2>

            <div
              className="space-y-6 text-muted-foreground"
              style={{ fontSize: "1.125rem", lineHeight: "1.8" }}
            >
              <p>
                Our clients don't compete in crowded marketplaces. They lead
                their categories. They create work that earns editorial
                coverage, not just clicks.
              </p>
              <p>
                If your studio is defined by creative rigor, meticulous
                execution, and an uncompromising standard of quality — we speak
                your language.
              </p>
              <p>
                We work with design practices that understand the value of
                positioning, patience, and doing things the right way.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
