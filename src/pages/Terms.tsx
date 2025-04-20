
import Meta from '../components/Meta';
import { metaConfig } from '../config/metaConfig';

const Terms = () => {
  return (
    <>
      <Meta 
        title="Terms of Service - Tech Chatter Box"
        description="Our terms of service outline the rules and guidelines for using our website."
        keywords={[...metaConfig.default.keywords, 'terms of service', 'terms and conditions', 'user agreement']}
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <p className="text-gray-600 mb-6">Last updated: April 20, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing our website, you agree to be bound by these Terms of Service and agree that you are responsible for compliance with any applicable local laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content published on this website is the property of Tech Chatter Box and protected by international copyright laws.
              </p>
            </section>

            {/* Add more sections as needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
