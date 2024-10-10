
import React from 'react';
import useFetchData from '../../hooks/useFetchData'; 

interface Blog {
  _id: string;
  title: string;
  description: string;
  date: Date;
  category: string;
}

const BlogsCard: React.FC = () => {
  const { data: blogs, loading, error } = useFetchData<Blog[]>('/blog'); 

  if (loading) return <div>Loading blogs...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">Latest Blog</h2>
        <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {blogs?.map((blog,) => (
            <div key={blog._id} className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                <span className="text-indigo-600 font-medium mb-3 block">{new Date(blog.date).toLocaleDateString()}</span>
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">{blog.title}</h4>
                <p className="text-gray-500 leading-6 mb-10">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsCard;
