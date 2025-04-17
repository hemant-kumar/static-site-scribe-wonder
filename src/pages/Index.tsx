
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <header className="px-4 py-32 text-center">
        <h1 className="mb-6 text-6xl font-bold tracking-tight text-gray-900">
          Welcome to <span className="text-blue-600">MyBlog</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
          Exploring ideas, sharing stories, and documenting the journey through technology and life.
        </p>
      </header>

      {/* Featured Posts Grid */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <h2 className="mb-12 text-3xl font-bold text-gray-900">Featured Posts</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured Post 1 */}
          <article className="group rounded-lg bg-white p-6 shadow-lg transition-transform hover:-translate-y-1">
            <div className="mb-4 h-48 overflow-hidden rounded-lg bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Tech Blog"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Getting Started with Web Development</h3>
            <p className="mb-4 text-gray-600">A comprehensive guide for beginners looking to start their journey in web development.</p>
            <div className="flex items-center text-sm text-gray-500">
              <span>April 17, 2025</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
          </article>

          {/* Featured Post 2 */}
          <article className="group rounded-lg bg-white p-6 shadow-lg transition-transform hover:-translate-y-1">
            <div className="mb-4 h-48 overflow-hidden rounded-lg bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Design Blog"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Design Principles Every Developer Should Know</h3>
            <p className="mb-4 text-gray-600">Learn the fundamental design principles that can make your applications stand out.</p>
            <div className="flex items-center text-sm text-gray-500">
              <span>April 16, 2025</span>
              <span className="mx-2">•</span>
              <span>4 min read</span>
            </div>
          </article>

          {/* Featured Post 3 */}
          <article className="group rounded-lg bg-white p-6 shadow-lg transition-transform hover:-translate-y-1">
            <div className="mb-4 h-48 overflow-hidden rounded-lg bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Programming Blog"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">The Future of AI in Development</h3>
            <p className="mb-4 text-gray-600">Exploring how artificial intelligence is transforming the way we build software.</p>
            <div className="flex items-center text-sm text-gray-500">
              <span>April 15, 2025</span>
              <span className="mx-2">•</span>
              <span>6 min read</span>
            </div>
          </article>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Stay Updated</h2>
          <p className="mb-8">Get the latest articles and insights delivered straight to your inbox.</p>
          <div className="flex justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-sm rounded-lg px-4 py-2 text-gray-900"
            />
            <button className="rounded-lg bg-white px-6 py-2 font-medium text-blue-600 transition-colors hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
