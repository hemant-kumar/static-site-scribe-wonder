
const Authors = () => {
  const authors = [
    { name: "John Doe", role: "Lead Developer", posts: 15, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" },
    { name: "Jane Smith", role: "UI/UX Designer", posts: 12, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80" },
    { name: "Mike Johnson", role: "AI Researcher", posts: 8, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Our Authors</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {authors.map((author) => (
            <div key={author.name} className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{author.name}</h3>
                <p className="text-gray-600 mb-4">{author.role}</p>
                <span className="px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  {author.posts} posts
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Authors;
