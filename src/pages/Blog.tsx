
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Blog Posts</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Example blog posts */}
          {[1, 2, 3, 4, 5, 6].map((post) => (
            <article key={post} className="group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4 h-56 overflow-hidden rounded-xl">
                <img
                  src={`https://images.unsplash.com/photo-${post === 1 ? '1488590528505-98d2b5aba04b' : '1649972904349-6e44c42644a7'}`}
                  alt="Blog Post"
                  className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <Link to={`/blog/${post}`} className="inline-block">
                <h3 className="mb-3 text-2xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                  Blog Post {post}
                </h3>
              </Link>
              <p className="mb-4 text-gray-600 line-clamp-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                    alt="Author"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>John Doe</span>
                </div>
                <span>5 min read</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
