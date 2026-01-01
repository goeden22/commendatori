import { BlogPost } from "../app/types/blog";

// Static blog data - can easily be replaced with API calls
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "seo-strategy-for-interior-designers",
    title: "SEO Strategy for Interior Designers: Beyond the Basics",
    excerpt:
      "Discover how interior design studios can leverage advanced SEO techniques to attract high-value clients and establish industry authority.",
    featuredImage:
      "https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjcyODE0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Alessandro Romano",
    date: "December 15, 2025",
    readTime: "8 min read",
    content: [
      {
        type: "heading",
        text: "The Architecture of Digital Presence",
      },
      {
        type: "paragraph",
        text: "In the realm of luxury interior design, your digital presence should mirror the sophistication of your physical work. SEO is not merely about rankings—it's about crafting a narrative that resonates with discerning clients who value excellence over expedience.",
      },
      {
        type: "paragraphWithImage",
        text: "Consider the editorial quality of your content. Just as you would never compromise on the materials in a project, your digital content should exhibit the same level of refinement. Each article, each page, each meta description is a reflection of your studio's commitment to quality.",
        imageUrl:
          "https://images.unsplash.com/photo-1763026481968-9c6240527c37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcmNoaXRlY3R1cmUlMjBkZXRhaWx8ZW58MXx8fHwxNjcyODE0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        imageAlt: "Architectural detail",
        imagePosition: "right",
      },
      {
        type: "heading",
        text: "Content as Curation",
      },
      {
        type: "paragraph",
        text: "The most effective SEO strategies for design studios are built on a foundation of editorial rigor. Your content should demonstrate expertise, establish authority, and create trust—the pillars of E-A-T that search engines increasingly prioritize.",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNjcyNjU4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Minimalist interior",
        caption: "Restraint in design translates to clarity in communication",
      },
      {
        type: "paragraph",
        text: "We work with studios that understand this implicitly. Their approach to digital marketing is patient, measured, and deeply considered—qualities that distinguish exceptional work from merely competent execution.",
      },
    ],
  },
  {
    id: "2",
    slug: "positioning-luxury-design-brands",
    title: "Positioning Luxury Design Brands in a Crowded Market",
    excerpt:
      "How architectural and interior design studios can differentiate themselves through strategic positioning and authentic storytelling.",
    featuredImage:
      "https://images.unsplash.com/photo-1763026481968-9c6240527c37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcmNoaXRlY3R1cmUlMjBkZXRhaWx8ZW58MXx8fHwxNjcyODE0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Alessandro Romano",
    date: "November 28, 2025",
    readTime: "6 min read",
    content: [
      {
        type: "heading",
        text: "The Language of Distinction",
      },
      {
        type: "paragraph",
        text: "Positioning is not about being different for the sake of difference. It's about clarity of purpose, consistency of execution, and an unwavering commitment to a specific point of view.",
      },
      {
        type: "paragraph",
        text: "The studios we admire don't chase trends. They set standards. Their work speaks a coherent visual language that becomes instantly recognizable—not through gimmicks, but through disciplined creative vision.",
      },
    ],
  },
  {
    id: "3",
    slug: "editorial-approach-to-design-marketing",
    title: "An Editorial Approach to Design Marketing",
    excerpt:
      "Why interior design studios should think like publishers and how this shift in perspective transforms client relationships.",
    featuredImage:
      "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNjcyNjU4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Alessandro Romano",
    date: "October 10, 2025",
    readTime: "10 min read",
    content: [
      {
        type: "heading",
        text: "Curation Over Promotion",
      },
      {
        type: "paragraph",
        text: "The best design marketing doesn't feel like marketing at all. It reads like a carefully curated magazine, where each piece of content is selected for its intrinsic merit rather than its promotional value.",
      },
      {
        type: "paragraph",
        text: "This editorial sensibility is what distinguishes luxury brands from mass-market competitors. It's about respecting your audience's intelligence and aesthetic sensibility.",
      },
    ],
  },
];

// API-ready function structure
export async function getBlogPosts(): Promise<BlogPost[]> {
  // Currently returns static data
  // Replace with: return fetch('/api/blog').then(res => res.json());
  return Promise.resolve(blogPosts);
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  // Currently returns static data
  // Replace with: return fetch(`/api/blog/${slug}`).then(res => res.json());
  return Promise.resolve(blogPosts.find((post) => post.slug === slug));
}

export async function getRecentBlogPosts(
  limit: number = 3
): Promise<BlogPost[]> {
  // Currently returns static data
  // Replace with: return fetch(`/api/blog?limit=${limit}`).then(res => res.json());
  return Promise.resolve(blogPosts.slice(0, limit));
}
