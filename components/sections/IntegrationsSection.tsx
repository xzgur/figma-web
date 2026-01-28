'use client';

import React from 'react';
import { motion } from 'motion/react';

const integrations = [
  { 
    name: 'Slack', 
    color: '#4A154B',
    logo: (
      <svg viewBox="0 0 122.8 122.8" className="w-12 h-12">
        <path d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9V90.5H32.7c-7.1 0-12.9-5.8-12.9-12.9z" fill="#E01E5A"/>
        <path d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H32.3V45.2c0-7.1 5.8-12.9 12.9-12.9z" fill="#36C5F0"/>
        <path d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V32.3H77.6c7.1 0 12.9 5.8 12.9 12.9z" fill="#2EB67D"/>
        <path d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h12.9V77.6c0 7.1-5.8 12.9-12.9 12.9z" fill="#ECB22E"/>
      </svg>
    )
  },
  { 
    name: 'Jira', 
    color: '#0052CC',
    logo: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#0052CC">
        <path d="M11.571 11.513H0a5.218 5.218 0 0 0 10.435 0h1.136zM5.718 5.718a5.218 5.218 0 0 0 0 10.435h1.137V11.513a5.218 5.218 0 0 0 0-5.795H5.718zm5.853 0a5.218 5.218 0 0 0 0 10.435h1.137V11.513a5.218 5.218 0 0 0 0-5.795h-1.137zM24 11.571a5.218 5.218 0 0 1-10.435 0h-1.136a5.218 5.218 0 1 1 10.435-5.218v5.218h1.136zM12.435 5.718a5.218 5.218 0 0 1 5.218-5.218 5.218 5.218 0 0 1 5.218 5.218 5.218 5.218 0 0 1-5.218 5.218h-5.218V5.718z"/>
      </svg>
    )
  },
  { 
    name: 'Microsoft Teams', 
    color: '#6264A7',
    logo: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path d="M19.5 4.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-1.5 5.5c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-8z" fill="#6264A7"/>
        <path d="M12 12h6v6h-6v-6z" fill="#464EB8"/>
      </svg>
    )
  },
  { 
    name: 'Azure DevOps', 
    color: '#0078D4',
    logo: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path d="M0 0h8v8H0V0zm8 8h8v8H8V8zm8-8h8v8h-8V0z" fill="#0078D4"/>
        <path d="M0 16h8v8H0v-8zm8 0h8v8H8v-8zm8 0h8v8h-8v-8z" fill="#0078D4"/>
      </svg>
    )
  },
  { 
    name: 'Zoom', 
    color: '#2D8CFF',
    logo: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#2D8CFF">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.5 7.5l-4.5 4.5v-3h-4v-4h4v-3l4.5 4.5z"/>
      </svg>
    )
  },
  { 
    name: 'Google Meet', 
    color: '#00832D',
    logo: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path d="M5.53 2.13L0 7.66l5.53 5.53L11.12 7.66 5.53 2.13zm6.88 0L6.88 7.66l5.53 5.53L18 7.66 12.41 2.13zm6.88 0L13.76 7.66l5.53 5.53L24 7.66 18.41 2.13z" fill="#00832D"/>
        <path d="M5.53 21.87L0 16.34l5.53-5.53L11.12 16.34 5.53 21.87zm6.88 0L6.88 16.34l5.53-5.53L18 16.34 12.41 21.87zm6.88 0L13.76 16.34l5.53-5.53L24 16.34 18.41 21.87z" fill="#EA4335"/>
        <path d="M5.53 12L0 6.47l5.53-5.53L11.12 6.47 5.53 12zm6.88 0L6.88 6.47l5.53-5.53L18 6.47 12.41 12zm6.88 0L13.76 6.47l5.53-5.53L24 6.47 18.41 12z" fill="#FBBC04"/>
        <path d="M5.53 12L0 17.53l5.53 5.53L11.12 17.53 5.53 12zm6.88 0L6.88 17.53l5.53 5.53L18 17.53 12.41 12zm6.88 0L13.76 17.53l5.53 5.53L24 17.53 18.41 12z" fill="#4285F4"/>
      </svg>
    )
  },
];

export default function IntegrationsSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-white dark:bg-[#13141b] flex flex-col items-center overflow-hidden transition-colors duration-200">
      
      {/* Background Grid - Animated */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none flex justify-center">
        {/* Static Base Grid */}
        <div 
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(to right, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "45px 45px",
            backgroundPosition: "center top",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)"
          }}
        />

        {/* DYNAMIC VERTICAL BEAMS (Up & Down) */}
        {[-10, -5, 0, 5, 10].map((i) => {
          const isCenter = i === 0;
          const xPos = `calc(50% + ${i * 45}px)`;
          
          return (
            <div key={`v-${i}`} className="contents">
              {/* Downward Beam */}
              <motion.div 
                className={`absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent ${isCenter ? "via-orange-300 dark:via-orange-400 opacity-40 dark:opacity-30" : "via-slate-300 dark:via-slate-600 opacity-30 dark:opacity-20"} to-transparent`}
                style={{ left: xPos }}
                initial={{ y: "-100%" }}
                animate={{ y: "100%" }}
                transition={{ duration: 7 + Math.abs(i), repeat: Infinity, ease: "linear", delay: Math.abs(i) * 0.2 }}
              />
              {/* Upward Beam */}
              <motion.div 
                className={`absolute top-0 w-[1px] h-full bg-gradient-to-t from-transparent ${isCenter ? "via-orange-200 dark:via-orange-500 opacity-30 dark:opacity-20" : "via-slate-200 dark:via-slate-700 opacity-20 dark:opacity-10"} to-transparent`}
                style={{ left: xPos }}
                initial={{ y: "100%" }}
                animate={{ y: "-100%" }}
                transition={{ duration: 9 + Math.abs(i), repeat: Infinity, ease: "linear", delay: Math.abs(i) * 0.5 + 2 }}
              />
            </div>
          );
        })}

        {/* DYNAMIC HORIZONTAL BEAMS (Left-Right & Right-Left) */}
        {[60, 120, 180, 240, 300, 360, 420, 480].map((y, i) => {
          const isEven = i % 2 === 0;
          return (
            <div key={`h-${i}`} className="contents">
              {/* Left to Right */}
              <motion.div 
                className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent opacity-30 dark:opacity-20"
                style={{ top: `${y}px` }}
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 8 + i, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
              />
              {/* Right to Left */}
              {isEven && (
                <motion.div 
                  className="absolute left-0 right-0 h-[1px] bg-gradient-to-l from-transparent via-slate-200 dark:via-slate-700 to-transparent opacity-20 dark:opacity-10"
                  style={{ top: `${y}px` }}
                  initial={{ x: "100%" }}
                  animate={{ x: "-100%" }}
                  transition={{ duration: 10 + i, repeat: Infinity, ease: "linear", delay: i * 0.5 + 1 }}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="container px-4 mx-auto max-w-[1200px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1c1c] dark:text-white mb-12">
            Integrations
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-zinc-900 rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300 min-h-[120px] border border-zinc-200 dark:border-zinc-800"
              >
                <div className="mb-3 flex items-center justify-center">
                  {integration.logo}
                </div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white text-center">
                  {integration.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

