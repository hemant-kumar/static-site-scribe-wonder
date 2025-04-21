import { Link } from "react-router-dom";
import { getAllBlogPosts, estimateReadingTime } from '../utils/blogUtils';
import NewsletterSubscription from "../components/NewsletterSubscription";

const Index = () => {
  const allPosts = getAllBlogPosts();
  // Get the most recent post for the featured section
  const featuredPost = allPosts[0];
  // Get the next 6 posts for the grid
  const recentPosts = allPosts.slice(1, 7);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Hero Section with animated gradient text */}
      <header className="relative px-4 py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#84fab0,#8fd3f4)] opacity-5"></div>
        <h1 className="relative mb-6 text-7xl font-bold tracking-tight bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent animate-fade-in">
          Tech Chatter Box
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-600 leading-relaxed animate-fade-in">
          Where code meets creativity. Exploring the intersection of technology, design, and the future of web development.
        </p>
        <div className="flex justify-center gap-4 animate-fade-in">
          <Link to="/blog" className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-medium hover:opacity-90 transition-all hover:scale-105">
            Start Reading
          </Link>
          <a href="#newsletter" className="px-8 py-3 bg-white text-gray-800 rounded-full font-medium border border-gray-200 hover:border-green-300 transition-all hover:scale-105">
            Subscribe
          </a>
        </div>
      </header>

      {/* Featured Posts Grid */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <h2 className="mb-12 text-4xl font-bold text-gray-900 text-center">
          Latest <span className="text-green-600">Stories</span>
        </h2>
        
        {/* Main Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <article className="group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="h-[400px] overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                    alt={featuredPost.title}
                    className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 mb-4 w-fit">
                    Featured
                  </span>
                  <Link to={`/blog/${featuredPost.id}`}>
                    <h3 className="mb-4 text-3xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                      {featuredPost.title}
                    </h3>
                  </Link>
                  <p className="mb-6 text-gray-600 line-clamp-3">
                    {featuredPost.content.replace(/<[^>]*>/g, '').slice(0, 150)}...
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                    <div className="flex items-center gap-2">
                      <img
                        src="/author.png"
                        alt={featuredPost.author}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{featuredPost.author}</p>
                        <p>{featuredPost.category}</p>
                      </div>
                    </div>
                    <span>{estimateReadingTime(featuredPost.content)} min read</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Grid of Stories */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <article key={post.id} className="group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4 h-56 overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt={post.title}
                  className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 mb-4">
                {post.category}
              </span>
              <Link to={`/blog/${post.id}`}>
                <h3 className="mb-3 text-2xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                  {post.title}
                </h3>
              </Link>
              <p className="mb-4 text-gray-600 line-clamp-2">
                {post.content.replace(/<[^>]*>/g, '').slice(0, 150)}...
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <img
                    src="/author.png"
                    alt={post.author}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{post.author}</span>
                </div>
                <span>{estimateReadingTime(post.content)} min read</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="relative py-24 mt-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 skew-y-3 transform origin-bottom-right"></div>
        <div className="relative mx-auto max-w-2xl px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">Never Miss a Post</h2>
          <p className="mb-8 text-green-100">Join our newsletter and get the latest articles delivered straight to your inbox.</p>
          <NewsletterSubscription />
        </div>
      </section>
    </div>
  );
};

export default Index;
