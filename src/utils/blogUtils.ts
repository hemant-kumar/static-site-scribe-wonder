import { java_a101 } from '../data/blogPosts/java/java_a101';
import { java_a102 } from '../data/blogPosts/java/java_a102';
import { java_a103 } from '../data/blogPosts/java/java_a103';
import { java_a104 } from '../data/blogPosts/java/java_a104';
import { java_a105 } from '../data/blogPosts/java/java_a105';
import { java_a106 } from '../data/blogPosts/java/java_a106';
import { java_a107 } from '../data/blogPosts/java/java_a107';
import { java_a108 } from '../data/blogPosts/java/java_a108';
import { java_a109 } from '../data/blogPosts/java/java_a109';
import { java_a110 } from '../data/blogPosts/java/java_a110';
import { java_a111 } from '../data/blogPosts/java/java_a111';
import { java_a112 } from '../data/blogPosts/java/java_a112';
import { java_a113 } from '../data/blogPosts/java/java_a113';
import { java_a114 } from '../data/blogPosts/java/java_a114';
import { java_a115 } from '../data/blogPosts/java/java_a115';
import { java_a116 } from '../data/blogPosts/java/java_a116';
import { java_a117 } from '../data/blogPosts/java/java_a117';
import { java_a118 } from '../data/blogPosts/java/java_a118';
import { java_a119 } from '../data/blogPosts/java/java_a119';
import { java_a120 } from '../data/blogPosts/java/java_a120';
import { java_a121 } from '../data/blogPosts/java/java_a121';
import { java_a122 } from '../data/blogPosts/java/java_a122';
import { java_a123 } from '../data/blogPosts/java/java_a123';
import { java_a124 } from '../data/blogPosts/java/java_a124';

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}

const blogPosts: Record<string, BlogPost> = {
  "java_a101": java_a101,
  "java_a102": java_a102,
  "java_a103": java_a103,
  "java_a104": java_a104,
  "java_a105": java_a105,
  "java_a106": java_a106,
  "java_a107": java_a107,
  "java_a108": java_a108,
  "java_a109": java_a109,
  "java_a110": java_a110,
  "java_a111": java_a111,
  "java_a112": java_a112,
  "java_a113": java_a113,
  "java_a114": java_a114,
  "java_a115": java_a115,
  "java_a116": java_a116,
  "java_a117": java_a117,
  "java_a118": java_a118,
  "java_a119": java_a119,
  "java_a120": java_a120,
  "java_a121": java_a121,
  "java_a122": java_a122,
  "java_a123": java_a123,
  "java_a124": java_a124
};

export const getBlogPost = (id: string): BlogPost | undefined => {
  return blogPosts[id];
};

export const getAllBlogPosts = (): BlogPost[] => {
  return Object.values(blogPosts);
};

export const estimateReadingTime = (html) => {
  const text = html.replace(/<[^>]+>/g, ''); // Strip HTML tags
  const charCount = text.length;
  const minutes = Math.ceil(charCount / 1125);
  return minutes;
}
