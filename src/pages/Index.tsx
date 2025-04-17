
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section with animated gradient text */}
      <header className="relative px-4 py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#84fab0,#8fd3f4)] opacity-5"></div>
        <h1 className="relative mb-6 text-7xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in">
          The Developer's
          <br /> 
          <span className="text-8xl">Journal</span>
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-600 leading-relaxed animate-fade-in">
          Where code meets creativity. Exploring the intersection of technology, design, and the future of web development.
        </p>
        <div className="flex justify-center gap-4 animate-fade-in">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:opacity-90 transition-all hover:scale-105">
            Start Reading
          </button>
          <button className="px-8 py-3 bg-white text-gray-800 rounded-full font-medium border border-gray-200 hover:border-purple-300 transition-all hover:scale-105">
            Subscribe
          </button>
        </div>
      </header>

      {/* Featured Posts Grid with enhanced design */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <h2 className="mb-12 text-4xl font-bold text-gray-900 text-center">
          Latest <span className="text-purple-600">Stories</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured Post 1 */}
          <article className="group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 h-56 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Tech Blog"
                className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-700 mb-4">
              Development
            </span>
            <h3 className="mb-3 text-2xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
              The Future of Web Development
            </h3>
            <p className="mb-4 text-gray-600 line-clamp-2">
              Exploring the latest trends and technologies shaping the future of web development.
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

          {/* Featured Post 2 */}
          <article className="group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 h-56 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Design Blog"
                className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700 mb-4">
              Design
            </span>
            <h3 className="mb-3 text-2xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
              Designing for the Modern Web
            </h3>
            <p className="mb-4 text-gray-600 line-clamp-2">
              Essential design principles for creating beautiful and functional web applications.
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                  alt="Author"
                  className="w-8 h-8 rounded-full"
                />
                <span>Jane Smith</span>
              </div>
              <span>4 min read</span>
            </div>
          </article>

          {/* Featured Post 3 */}
          <article className="group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 h-56 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Programming Blog"
                className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 mb-4">
              AI & ML
            </span>
            <h3 className="mb-3 text-2xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
              AI in Modern Development
            </h3>
            <p className="mb-4 text-gray-600 line-clamp-2">
              How artificial intelligence is revolutionizing the way we build and deploy applications.
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="Author"
                  className="w-8 h-8 rounded-full"
                />
                <span>Mike Johnson</span>
              </div>
              <span>6 min read</span>
            </div>
          </article>
        </div>
      </section>

      {/* Newsletter Section with enhanced design */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 skew-y-3 transform origin-bottom-right"></div>
        <div className="relative mx-auto max-w-2xl px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">Never Miss a Post</h2>
          <p className="mb-8 text-purple-100">Join our newsletter and get the latest articles delivered straight to your inbox.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-sm rounded-full px-6 py-3 text-gray-900 shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button className="px-8 py-3 bg-white text-purple-600 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-xl hover:scale-105 transform transition-transform duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
