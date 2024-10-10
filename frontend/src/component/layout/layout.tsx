import React, { ReactNode } from 'react';
import Header from './header'
import Footer from './footer'

interface LayoutProps {
  children: ReactNode; 
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className='flex flex-col h-screen w-full'>
      <Header />
      <div className='flex-grow'>
      {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
