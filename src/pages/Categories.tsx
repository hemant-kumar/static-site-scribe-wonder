import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { getAllBlogPosts } from '../utils/blogUtils';

const Categories = () => {
  // Get all blog posts and extract unique categories with post counts
  const posts = getAllBlogPosts();
  const categoryData = posts.reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = { count: 0, color: getRandomColor() };
    }
    acc[post.category].count++;
    return acc;
  }, {} as Record<string, { count: number, color: string }>);

  const categories = Object.entries(categoryData).map(([name, data]) => ({
    name,
    count: data.count,
    color: data.color
  }));

  useEffect(() => {
    toast({
      title: "Categories Loaded",
      description: "Browse through our article categories",
      variant: "default",
    });
  }, []);

  // Helper function to get color classes
  function getRandomColor() {
    const colors = ["purple", "blue", "green", "rose", "indigo", "emerald"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const getCategoryColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string, text: string }> = {
      purple: { bg: "bg-purple-100", text: "text-purple-700" },
      blue: { bg: "bg-blue-100", text: "text-blue-700" },
      green: { bg: "bg-green-100", text: "text-green-700" },
      rose: { bg: "bg-rose-100", text: "text-rose-700" },
      indigo: { bg: "bg-indigo-100", text: "text-indigo-700" },
      emerald: { bg: "bg-emerald-100", text: "text-emerald-700" },
    };
    return colorMap[color] || { bg: "bg-gray-100", text: "text-gray-700" };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Categories</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories && categories.length > 0 ? (
            categories.map((category) => {
              const colorClasses = getCategoryColorClasses(category.color);
              return (
                <Link
                  key={category.name}
                  to={`/blog?category=${category.name.toLowerCase()}`}
                  className="group block p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {category.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colorClasses.bg} ${colorClasses.text}`}>
                      {category.count} posts
                    </span>
                  </div>
                </Link>
              );
            })
          ) : (
            <p className="text-gray-500 col-span-3 text-center py-10">No categories found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
