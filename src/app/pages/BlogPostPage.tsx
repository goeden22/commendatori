import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";

import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowLeft } from "lucide-react";
import { BlogContentBlock, BlogPost } from "../types/blog";
import { getBlogPost } from "../../data/blosPosts";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (slug) {
      getBlogPost(slug).then((data) => {
        setPost(data || null);
      });
    }
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <p className="text-muted-foreground">Post not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="pt-32 pb-16 px-6 md:px-12 lg:px-24 border-b border-border">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-12"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span
              className="uppercase tracking-[0.2em]"
              style={{ fontSize: "0.75rem", fontFamily: "DM Sans, sans-serif" }}
            >
              Back to Insights
            </span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Meta */}
            <div className="flex items-center gap-3 mb-8">
              <p
                className="uppercase tracking-[0.2em] text-muted-foreground"
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                {post.date}
              </p>
              <span className="text-muted-foreground">·</span>
              <p
                className="uppercase tracking-[0.2em] text-muted-foreground"
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                {post.readTime}
              </p>
              <span className="text-muted-foreground">·</span>
              <p
                className="uppercase tracking-[0.2em] text-muted-foreground"
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                {post.author}
              </p>
            </div>

            {/* Title */}
            <h1
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: "1.15",
                letterSpacing: "-0.02em",
                fontWeight: 500,
                marginBottom: "1.5rem",
              }}
            >
              {post.title}
            </h1>

            {/* Excerpt */}
            <p
              className="text-muted-foreground max-w-3xl"
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.8",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-[16/9] overflow-hidden bg-muted/30">
            <ImageWithFallback
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-3xl mx-auto space-y-12">
          {post.content.map((block, index) => (
            <ContentBlock key={index} block={block} />
          ))}
        </div>
      </article>

      {/* Footer CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="uppercase tracking-[0.2em] text-muted-foreground mb-6"
            style={{ fontSize: "0.75rem", fontFamily: "DM Sans, sans-serif" }}
          >
            Ready to Elevate Your Brand?
          </p>
          <h2
            className="mb-8"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
              fontWeight: 500,
            }}
          >
            Let's Discuss Your Project
          </h2>
          <Link
            to="/"
            className="inline-block px-8 py-4 border border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <span
              className="uppercase tracking-[0.2em]"
              style={{ fontSize: "0.75rem", fontFamily: "DM Sans, sans-serif" }}
            >
              Get in Touch
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}

// Content Block Renderer Component
function ContentBlock({ block }: { block: BlogContentBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            fontWeight: 500,
          }}
        >
          {block.text}
        </h2>
      );

    case "paragraph":
      return (
        <p
          className="text-foreground/90"
          style={{
            fontSize: "1.0625rem",
            lineHeight: "1.9",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          {block.text}
        </p>
      );

    case "image":
      return (
        <figure className="my-16">
          <div className="aspect-[16/10] overflow-hidden bg-muted/30 mb-4">
            <ImageWithFallback
              src={block.url}
              alt={block.alt}
              className="w-full h-full object-cover grayscale"
            />
          </div>
          {block.caption && (
            <figcaption
              className="text-center text-muted-foreground italic"
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.6",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "paragraphWithImage":
      return (
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-16 ${
            block.imagePosition === "right" ? "" : "lg:grid-flow-dense"
          }`}
        >
          <div
            className={block.imagePosition === "right" ? "" : "lg:col-start-2"}
          >
            <p
              className="text-foreground/90"
              style={{
                fontSize: "1.0625rem",
                lineHeight: "1.9",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              {block.text}
            </p>
          </div>
          <div
            className={`aspect-square overflow-hidden bg-muted/30 ${
              block.imagePosition === "right"
                ? ""
                : "lg:col-start-1 lg:row-start-1"
            }`}
          >
            <ImageWithFallback
              src={block.imageUrl}
              alt={block.imageAlt}
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      );

    default:
      return null;
  }
}
