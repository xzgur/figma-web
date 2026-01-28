import React from "react";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-900 transition-colors duration-200">
      <div className="container max-w-[1200px] mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 pt-16 pb-12">
          
          {/* Resources Column */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              {["Docs", "Support Policy", "Learn", "Showcase", "Blog", "Analytics", "Next.js Conf", "Previews", "Evals"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Column */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">More</h4>
            <ul className="space-y-3">
              {["Next.js Commerce", "Contact Sales", "GitHub", "Releases", "Telemetry", "Governance"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Vercel Column */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">About oNabu</h4>
            <ul className="space-y-3">
              {["Next.js + oNabu", "Open Source Software", "GitHub", "X"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Column */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">Subscribe to our newsletter</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Stay updated on new releases and features, guides, and case studies.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="you@domain.com"
                className="flex-1 px-3 py-2 text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 transition-colors"
              />
              <button className="px-3 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 dark:border-gray-900 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Left: Logo + Copyright */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 text-gray-900 dark:text-white">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">oNabu</span>
            </div>
            <span className="text-xs text-gray-400 dark:text-gray-600">© 2025 oNabu Inc.</span>
          </div>

          {/* Center: Theme Toggle */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500 dark:text-gray-400">Theme:</span>
            <ThemeToggle />
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center group">
              <Github className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center group">
              <Twitter className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center group">
              <Linkedin className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}