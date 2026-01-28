'use client';

import React, { useState, useEffect, useRef } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";

// Helper component for menu items with descriptions
const MenuItem = ({ title, description, href = "#" }: { title: string; description: string; href?: string }) => (
  <a href={href} className="block group p-2 -mx-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
      {title}
    </div>
    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
      {description}
    </div>
  </a>
);

// Navigation Content Configuration
const navConfig: Record<string, { width: number; content: React.ReactNode }> = {
  "Use Cases": {
    width: 800,
    content: (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-slate-100 dark:border-gray-800 overflow-hidden p-6"
      >
        <div className="grid grid-cols-3 gap-x-8 gap-y-6">
          <div className="space-y-4">
             <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Team Roles</h4>
             <MenuItem title="Product Owners" description="Drive value delivery & roadmap" />
             <MenuItem title="Project Managers" description="Streamline execution & tracking" />
             <MenuItem title="Scrum Masters" description="Enable team agility & focus" />
             <MenuItem title="Developers" description="Focus on code & quality" />
          </div>
          
          <div className="space-y-4">
             <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Leadership</h4>
             <MenuItem title="Transformation Leaders" description="Guide organizational change" />
             <MenuItem title="Agile Coaches" description="Mentor teams to success" />
             <MenuItem title="Portfolio Leaders" description="Manage strategic investments" />
             <MenuItem title="Engineering Managers" description="Scale engineering culture" />
          </div>

          <div className="space-y-4">
             <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Executives</h4>
             <MenuItem title="CTOs" description="Strategic technical oversight" />
             <MenuItem title="CEOs" description="Business alignment & growth" />
          </div>
        </div>
      </motion.div>
    )
  },
  Resources: {
    width: 320,
    content: (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-slate-100 dark:border-gray-800"
      >
        <div className="space-y-4">
           <MenuItem title="Blog" description="Latest news and insights" />
           <MenuItem title="FAQ" description="Common questions answered" />
           <MenuItem title="Maturity Assessment" description="Check your agility score" />
           <MenuItem title="Security" description="Enterprise grade protection" />
        </div>
      </motion.div>
    )
  },
  "About Us": {
      width: 320,
      content: (
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-slate-100 dark:border-gray-800"
        >
          <div className="space-y-4">
             <MenuItem title="Who We Are" description="Our mission and values" />
             <MenuItem title="Become a Partner" description="Grow with our ecosystem" />
             <MenuItem title="Contact Us" description="Get in touch with our team" />
          </div>
        </motion.div>
      )
  }
};

const navLinks = [
    { name: "Use Cases", hasDropdown: true },
    { name: "How It Works", hasDropdown: false },
    { name: "Resources", hasDropdown: true },
    { name: "About Us", hasDropdown: true },
    { name: "Pricing", hasDropdown: false },
    { name: "Request a Demo", hasDropdown: false },
];

export function Navbar() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const leaveTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
    
    if (!navConfig[name]) {
         setActiveTab(null);
         setIsDropdownOpen(false);
         return;
    }

    setActiveTab(name);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    leaveTimeout.current = setTimeout(() => {
        setActiveTab(null);
        setIsDropdownOpen(false);
    }, 150);
  };
  
  const handleDropdownMouseEnter = () => {
    if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${ 
          scrolled 
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-slate-200 dark:border-gray-800 py-3" 
            : "bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-transparent py-4"
        }`}
      >
        <div className="container max-w-[1440px] mx-auto px-6 flex items-center justify-between relative">
          
            {/* Left Side: Logo */}
            <div className="flex items-center">
                <a href="/" className="flex items-center gap-2 group relative z-50">
                    <div className="w-24 text-[#1c1c1c] dark:text-white transition-colors">
                         {/* Attio Logo SVG */}
                        <svg viewBox="0 0 100 30" fill="currentColor" className="w-full h-full">
                            <path d="M12.6 19.8C10.9 21.5 8.2 21.5 6.5 19.8C4.8 18.1 4.8 15.4 6.5 13.7L16.3 3.9L19.8 7.4L10 17.2C10.7 17.9 11.9 17.9 12.6 17.2C13.3 16.5 13.3 15.3 12.6 14.6L19.1 8.1L22.6 11.6L16.1 18.1C15.1 19.1 13.9 19.8 12.6 19.8ZM22.6 17.4L19.1 20.9C17.4 22.6 14.7 22.6 13 20.9L3 10.9C1.3 9.2 1.3 6.5 3 4.8C4.7 3.1 7.4 3.1 9.1 4.8L19.1 14.8C19.8 15.5 19.8 16.7 19.1 17.4H22.6ZM35 21H31V9H28V5.5H31V3C31 1.3 32.3 0 34 0H38V3.5H35V5.5H38V9H35V21ZM46 21H42V9H39V5.5H42V3C42 1.3 43.3 0 45 0H49V3.5H46V5.5H49V9H46V21ZM53 5.5H57V9H53V5.5ZM53 21V10.5H57V21H53ZM62 15.5C62 12.5 64.5 10 67.5 10C70.5 10 73 12.5 73 15.5C73 18.5 70.5 21 67.5 21C64.5 21 62 18.5 62 15.5ZM67.5 6.5C62.5 6.5 58.5 10.5 58.5 15.5C58.5 20.5 62.5 24.5 67.5 24.5C72.5 24.5 76.5 20.5 76.5 15.5C76.5 10.5 72.5 6.5 67.5 6.5Z" />
                        </svg>
                    </div>
                </a>
            </div>

            {/* Center: Nav Links (Centered Position) */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1" ref={navRef}>
                {navLinks.map((link) => (
                    <div key={link.name} className="relative group/link">
                         <a
                            href="#"
                            className={`flex items-center gap-1 px-3 py-2 text-[14px] font-medium transition-colors duration-200 rounded-full hover:bg-slate-100 dark:hover:bg-gray-800 whitespace-nowrap ${
                                activeTab === link.name ? "text-[#1c1c1c] dark:text-white bg-slate-100 dark:bg-gray-800" : "text-[#555] dark:text-gray-400 hover:text-[#1c1c1c] dark:hover:text-white"
                            }`}
                            onMouseEnter={() => link.hasDropdown ? handleMouseEnter(link.name) : handleMouseEnter("")}
                        >
                            {link.name}
                            {link.hasDropdown && (
                                <ChevronDown 
                                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                        activeTab === link.name ? "rotate-180" : "opacity-50"
                                    }`} 
                                />
                            )}
                        </a>
                        
                        {/* Dropdown Menu - Positioned under each menu item */}
                        {link.hasDropdown && (
                            <AnimatePresence>
                                {isDropdownOpen && activeTab === link.name && navConfig[activeTab] && (
                                    <motion.div
                                        ref={dropdownRef}
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 5 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-1 origin-top z-50 pt-2"
                                        style={{ width: navConfig[activeTab].width }}
                                                    onMouseEnter={handleDropdownMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {/* Content */}
                                        <div className="relative z-20">
                                            {/* We use key=activeTab to trigger a gentle crossfade/switch effect on content change */}
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={activeTab}
                                                    initial={{ opacity: 0, scale: 0.98 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.98 }}
                                                    transition={{ duration: 0.15 }}
                                                >
                                                    {navConfig[activeTab].content}
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        )}
                    </div>
                ))}
            </div>

          {/* Right Side: Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-[14px] font-medium text-[#1c1c1c] dark:text-white hover:bg-slate-100 dark:hover:bg-gray-800 px-4 h-10 rounded-xl">
              Sign in
            </Button>
            <Button className="bg-gradient-to-r from-[#FF9B45] to-[#FF7E45] hover:opacity-90 text-white rounded-xl px-5 h-10 text-[14px] font-medium transition-all shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5 border-none">
              Start for free
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden ml-auto flex items-center gap-2">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#1c1c1c] dark:text-white p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t border-slate-200 dark:border-gray-800 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href="#"
                    className="block py-2 text-[14px] font-medium text-[#1c1c1c] dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-slate-200 dark:border-gray-800 space-y-3">
                  <Button 
                    variant="ghost" 
                    className="w-full text-[14px] font-medium text-[#1c1c1c] dark:text-white hover:bg-slate-100 dark:hover:bg-gray-800 h-10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign in
                  </Button>
                  <Button 
                    className="w-full bg-gradient-to-r from-[#FF9B45] to-[#FF7E45] hover:opacity-90 text-white h-10 text-[14px] font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Start for free
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}