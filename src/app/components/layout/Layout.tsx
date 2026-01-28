import React, { ReactNode } from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { ThemeProvider } from '../ThemeProvider';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#13141b] font-sans text-gray-900 dark:text-slate-200 transition-colors duration-200 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
