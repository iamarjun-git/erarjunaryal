export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  tags: string[];
  content: string;
};

export type Note = {
  id: string;
  title: string;
  excerpt: string;
  updatedAt: string;
  tags: string[];
  content: string;
};
