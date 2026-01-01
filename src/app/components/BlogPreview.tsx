import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "../types/blog";
import { getRecentBlogPosts } from "../../data/blosPosts";

export function BlogPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    getRecentBlogPosts(3).then(setPosts);
  }, []);

  return (
    <section
      ref={ref}
      className="py-32 px-6 md:px-12 lg:px-24 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="uppercase tracking-[0.2em] text-muted-foreground mb-4"
            style={{ fontSize: "0.75rem", fontFamily: "DM Sans, sans-serif" }}
          >
            Blog & Insights
          </p>
          <div className="flex items-end justify-between gap-8">
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
                fontWeight: 500,
              }}
            >
              Recent Posts
            </h2>
            <Link
              to="/blog"
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
              style={{
                fontSize: "0.875rem",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              View all
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="group block">
                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden mb-6 bg-muted/30">
                  <ImageWithFallback
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <p
                    className="uppercase tracking-[0.2em] text-muted-foreground"
                    style={{
                      fontSize: "0.625rem",
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    {post.date}
                  </p>
                  <span className="text-muted-foreground">·</span>
                  <p
                    className="uppercase tracking-[0.2em] text-muted-foreground"
                    style={{
                      fontSize: "0.625rem",
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    {post.readTime}
                  </p>
                </div>

                {/* Title */}
                <h3
                  className="mb-3 group-hover:text-muted-foreground transition-colors duration-300"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                    lineHeight: "1.3",
                    letterSpacing: "-0.01em",
                    fontWeight: 500,
                  }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="text-muted-foreground line-clamp-3"
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: "1.7",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  {post.excerpt}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
