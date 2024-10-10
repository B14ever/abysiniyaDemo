import React, { useState, useEffect } from 'react';
import useFetchData from '../../hooks/useFetchData'; // Ensure the correct path for your hook

interface Blog {
  _id: string;
  title: string;
  description: string;
  date: Date;
  category: string;
}

const Blogs: React.FC = () => {
  const { data: blogs, loading, error } = useFetchData<Blog[]>('/blog');
  const [searchId, setSearchId] = useState<string | undefined>(undefined); 
  const [searchedBlog, setSearchedBlog] = useState<Blog | null>(null); 

  useEffect(() => {
    
    if (searchId) {
      const foundBlog = blogs?.find(blog => blog._id === searchId) || null;
      setSearchedBlog(foundBlog);
    } else {
      setSearchedBlog(null);
    }
  }, [searchId, blogs]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value ? event.target.value : undefined;
    setSearchId(value);
  };

  if (loading) return <div>Loading blogs...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">Latest Blog</h2>
        
        {/* Search Input */}
        <form className="max-w-md mx-auto mb-6 self-end">
          <label htmlFor="blog-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="blog-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search by Blog ID..."
              onChange={handleSearch}
              required
            />
          </div>
        </form>

        <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
         
          {(searchId === undefined ? blogs : [searchedBlog]).map((blog) =>
            blog ? (
              <div key={blog._id} className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
                <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                  <span className="text-indigo-600 font-medium mb-3 block">{new Date(blog.date).toLocaleDateString()}</span>
                  <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">{blog.title}</h4>
                  <p className="text-gray-500 leading-6 mb-10">{blog.description}</p>
                </div>
              </div>
            ) : null
          )}
          {searchId !== undefined && !searchedBlog && (
            <div className="text-center mt-6">No blog found.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
