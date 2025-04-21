
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getBlogPost, estimateReadingTime } from "../utils/blogUtils";
import BlogComments from "@/components/BlogComments";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = getBlogPost(id || "");

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Post not found</h1>
        <p>The blog post you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16">
      <Helmet>
        <title>{post.title} - Tech Chatter Box</title>
        <meta name="description" content={post.title} />
        <meta property="og:title" content={`${post.title} - Tech Chatter Box`} />
        <meta property="og:description" content={post.title} />
        <meta name="keywords" content={post.keywords?.join(", ")} />
      </Helmet>

      <article className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center justify-between text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-3">
              <img src="/author.png" alt={post.author} className="w-10 h-10 rounded-full" />
              <span>{post.author}</span>
            </div>
            <div className="flex gap-4">
              <span>{post.date}</span>
              <span>{estimateReadingTime(post.content)} min read</span>
            </div>
          </div>
        </div>

        <div className="prose prose-lg prose-green max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Blog Comments Component */}
        <BlogComments />
      </article>
    </div>
  );
};

export default BlogPost;
