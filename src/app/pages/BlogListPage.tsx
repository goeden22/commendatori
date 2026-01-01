import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "../types/blog";
import { getBlogPosts } from "../../data/blosPosts";

export function BlogListPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    getBlogPosts().then(setPosts);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="uppercase tracking-[0.2em] text-muted-foreground mb-6"
              style={{ fontSize: '0.75rem', fontFamily: 'DM Sans, sans-serif' }}
            >
              Insights & Perspectives
            </p>
            <h1
              className="max-w-4xl"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                fontWeight: 500,
              }}
            >
              Thoughts on Design, Strategy, and the Pursuit of Excellence
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
                      style={{ fontSize: '0.625rem', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {post.date}
                    </p>
                    <span className="text-muted-foreground">·</span>
                    <p
                      className="uppercase tracking-[0.2em] text-muted-foreground"
                      style={{ fontSize: '0.625rem', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {post.readTime}
                    </p>
                  </div>

                  {/* Title */}
                  <h2
                    className="mb-3 group-hover:text-muted-foreground transition-colors duration-300"
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                      lineHeight: '1.3',
                      letterSpacing: '-0.01em',
                      fontWeight: 500,
                    }}
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p
                    className="text-muted-foreground line-clamp-3 mb-4"
                    style={{
                      fontSize: '0.9375rem',
                      lineHeight: '1.7',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                    <span
                      className="uppercase tracking-[0.2em]"
                      style={{ fontSize: '0.75rem', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      Read Article
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
