import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const reasons = [
  {
    title: "Industry Specialists",
    description: "We only work with interior design brands. This singular focus means we understand your clients, your competition, and the nuances of positioning a creative practice.",
  },
  {
    title: "Editorial Thinking",
    description: "Our strategies are informed by how high-end design media operates — not how generic marketing agencies think. We know what earns attention in your world.",
  },
  {
    title: "Long-Term Partnership",
    description: "We're not here to deliver quick wins. We build compounding authority that grows in value over years, not quarters.",
  },
  {
    title: "Aesthetic Standards",
    description: "Every touchpoint we create reflects the same level of craft and intention you bring to your interiors. No shortcuts. No compromises.",
  },
];

export function WhyCommendatori() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p
            className="uppercase tracking-[0.2em] text-muted-foreground mb-6"
            style={{ fontSize: '0.75rem', fontFamily: 'DM Sans, sans-serif' }}
          >
            Why Commendatori
          </p>
          <h2
            className="max-w-4xl"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
              fontWeight: 500,
            }}
          >
            We understand the business of design because it's all we do
          </h2>
        </motion.div>

        {/* Grid of Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
              className="space-y-4"
            >
              <h3
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)',
                  lineHeight: '1.3',
                  letterSpacing: '-0.01em',
                  fontWeight: 500,
                }}
              >
                {reason.title}
              </h3>
              <p
                className="text-muted-foreground"
                style={{ fontSize: '1.0625rem', lineHeight: '1.75' }}
              >
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
