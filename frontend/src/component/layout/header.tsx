import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type MenuProps = {
  key: number; 
  label: string;
  link: string;
};

const menu: MenuProps[] = [
  {
    key: 1,
    label: 'Home',
    link: '/',
  },
  {
    key: 2,
    label: 'Products',
    link: '/products',
  },
  {
    key: 3,
    label: 'Blogs',
    link: '/blogs',
  },
  {
    key: 4,
    label: 'FAQs',
    link: '/faqs',
  },
];

const Header = () => {
  const location = useLocation(); 

  return (
    <header className='w-full h-16 bg-primaryBG p-4 '>
      
      <nav className='col-span-11 md:col-span-6'>
        <ul className='flex gap-6 justify-end md:justify-center'>
          {menu.map((item) => (
            <li key={item.key} className='relative block'>
              <Link
                to={item.link}
                className={`text-white md:px-4 font-slab font-light tracking-wider leading-3 transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:top-9 after:w-full after:h-[6px] after:bg-white transition-all duration-300 ${
                  location.pathname === item.link ? 'after:block' : 'after:hidden'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
