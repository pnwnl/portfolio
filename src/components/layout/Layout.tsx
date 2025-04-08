import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Layout component props
interface LayoutProps {
  children: React.ReactNode;
}

// Layout component that wraps all pages
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-retro-black">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout; 