'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { HeroSection } from "@/types/cms";
import { useTheme } from "./ThemeProvider";

// Light mode images - using public paths for Next.js
const imgIntegrations = "/Integrations.png";
const imgTeam = "/Team2.png";
const imgJira = "/yonetici-paneli.png";

// Dark mode images (you can replace these with actual dark mode images)
// For now, using the same images, but you can import different ones when ready
const imgIntegrationsDark = imgIntegrations; // Replace with actual dark mode image
const imgTeamDark = imgTeam; // Replace with actual dark mode image
const imgJiraDark = imgJira; // Replace with actual dark mode image

// Mock data
const DEFAULT_HERO_DATA: HeroSection = {
  _type: 'hero',
  title: [
    "Customer",
    "relationship magic."
  ],
  subtitle: "Attio is the AI-native CRM for GTM builders.",
  badgeText: "Agentic AI Visibility Platform",
  primaryCta: { label: "Start for free", href: "#" },
  secondaryCta: { label: "Talk to sales", href: "#" },
  dashboardImage: {
    src: "",
    alt: ""
  }
};

const TABS = ["Data", "Workflows", "Reporting", "Pipeline"];

// Simplified text logos
const TEXT_LOGOS = ["granola", "Coca-Cola", "Flatfile", "Modal", "USV", "Replicate"];

export function Hero({ data = DEFAULT_HERO_DATA }: { data?: HeroSection }) {
  const [activeTab, setActiveTab] = useState("Data");
  const { theme } = useTheme();

  return (
    <section className="relative pt-32 pb-10 lg:pt-48 lg:pb-20 bg-white dark:bg-[#13141b] flex flex-col items-center overflow-hidden transition-colors duration-200">
      
      
       {/* Background Grid - Animated & Aligned */}
       <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none flex justify-center">
          {/* Static Base Grid - Centered to match content */}
          <div 
            className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]"
            style={{
                backgroundImage: "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(to right, #e2e8f0 1px, transparent 1px)",
                backgroundSize: "45px 45px", // 45px divides 225px (tab width) exactly 5 times
                backgroundPosition: "center top",
                maskImage: "radial-gradient(ellipse 60% 60% at 50% 10%, black 40%, transparent 100%)"
            }}
          />

          {/* DYNAMIC VERTICAL BEAMS (Up & Down) - Aligned with Tabs */}
          {[-10, -5, 0, 5, 10].map((i) => {
              // -10 = -450px (Left Edge)
              // -5 = -225px (Between Data/Workflows)
              // 0 = Center
              // 5 = +225px (Between Reporting/Pipeline)
              // 10 = +450px (Right Edge)
              
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
          {[135, 180, 225, 270, 315, 360, 405, 450, 495, 540, 585].map((y, i) => {
             // Aligned to 45px grid lines
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

      <div className="container max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Animated Magic Badge */}
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative group cursor-pointer inline-flex"
        >
             {/* Rotating Border Container */}
             <div className="absolute -inset-[1px] rounded-full overflow-hidden">
                 <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] opacity-0"></div> 
                 {/* Custom rotating gradient border - Color: #FF9B45 */}
                 <div 
                    className="absolute inset-[-100%] animate-[spin_3s_linear_infinite]"
                    style={{
                        background: 'conic-gradient(from 90deg at 50% 50%, #00000000 50%, #FF9B45 100%)', 
                        maskImage: 'radial-gradient(transparent, black)'
                    }}
                 />
                 <div 
                    className="absolute inset-[-100%] animate-[spin_3s_linear_infinite]"
                    style={{
                        background: 'conic-gradient(from 270deg at 50% 50%, #00000000 50%, #FF9B45 100%)',
                        animationDelay: '-1.5s',
                        opacity: 0.5
                    }}
                 />
             </div>
             
             {/* Main Content Background */}
             <div className="absolute inset-[1px] bg-white dark:bg-gray-900 rounded-full z-0"></div>

             {/* Actual Badge Content */}
             <div className="relative z-10 px-5 py-2 flex items-center gap-2">
                 <span className="text-[17px] font-medium text-slate-800 dark:text-slate-200 tracking-tight">{data.badgeText}</span>
                 <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:translate-x-0.5 transition-transform" />
             </div>
        </motion.div>

        {/* Main Heading */}
        <div className="mb-8 max-w-5xl relative">
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-bold tracking-tight leading-[0.95] px-4"
            >
            <span className="text-[#1c1c1c] dark:text-white">
              From Chaos to AI.gility
            </span>
            </motion.h1>
        </div>
        
        {/* Subtitle & Description */}
        <div className="mb-10 max-w-4xl flex flex-col items-center gap-6">
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="text-xl md:text-[22px] leading-relaxed text-slate-500 dark:text-slate-400 font-normal text-center"
            >
                Provides <strong className="text-slate-900 dark:text-white font-bold">feedback</strong>, maps <strong className="text-slate-900 dark:text-white font-bold">dependencies</strong>, auto-updates <strong className="text-slate-900 dark:text-white font-bold">tasks</strong>, <br className="hidden md:block"/> assists <strong className="text-slate-900 dark:text-white font-bold">backlog</strong> management, <strong className="text-slate-900 dark:text-white font-bold">coaches</strong> and <strong className="text-slate-900 dark:text-white font-bold">certifies</strong> teams, hacks <strong className="text-slate-900 dark:text-white font-bold">invisibility</strong>.
            </motion.p>
        </div>
        
        {/* CTA Buttons */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        className="flex flex-col sm:flex-row items-center gap-3 mb-16 sm:mb-24 px-4"
        >
        <Button className="w-full sm:w-auto h-12 px-6 sm:px-8 rounded-[14px] bg-gradient-to-r from-[#FF9B45] to-[#FF7E45] hover:opacity-90 text-white font-semibold text-[15px] transition-all duration-200 shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5 border-none">
            {data.primaryCta.label}
        </Button>
        <button className="w-full sm:w-auto h-12 px-6 rounded-[14px] border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-slate-50 dark:hover:bg-gray-700 text-[#1c1c1c] dark:text-white font-semibold text-[15px] transition-all duration-200 flex items-center justify-center gap-2 hover:border-slate-300 dark:hover:border-gray-600 shadow-sm">
            {data.secondaryCta.label}
        </button>
        </motion.div>

        {/* Tab Menu */}
        <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.5 }}
             className="w-full max-w-[900px] flex justify-center border-b border-slate-200 dark:border-gray-800 mb-12 overflow-x-auto"
        >
            <div className="grid grid-cols-2 sm:grid-cols-4 w-full min-w-[300px] sm:min-w-0">
            {TABS.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-[13px] sm:text-[15px] font-semibold transition-all relative border-r border-slate-200 dark:border-gray-800 last:border-r-0 bg-white dark:bg-[#13141b] z-10 px-2 sm:px-0 ${
                        activeTab === tab ? "text-[#1c1c1c] dark:text-white" : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
                    }`}
                >
                    {tab}
                    {activeTab === tab && (
                        <motion.div 
                            layoutId="activeTabIndicator"
                            className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#1c1c1c] dark:bg-white"
                        />
                    )}
                </button>
            ))}
            </div>
        </motion.div>

        {/* Dashboard Area with FADE OUT effect */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-full mx-auto max-w-[1200px]"
        >
           {/* 
              Container with mask-image to fade out just the BOTTOM
              Height 650px as established
           */}
          <div 
            className="relative bg-transparent"
            style={{
                // Start fading only at 85% down the element
                maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
            }}
          >
            {/* The Actual Dashboard Card */}
            <div className="relative rounded-t-xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-2xl ring-1 ring-black/5 dark:ring-white/5 overflow-hidden">
                
                {/* Browser Header */}
                <div className="h-10 bg-white dark:bg-gray-900 border-b border-slate-100 dark:border-gray-800 flex items-center px-4 gap-2 justify-between z-10 relative">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-gray-700"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-gray-700"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-gray-700"></div>
                    </div>
                    <div className="h-5 w-40 bg-slate-50 dark:bg-gray-800 rounded-md"></div>
                    <div className="w-4"></div>
                </div>

                {/* Dashboard Content */}
                <div className="relative w-full h-[650px] bg-slate-50 dark:bg-gray-800 flex flex-col">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full overflow-hidden relative"
                        >
                            {/* 
                                IMAGE PLACEMENT LOGIC:
                                Data -> Team Dashboard (imgTeam)
                                Workflows -> Jira Analysis (imgJira)
                                Reporting -> Integrations (imgIntegrations)
                                Pipeline -> Re-use Jira for now
                            */}

                            {activeTab === "Data" && (
                                <div className="w-full h-full relative bg-[#F9FAFB] dark:bg-gray-800 flex justify-center p-0">
                                     <img src={theme === "light" ? imgTeam : imgTeamDark} alt="Team Dashboard" className="w-full h-auto object-cover object-top opacity-90 dark:opacity-70" />
                                </div>
                            )}

                            {activeTab === "Workflows" && (
                                <div className="w-full h-full relative bg-[#F9FAFB] dark:bg-gray-800 flex justify-center p-0">
                                     <img src={theme === "light" ? imgJira : imgJiraDark} alt="Workflows Dashboard" className="w-full h-auto object-cover object-top opacity-90 dark:opacity-70" />
                                </div>
                            )}

                            {activeTab === "Reporting" && (
                                <div className="w-full h-full relative bg-[#F9FAFB] dark:bg-gray-800 flex justify-center p-0">
                                    <img src={theme === "light" ? imgIntegrations : imgIntegrationsDark} alt="Integrations Dashboard" className="w-full h-auto object-cover object-top opacity-90 dark:opacity-70" />
                                </div>
                            )}

                            {activeTab === "Pipeline" && (
                                <div className="w-full h-full relative bg-[#F9FAFB] dark:bg-gray-800 flex justify-center p-0">
                                     <img src={theme === "light" ? imgJira : imgJiraDark} alt="Pipeline Dashboard" className="w-full h-auto object-cover object-top opacity-90 dark:opacity-70" />
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-[#13141b] via-white/80 dark:via-[#13141b]/80 to-transparent z-20 pointer-events-none"></div>

        </motion.div>
        
        {/* Social Proof / Trust Section - Modern Design */}
        <div className="w-full mt-20 relative z-30 pb-24 flex flex-col items-center gap-16">
             
             {/* Top Tier: Backed, Security, Partners - Modern Card Layout */}
             <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
                
                {/* Backed By - Modern Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group relative bg-gradient-to-br from-slate-50 to-white dark:from-zinc-900 dark:to-zinc-800 rounded-2xl p-6 border border-slate-200 dark:border-zinc-700 hover:border-slate-300 dark:hover:border-zinc-600 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center min-h-[140px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 rounded-2xl transition-all duration-300"></div>
                  <div className="relative w-full flex flex-col items-center justify-center">
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-5">Backed by</span>
                    <div className="flex items-center justify-center gap-5 w-full">
                      {/* Google */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-2 px-3 py-2 rounded-lg hover:bg-white dark:hover:bg-zinc-800 transition-colors"
                      >
                        <svg className="w-8 h-8" viewBox="0 0 48 48">
                          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                        </svg>
                        <span className="text-xs font-semibold text-slate-900 dark:text-white">Google</span>
                      </motion.div>
                      {/* Microsoft */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-2 px-3 py-2 rounded-lg hover:bg-white dark:hover:bg-zinc-800 transition-colors"
                      >
                        <svg className="w-8 h-8" viewBox="0 0 23 23">
                          <path fill="#f35325" d="M1 1h10v10H1z"/>
                          <path fill="#81bc06" d="M12 1h10v10H12z"/>
                          <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                          <path fill="#ffba08" d="M12 12h10v10H12z"/>
                        </svg>
                        <span className="text-xs font-semibold text-slate-900 dark:text-white">Microsoft</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Security Badge - Modern Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group relative bg-gradient-to-br from-slate-50 to-white dark:from-zinc-900 dark:to-zinc-800 rounded-2xl p-6 border border-slate-200 dark:border-zinc-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center min-h-[140px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-blue-500/10 rounded-2xl transition-all duration-300"></div>
                  <div className="relative flex flex-col items-center justify-center w-full">
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-5">Security</span>
                    <div className="relative flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border-2 border-blue-200 dark:border-blue-700 flex items-center justify-center group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-300 group-hover:scale-105">
                        <div className="text-center leading-tight">
                          <div className="text-[10px] font-bold text-blue-600 dark:text-blue-400 mb-0.5">AICPA</div>
                          <div className="text-sm font-bold text-blue-700 dark:text-blue-300">SOC</div>
                        </div>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Partners With - Modern Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="group relative bg-gradient-to-br from-slate-50 to-white dark:from-zinc-900 dark:to-zinc-800 rounded-2xl p-6 border border-slate-200 dark:border-zinc-700 hover:border-slate-300 dark:hover:border-zinc-600 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center min-h-[140px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300"></div>
                  <div className="relative w-full flex flex-col items-center justify-center">
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-5">Partners with</span>
                    <div className="flex flex-wrap items-center justify-center gap-3 w-full">
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        className="text-xs font-semibold text-slate-900 dark:text-white px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
                      >
                        Scrum.org
                      </motion.span>
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        className="text-xs font-semibold text-slate-900 dark:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
                      >
                        <svg className="w-4 h-4 text-[#0052CC]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.53 16.92v-5.6l5.3 5.6H24L14.43 5.46 11.53 8v8.92zm-5.65-4.3l3.6-3.83-3.6-3.8L.24 10.27l5.64 2.35zM5.88 15.6l5.65-2.35v6.52L5.88 15.6z"/>
                        </svg>
                        Atlassian
                      </motion.span>
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        className="text-xs font-semibold text-slate-900 dark:text-white px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
                      >
                        zoom
                      </motion.span>
                    </div>
                  </div>
                </motion.div>

             </div>

             {/* Trusted By - Modern Design */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="w-full max-w-5xl"
             >
               <div className="text-center mb-8">
                 <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">Trusted by</p>
               </div>
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 px-4">
                 {TEXT_LOGOS.map((logo, i) => (
                   <motion.div
                     key={i}
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                     whileHover={{ scale: 1.05, y: -2 }}
                     className="bg-gradient-to-br from-slate-50 to-white dark:from-zinc-900 dark:to-zinc-800 rounded-xl p-6 border border-slate-200 dark:border-zinc-700 hover:border-slate-300 dark:hover:border-zinc-600 hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center min-h-[100px]"
                   >
                     <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white text-center">
                       {logo}
                     </span>
                   </motion.div>
                 ))}
               </div>
             </motion.div>
        </div>

      </div>
    </section>
  );
}