import React, { useState } from 'react';
import useFetchData from '../../hooks/useFetchData'; 

interface Faq {
  id: string;
  question: string;
  answer: string;
}

const FaqsComponent: React.FC = () => {
  const { data: faqs, loading, error } = useFetchData<Faq[]>('/faqs');
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq((prevOpenFaq) => (prevOpenFaq === id ? null : id));
  };

  if (loading) return <div>Loading FAQs...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h6 className="text-lg text-indigo-600 font-medium text-center mb-2">FAQs</h6>
          <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
            Frequently asked questions
          </h2>
        </div>

        <div className="accordion-group bg-white" data-accordion="default-accordion">
          {faqs?.map((faq) => (
            <div
              key={faq.id}
              className={`bg-white accordion py-8 px-6 border-b border-solid border-white transition-all duration-500 rounded-2xl  ${openFaq === faq.id ? 'accordion-active:bg-indigo-50 active' : ''}`}
              id={`basic-heading-${faq.id}`}
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                aria-controls={`basic-collapse-${faq.id}`}
                onClick={() => toggleFaq(faq.id)}
              >
                <h5>{faq.question}</h5>
                <svg
                  className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${
                    openFaq === faq.id ? 'rotate-180' : ''
                  }`}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqsComponent;
