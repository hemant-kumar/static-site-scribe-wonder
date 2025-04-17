
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Developer's Journal</h1>
        <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <p className="text-gray-600 mb-6 leading-relaxed">
            Welcome to Developer's Journal, a community-driven blog dedicated to sharing knowledge, experiences, and insights about software development, design, and technology.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our mission is to create a space where developers can learn from each other, stay updated with the latest trends, and grow their skills through high-quality content.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Quality over quantity</li>
            <li>Community-driven learning</li>
            <li>Practical, actionable content</li>
            <li>Inclusive and accessible education</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
