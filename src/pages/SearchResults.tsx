
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { searchBlogPosts } from '@/services/searchService';
import { BlogPost } from '@/utils/blogUtils';
import SearchBar from '@/components/SearchBar';

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const performSearch = async () => {
      if (query) {
        setIsLoading(true);
        try {
          const searchResults = await searchBlogPosts(query);
          setResults(searchResults);
        } finally {
          setIsLoading(false);
        }
      }
    };
    
    performSearch();
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16">
      <Helmet>
        <title>Search Results for "{query}" - Tech Chatter Box</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold mb-6">Search Results</h1>
          <div className="flex justify-center">
            <SearchBar />
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center my-20">
            <p className="text-gray-500">Searching...</p>
          </div>
        ) : results.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {results.map((post) => (
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
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center my-20">
            <p className="text-gray-500 mb-4">No results found for "{query}"</p>
            <p className="text-gray-600">Try different keywords or check out our blog posts.</p>
            <Link 
              to="/blog" 
              className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:opacity-90 transition-all"
            >
              View All Posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
