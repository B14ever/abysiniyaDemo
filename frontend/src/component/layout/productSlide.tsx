import React from 'react';
import useFetchData from '../../hooks/useFetchData'; 

interface Product {
  id: number;
  title: string;
  pricing: number;
  description: string;
  image: string;
  features: string[];
}

const ProductSlide: React.FC = () => {
  const { data: products, loading, error } = useFetchData<Product[]>('/products'); 

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;


  const midIndex = Math.ceil(products.length / 2);
  const topRowProducts = products.slice(0, midIndex);
  const bottomRowProducts = products.slice(midIndex);

  return (
    <div className="relative overflow-hidden bg-gray-50">
      
      <div className="animate-marquee-container">
        
        <div className="animate-marquee">
          <div className="flex">
            {topRowProducts.map((product) => (
              <div key={product.id} className="relative m-4 flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md" style={{ minWidth: '250px' }}>
                <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                  <img
                    className="object-cover w-full h-full" 
                    src={product.image}
                    alt={product.title}
                  />
                </a>
                <div className="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
                    <p className='text-sm text-gray-400 break-words overflow-hidden' style={{ maxHeight: '3.6em' }}>{product.description}</p> {/* Wrap and limit height */}
                    <div className='flex flex-wrap gap-4'>
                      {product.features?.map((feature, index) => (
                        <p className='text-sm text-[#D0D1FD]' key={index}>{feature}</p>
                      ))}
                    </div>
                  </a>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold text-slate-900">${product.pricing}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="animate-marquee">
          <div className="flex">
            {bottomRowProducts.map((product) => (
              <div key={product.id} className="relative m-4 flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md" style={{ minWidth: '250px' }}>
                <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                  <img
                    className="object-cover w-full h-full" 
                    src={product.image}
                    alt={product.title}
                  />
                </a>
                <div className="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
                    <p className='text-sm text-gray-400 break-words overflow-hidden' style={{ maxHeight: '3.6em' }}>{product.description}</p> 
                    <div className='flex flex-wrap gap-4'>
                      {product.features?.map((feature, index) => (
                        <p className='text-sm text-[#D0D1FD]' key={index}>{feature}</p>
                      ))}
                    </div>
                  </a>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold text-slate-900">${product.pricing}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlide;
