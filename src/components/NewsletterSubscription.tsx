
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { subscribeToNewsletter } from "@/services/subscriptionService";

interface NewsletterSubscriptionProps {
  className?: string;
}

const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({ className }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      return;
    }

    setIsSubmitting(true);
    try {
      const success = await subscribeToNewsletter(email);
      if (success) {
        setEmail("");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row justify-center gap-4 ${className}`}>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full max-w-sm rounded-full px-6 py-3 text-gray-900 shadow-xl focus:outline-none focus:ring-2 focus:ring-green-300"
        required
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="px-8 py-3 bg-white text-green-600 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-xl hover:scale-105 transform transition-transform duration-200"
      >
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  );
};

export default NewsletterSubscription;
