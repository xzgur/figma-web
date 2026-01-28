'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

export default function RequestDemoSection() {
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
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1c1c1c] dark:text-white mb-8 px-4">
            Talk to Sales to Request a Demo
          </h2>
          <Button 
            className="bg-gradient-to-r from-[#FF9B45] to-[#FF7E45] hover:opacity-90 text-white rounded-xl px-6 sm:px-8 h-12 text-[14px] sm:text-[15px] font-semibold transition-all duration-200 shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5 border-none"
          >
            Request a Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

