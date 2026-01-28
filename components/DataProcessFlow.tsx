'use client';

import React from "react";
import { motion } from "motion/react";
import { Users, Video, GitMerge, Layout, TrendingUp, Bot, ArrowRight, Cpu } from "lucide-react";

// Types
interface FlowNode {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  buttonText: string;
  pathConfig: {
    d: string;
  };
  animation: {
    duration: number;
    delay: number;
  };
}

const DATA_NODES: FlowNode[] = [
  // TOP ROW
  {
    id: "source-1",
    title: "oNabu Knows Your Team",
    description: "Learns your members, teams, products, portfolios and company, guiding you as an AI coach.",
    icon: Users,
    color: "#3B82F6", // Blue
    buttonText: "Meet Your AI Coach",
    pathConfig: { d: "M 183 182 V 220 H 350 V 295 H 420" },
    animation: { duration: 3.5, delay: 0 }
  },
  {
    id: "source-2",
    title: "Auto-updated Work Status",
    description: "oNabu updates Jira/Azure DevOps tasks by analyzing team meetings and Slack/Teams channels.",
    icon: Video,
    color: "#8B5CF6", // Purple
    buttonText: "See oNabu in Action",
    pathConfig: { d: "M 550 182 V 210 H 500 V 280" },
    animation: { duration: 2.8, delay: 1.2 }
  },
  {
    id: "source-3",
    title: "Dependencies & Blockers",
    description: "Maps dependencies to uncover actionable blockers, reducing risks and keeping delivery on schedule.",
    icon: GitMerge,
    color: "#EC4899", // Pink
    buttonText: "Go to Product Tour",
    pathConfig: { d: "M 917 182 V 220 H 750 V 295 H 700" },
    animation: { duration: 4.1, delay: 0.5 }
  },
  
  // BOTTOM ROW
  {
    id: "output-1",
    title: "Extreme Visibility",
    description: "Provides leaders and teams with visibility into progress and risks, keeping priorities clear.",
    icon: Layout,
    color: "#F59E0B", // Orange
    buttonText: "Go to Product Tour",
    pathConfig: { d: "M 183 458 V 420 H 350 V 345 H 420" },
    animation: { duration: 3.2, delay: 1.5 }
  },
  {
    id: "output-2",
    title: "Daily Tactics",
    description: "Surfaces team trends, flags risks and delivers ongoing feedback with metrics to drive improvement.",
    icon: TrendingUp,
    color: "#10B981", // Green
    buttonText: "Check out oNabu Tactics",
    pathConfig: { d: "M 550 458 V 430 H 600 V 360" },
    animation: { duration: 2.5, delay: 0.8 }
  },
  {
    id: "output-3",
    title: "AI Coaching & Secured Data",
    description: "Leverages company-wide data to reveal team sentiment, pinpoint inefficiencies, and deliver insights.",
    icon: Bot,
    color: "#06B6D4", // Cyan
    buttonText: "Ask oNabu Anything",
    pathConfig: { d: "M 917 458 V 420 H 750 V 345 H 700" },
    animation: { duration: 3.8, delay: 2.0 }
  },
];

export function DataProcessFlow() {
  return (
    <section className="py-12 lg:py-24 bg-[#F8F9FA] dark:bg-[#0c0d12] transition-colors duration-200 overflow-hidden font-sans">
      <div className="container max-w-[1200px] mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-16 relative z-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1c1c] dark:text-white mb-4 tracking-tight">
            The Central Nervous System
          </h2>
          <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400">
            Connecting your data sources to actionable outcomes via intelligent processing.
          </p>
        </div>

        {/* 
           MOBILE VIEW (< lg breakpoint)
           Simple vertical stack layout
        */}
        <div className="lg:hidden flex flex-col gap-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {/* Render first 3 cards */}
             {DATA_NODES.slice(0, 3).map(node => (
                <NodeCard key={node.id} node={node} position="mobile" />
             ))}
          </div>

          {/* Central Hub (Mobile Version) */}
          <div className="flex justify-center py-4">
            <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              <div className="bg-[#1c1c1c] rounded-xl px-6 py-3 flex items-center gap-3 shadow-xl">
                 <Cpu className="w-6 h-6 text-white" />
                 <div className="flex flex-col">
                    <span className="text-lg font-bold text-white tracking-wide">oNabu</span>
                    <span className="text-[9px] text-gray-400 uppercase tracking-widest">Neural Core</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {/* Render last 3 cards */}
             {DATA_NODES.slice(3, 6).map(node => (
                <NodeCard key={node.id} node={node} position="mobile" />
             ))}
          </div>
        </div>

        {/* 
           DESKTOP VIEW (>= lg breakpoint) 
           The complex SVG diagram
        */}
        <div className="hidden lg:block relative w-full max-w-[1100px] mx-auto h-[640px]">
          
          {/* SVG Connector Layer */}
          <div className="absolute inset-0 pointer-events-none z-0 select-none">
            <svg className="w-full h-full" viewBox="0 0 1100 640" fill="none" preserveAspectRatio="none">
              
              {/* Background Tracks */}
              <g className="opacity-20 dark:opacity-30 stroke-slate-300 dark:stroke-slate-700">
                 {DATA_NODES.map(node => (
                    <path key={`bg-${node.id}`} d={node.pathConfig.d} strokeWidth="1" fill="none" />
                 ))}
                 
                 {/* Connection Dots */}
                 <circle cx="350" cy="295" r="2" fill="currentColor" />
                 <circle cx="350" cy="345" r="2" fill="currentColor" />
                 <circle cx="750" cy="295" r="2" fill="currentColor" />
                 <circle cx="750" cy="345" r="2" fill="currentColor" />
              </g>

              {/* Active Flow Lines */}
              {DATA_NODES.map((node) => (
                <FlowPath 
                  key={node.id}
                  d={node.pathConfig.d} 
                  color={node.color}
                  duration={node.animation.duration}
                  delay={node.animation.delay}
                />
              ))}
            </svg>
          </div>

          {/* GRID LAYOUT */}
          
          {/* Top Row Cards */}
          <div className="absolute top-0 left-0 right-0 grid grid-cols-3 gap-6 px-0 pointer-events-none">
             <div className="pointer-events-auto h-auto"><NodeCard node={DATA_NODES[0]} position="top" /></div>
             <div className="pointer-events-auto h-auto"><NodeCard node={DATA_NODES[1]} position="top" /></div>
             <div className="pointer-events-auto h-auto"><NodeCard node={DATA_NODES[2]} position="top" /></div>
          </div>

          {/* Center Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[280px] h-[80px]">
             <div className="relative w-full h-full group">
                {/* Glow */}
                <div className="absolute -inset-8 bg-blue-500/15 rounded-full blur-2xl group-hover:bg-blue-500/25 transition-all duration-500"></div>
                
                {/* Connection Pins */}
                <div className="absolute -top-[5px] left-[130px] w-[2px] h-[5px] bg-purple-500 shadow-[0_0_8px_purple]"></div>
                <div className="absolute -bottom-[5px] right-[100px] w-[2px] h-[5px] bg-emerald-500 shadow-[0_0_8px_emerald]"></div>
                <div className="absolute top-[15px] -left-[5px] h-[2px] w-[5px] bg-blue-500 shadow-[0_0_8px_blue]"></div>
                <div className="absolute bottom-[15px] -left-[5px] h-[2px] w-[5px] bg-amber-500 shadow-[0_0_8px_amber]"></div>
                <div className="absolute top-[15px] -right-[5px] h-[2px] w-[5px] bg-pink-500 shadow-[0_0_8px_pink]"></div>
                <div className="absolute bottom-[15px] -right-[5px] h-[2px] w-[5px] bg-cyan-500 shadow-[0_0_8px_cyan]"></div>

                {/* Main Body */}
                <div className="relative w-full h-full bg-white dark:bg-[#1c1c1c] rounded-xl shadow-[0_0_30px_-5px_rgba(0,0,0,0.1)] dark:shadow-none border border-slate-200 dark:border-gray-700 flex items-center justify-center gap-3 overflow-hidden z-10">
                   <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                     <Cpu size={20} />
                   </div>
                   <div className="flex flex-col">
                      <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">oNabu</span>
                      <span className="text-[10px] font-semibold text-slate-400 dark:text-gray-500 uppercase tracking-widest">Neural Core</span>
                   </div>
                   
                   {/* Shine */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 dark:via-white/5 to-transparent skew-x-12"></div>
                </div>
             </div>
          </div>

          {/* Bottom Row Cards */}
          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 gap-6 px-0 pointer-events-none">
             <div className="pointer-events-auto h-auto"><NodeCard node={DATA_NODES[3]} position="bottom" /></div>
             <div className="pointer-events-auto h-auto"><NodeCard node={DATA_NODES[4]} position="bottom" /></div>
             <div className="pointer-events-auto h-auto"><NodeCard node={DATA_NODES[5]} position="bottom" /></div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Continuous Flow Path (Never stops)
function FlowPath({ d, color, duration, delay }: { d: string; color: string; duration: number; delay: number }) {
  return (
    <motion.path
      d={d}
      stroke={color}
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      strokeDasharray="100 200" 
      initial={{ strokeDashoffset: 300 }}
      animate={{ strokeDashoffset: 0 }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop"
      }}
      style={{
           filter: `drop-shadow(0px 0px 6px ${color})`,
           opacity: 1
      }}
    />
  );
}

// Node Card
function NodeCard({ node, position }: { node: FlowNode, position: "top" | "bottom" | "mobile" }) {
  const Icon = node.icon;
  const isTop = position === "top";
  const isMobile = position === "mobile";
  
  return (
    <div className={`relative flex flex-col h-full w-full items-center ${isMobile ? '' : 'p-2'}`}>
       {/* Card Body */}
       <div className="w-full bg-white dark:bg-[#15161c] rounded-2xl p-5 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-gray-800 transition-all duration-300 z-10 flex flex-col group relative overflow-hidden h-full">
           
           {/* Top Accent Line */}
           <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ color: node.color }} />

           {/* Icon & Title Header */}
           <div className="flex items-center gap-3 mb-3 shrink-0">
               <div 
                 className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                 style={{ backgroundColor: `${node.color}15`, color: node.color }}
               >
                   <Icon size={20} className="stroke-[2.5]" />
               </div>
               <h3 className="font-bold text-slate-900 dark:text-white text-[15px] leading-tight pr-2">
                   {node.title}
               </h3>
           </div>
           
           {/* Description */}
           <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed mb-4 font-medium grow">
               {node.description}
           </p>
           
           {/* CTA Link */}
           <div className="mt-auto shrink-0">
             <button 
               className="text-xs font-bold flex items-center gap-1.5 transition-all group-hover:gap-2.5 duration-300 py-1" 
               style={{ color: node.color }}
             >
               {node.buttonText} 
               <ArrowRight size={12} className="stroke-[3]" />
             </button>
           </div>

           {/* Connector Dot (Desktop Only) */}
           {!isMobile && (
             <div 
                className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white dark:border-[#15161c] z-20 transition-all duration-500
                    ${isTop ? "-bottom-[6px]" : "-top-[6px]"}
                `}
                style={{ backgroundColor: node.color }}
             />
           )}
       </div>
    </div>
  );
}
