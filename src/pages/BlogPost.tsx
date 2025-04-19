
import { useParams } from 'react-router-dom';
import { FileText } from "lucide-react";
import { getBlogPost, estimateReadingTime } from '../utils/blogUtils';
import { useToast } from '@/hooks/use-toast';

const BlogPost = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const post = getBlogPost(id || "");

  if (!post) {
    toast({
      title: "Post not found",
      description: "The requested blog post could not be found.",
      variant: "destructive"
    });
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
      <div className="container mx-auto px-4">
        <article className="max-w-3xl mx-auto">
          {/* Hero Image */}
          <div className="mb-8 h-[400px] overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-purple-600 mb-4">
              <FileText size={20} />
              <span className="text-sm font-medium">{post.category}</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center justify-between text-gray-500">
              <div className="flex items-center gap-3">
                <img
                  src="/author.png"
                  alt="Author"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900">{post.author}</p>
                  <p className="text-sm">{post.date}</p>
                </div>
              </div>
              <span className="text-sm">{estimateReadingTime(post.content)} min read</span>
            </div>
          </div>

          {/* Article Content */}
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
