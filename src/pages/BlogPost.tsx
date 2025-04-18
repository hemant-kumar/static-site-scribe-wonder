
import { FileText } from "lucide-react";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
      <div className="container mx-auto px-4">
        <article className="max-w-3xl mx-auto">
          {/* Hero Image */}
          <div className="mb-8 h-[400px] overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Blog Post Hero"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-purple-600 mb-4">
              <FileText size={20} />
              <span className="text-sm font-medium">Development</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Understanding Modern Web Development
            </h1>
            <div className="flex items-center justify-between text-gray-500">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="Author"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900">John Doe</p>
                  <p className="text-sm">Published on April 18, 2025</p>
                </div>
              </div>
              <span className="text-sm">8 min read</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-purple max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              The Evolution of Web Development
            </h2>
            <p className="text-gray-700 mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <blockquote className="border-l-4 border-purple-500 pl-4 italic my-6">
              "The best way to predict the future is to invent it." - Alan Kay
            </blockquote>
            <p className="text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
