import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const caseStudies = [
  {
    client: "Atelier Moderne",
    sector: "Residential Design Studio",
    result: "+340% organic visibility",
    metric: "Editorial features in Architectural Digest, Elle Decor",
    image: "https://images.unsplash.com/photo-1625259960906-725234a78ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGRhcmt8ZW58MXx8fHwxNzY3MjE1MDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    client: "Stone & Form",
    sector: "Commercial Interiors",
    result: "+180% qualified leads",
    metric: "Average project value: $450K+",
    image: "https://images.unsplash.com/photo-1651841689205-8eeb7ce02a73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBpbnRlcmlvciUyMHN0b25lfGVufDF8fHx8MTc2NzIxNTA1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    client: "Nordic Interiors Co.",
    sector: "Boutique Design Practice",
    result: "+220% search authority",
    metric: "Featured speaker at design conferences",
    image: "https://images.unsplash.com/photo-1665043548178-8e606eca11eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDF8fHx8MTc2NzE3MDA2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 lg:px-24 bg-card border-t border-border">
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
            Select Work
          </p>
          <h2
            className="max-w-3xl"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
              fontWeight: 500,
            }}
          >
            Results that reflect the caliber of our clients
          </h2>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div className="order-2 lg:order-1 overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src={study.image}
                  alt={study.client}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div>
                  <p
                    className="text-muted-foreground mb-2"
                    style={{ fontSize: '0.875rem', letterSpacing: '0.05em' }}
                  >
                    {study.sector}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                      lineHeight: '1.2',
                      letterSpacing: '-0.01em',
                      fontWeight: 500,
                    }}
                  >
                    {study.client}
                  </h3>
                </div>

                <div className="space-y-3 pt-4 border-t border-border">
                  <p style={{ fontSize: '1.5rem', fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>
                    {study.result}
                  </p>
                  <p className="text-muted-foreground" style={{ fontSize: '1rem' }}>
                    {study.metric}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
