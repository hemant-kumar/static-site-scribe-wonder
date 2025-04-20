
import Meta from '../components/Meta';
import { metaConfig } from '../config/metaConfig';

const PrivacyPolicy = () => {
  return (
    <>
      <Meta 
        title="Privacy Policy - Tech Chatter Box"
        description="Our privacy policy outlines how we collect, use, and protect your personal information."
        keywords={[...metaConfig.default.keywords, 'privacy policy', 'data protection', 'user privacy']}
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <p className="text-gray-600 mb-6">Last updated: April 20, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Contact information when you subscribe to our newsletter</li>
                <li>Comments and feedback you provide on our blog posts</li>
                <li>Information you submit through our contact form</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Provide and improve our services</li>
                <li>Send you updates and newsletters</li>
                <li>Respond to your inquiries</li>
                <li>Monitor and analyze website usage</li>
              </ul>
            </section>

            {/* Add more sections as needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
