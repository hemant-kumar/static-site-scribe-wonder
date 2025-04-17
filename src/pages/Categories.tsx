
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    { name: "Development", count: 12, color: "purple" },
    { name: "Design", count: 8, color: "blue" },
    { name: "AI & ML", count: 6, color: "green" },
    { name: "Career", count: 5, color: "rose" },
    { name: "Architecture", count: 4, color: "indigo" },
    { name: "Productivity", count: 7, color: "emerald" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Categories</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/blog?category=${category.name.toLowerCase()}`}
              className="group block p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {category.name}
                </h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium bg-${category.color}-100 text-${category.color}-700`}>
                  {category.count} posts
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
