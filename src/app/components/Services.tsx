import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    title: "SEO for Interior Designers",
    description:
      "Strategic visibility built through editorial-quality content, technical precision, and deep industry positioning. We don't chase algorithms — we build authority.",
    image:
      "https://images.unsplash.com/photo-1625259960906-725234a78ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGRhcmt8ZW58MXx8fHwxNzY3MjE1MDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Content Strategy",
    description:
      "Sophisticated storytelling that reflects your design philosophy. Each piece is crafted to position your studio as a category leader, not a service provider.",
    image:
      "https://images.unsplash.com/photo-1651841689205-8eeb7ce02a73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBpbnRlcmlvciUyMHN0b25lfGVufDF8fHx8MTc2NzIxNTA1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Brand-Aligned Digital Marketing",
    description:
      "Marketing that respects your aesthetic standards. Every touchpoint is designed to reinforce the caliber of your work.",
    image:
      "https://images.unsplash.com/photo-1665043548178-8e606eca11eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDF8fHx8MTc2NzE3MDA2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-32 px-6 md:px-12 lg:px-24 bg-card border-t border-border"
    >
      <p
        className="uppercase tracking-[0.2em] text-muted-foreground mb-8"
        style={{ fontSize: "0.75rem", fontFamily: "DM Sans, sans-serif" }}
      >
        Services
      </p>
      <div className="max-w-7xl mx-auto">
        {/* Right - Services Grid */}

        {services.map((service, index) => (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-16">
            {/* Left - Section Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="order-2 lg:order-1 overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src={service.image}
                  alt={service.image}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
            <div className="lg:col-span-8 space-y-16">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="border-b border-border pb-12 last:border-b-0"
              >
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    lineHeight: "1.3",
                    letterSpacing: "-0.01em",
                    fontWeight: 500,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-muted-foreground"
                  style={{ fontSize: "1.0625rem", lineHeight: "1.75" }}
                >
                  {service.description}
                </p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
