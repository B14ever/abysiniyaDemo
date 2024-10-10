import React, { useState, useEffect } from 'react';
import useFetchData from '../../hooks/useFetchData';

interface Product {
  id: number;
  title: string;
  pricing: number;
  description: string;
  image: string;
  features: string[];
}

const Product: React.FC = () => {
  const [searchId, setSearchId] = useState<number | undefined>(undefined); 
  const { data: allProducts, loading, error } = useFetchData<Product[]>('/products'); 
  const [searchedProduct, setSearchedProduct] = useState<Product | null>(null);

  useEffect(() => {
   
    if (searchId !== undefined) {
      const foundProduct = allProducts?.find(product => product.id === searchId) || null;
      setSearchedProduct(foundProduct);
    } else {
      setSearchedProduct(null); 
    }
  }, [searchId, allProducts]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value ? parseInt(event.target.value, 10) : undefined;
    setSearchId(value);
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col bg-gray-50 py-12">
      <form className="max-w-md mx-auto mb-6 self-end">
        <label htmlFor="faq-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
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
            id="faq-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search by Product ID..."
            onChange={handleSearch} 
            required
          />
        </div>
      </form>

      {/* Product Display */}
      <div className="flex flex-wrap">
        {(searchId === undefined ? allProducts : [searchedProduct]).map((product) => 
          product ? (
            <div
              key={product.id}
              className="relative flex flex-col w-full max-w-xs m-6 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
            >
              
              <a className="relative overflow-hidden rounded-t-lg" href="#">
                <img
                  className="object-cover w-full h-48"
                  src={product.image}
                  alt={product.title}
                />
              </a>

              <div className="flex flex-col p-5">
                <div>
                  <a href="#">
                    <h5 className="text-2xl font-semibold tracking-tight text-slate-900">{product.title}</h5>
                    <p className="text-sm text-gray-400 mt-2">{product.description}</p>
                  </a>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {product.features?.map((feature, index) => (
                      <span
                        className="bg-gray-200 text-sm text-[#D0D1FD] px-2 py-1 rounded"
                        key={index}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-3xl font-bold text-slate-900">${product.pricing}</p>
                </div>
              </div>
            </div>
          ) : null
        )}
        {searchId !== undefined && !searchedProduct && (
          <div className="text-center mt-6">No product found.</div>
        )}
      </div>
    </div>
  );
};

export default Product;
