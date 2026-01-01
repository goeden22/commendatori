// Blog content block types
export type BlogContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'image'; url: string; alt: string; caption?: string }
  | { type: 'paragraphWithImage'; text: string; imageUrl: string; imageAlt: string; imagePosition: 'left' | 'right' };

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  author: string;
  date: string;
  readTime: string;
  content: BlogContentBlock[];
}

export interface BlogPreview {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  author: string;
  date: string;
  readTime: string;
}
