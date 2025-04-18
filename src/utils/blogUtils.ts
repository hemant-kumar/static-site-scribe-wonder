
import { post1 } from '../data/blogPosts/post1';

export interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}

const blogPosts: Record<string, BlogPost> = {
  "1": post1,
  // Add more posts here as they are created
};

export const getBlogPost = (id: string): BlogPost | undefined => {
  return blogPosts[id];
};

export const getAllBlogPosts = (): BlogPost[] => {
  return Object.values(blogPosts);
};
