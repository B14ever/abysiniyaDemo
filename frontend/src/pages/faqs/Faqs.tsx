import React, { useState, useEffect } from 'react';
import useFetchData from '../../hooks/useFetchData'; 

interface Faq {
  id: string;
  question: string;
  answer: string;
}

const Faqs: React.FC = () => {
  const { data: faqs, loading, error } = useFetchData<Faq[]>('/faqs');
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [searchId, setSearchId] = useState<string | undefined>(undefined); 
  const [searchedFaq, setSearchedFaq] = useState<Faq | null>(null); 

  const toggleFaq = (id: string) => {
    setOpenFaq((prevOpenFaq) => (prevOpenFaq === id ? null : id));
  };

  useEffect(() => {
   
    if (searchId) {
      const foundFaq = faqs?.find(faq => faq.id === searchId) || null;
      setSearchedFaq(foundFaq);
    } else {
      setSearchedFaq(null);
    }
  }, [searchId, faqs]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value ? event.target.value : undefined;
    setSearchId(value);
  };

  if (loading) return <div>Loading FAQs...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="py-24 bg-gray-50 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       

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
              placeholder="Search by FAQ ID..."
              onChange={handleSearch}
              required
            />
          </div>
        </form>

        <div className="accordion-group bg-white" data-accordion="default-accordion">
         
          {(searchId === undefined ? faqs : [searchedFaq]).map((faq) =>
            faq ? (
              <div
                key={faq.id}
                className={`bg-white accordion py-8 px-6 border-b border-solid border-white transition-all duration-500 rounded-2xl ${openFaq === faq.id ? 'accordion-active:bg-indigo-50 active' : ''}`}
                id={`basic-heading-${faq.id}`}
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                  aria-controls={`basic-collapse-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <h5>{faq.question}</h5>
                  <svg
                    className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${openFaq === faq.id ? 'rotate-180' : ''}`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  id={`basic-collapse-${faq.id}`}
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby={`basic-heading-${faq.id}`}
                  style={{
                    maxHeight: openFaq === faq.id ? '250px' : '0',
                    transition: 'max-height 0.3s ease',
                  }}
                >
                  <p className="text-base text-gray-900 leading-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ) : null
          )}
          {searchId !== undefined && !searchedFaq && (
            <div className="text-center mt-6">No FAQ found.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
