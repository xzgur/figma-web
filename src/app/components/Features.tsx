import React from "react";
import { motion } from "motion/react";
import { Sparkles, FileText, Globe, Palette, LayoutGrid, BarChart2, Zap, Share2 } from "lucide-react";
import { FeaturesSection } from "../../types/cms";

const DEFAULT_FEATURES_DATA: FeaturesSection = {
  _type: 'features',
  heading: "Powerful features for",
  subHeading: "modern teams.",
  items: [
    {
      _type: 'feature',
      title: "Enrichment",
      description: "Automatically populate your CRM with data on companies and people. No manual entry required.",
      iconName: "Sparkles",
      colSpan: 2,
      accentColor: "purple" // Special accent
    },
    {
      _type: 'feature',
      title: "Kanban",
      description: "Visualize your deal flow with drag-and-drop ease.",
      iconName: "LayoutGrid",
      colSpan: 1,
      accentColor: "blue"
    },
    {
      _type: 'feature',
      title: "Reports",
      description: "Build custom reports to track your team's performance.",
      iconName: "BarChart2",
      colSpan: 1,
      accentColor: "green"
    },
    {
      _type: 'feature',
      title: "Real-time Sync",
      description: "Two-way sync with your email and calendar. Always up to date, always accurate.",
      iconName: "Zap",
      colSpan: 2,
      accentColor: "yellow"
    },
    {
      _type: 'feature',
      title: "Custom Objects",
      description: "Model your data exactly how your business works. Define relationships, properties, and views that fit your unique workflow.",
      iconName: "Palette",
      colSpan: 3,
      accentColor: "red"
    }
  ]
};

const IconMap: Record<string, React.ElementType> = {
  Sparkles,
  FileText,
  Globe,
  Palette,
  Zap,
  LayoutGrid,
  BarChart2,
  Share2
};

const ColorMap: Record<string, { bg: string, text: string, border: string, glow: string }> = {
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", glow: "from-purple-500/20" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20", glow: "from-blue-500/20" },
  green: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20", glow: "from-green-500/20" },
  yellow: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/20", glow: "from-yellow-500/20" },
  red: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/20", glow: "from-red-500/20" },
};

export function Features({ data = DEFAULT_FEATURES_DATA }: { data?: FeaturesSection }) {
  return (
    <section id="features" className="py-32 bg-[#13141b] relative overflow-hidden">
      
      <div className="container max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8"
          >
            {data.heading} <span className="text-slate-500">{data.subHeading}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.items.map((feature, index) => {
            const Icon = IconMap[feature.iconName] || Zap;
            const isWide = feature.colSpan === 2;
            const isFull = feature.colSpan === 3;
            const colors = ColorMap[feature.accentColor || "blue"];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                className={`
                  group relative p-8 rounded-3xl border border-[#2e313c] overflow-hidden flex flex-col justify-between
                  ${isWide ? 'md:col-span-2' : ''}
                  ${isFull ? 'md:col-span-3' : ''}
                  bg-[#1c1e26]
                  hover:border-[#3e424b] transition-all duration-300
                `}
              >
                {/* Background Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.glow} to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="mb-8 flex items-start justify-between">
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center border
                      ${colors.bg} ${colors.text} ${colors.border}
                    `}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    {/* Visual Tag for variety */}
                    {index === 0 && (
                        <div className="px-2 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wide">
                            AI Beta
                        </div>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-base text-slate-400 leading-relaxed max-w-lg font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Elements for wider cards */}
                {isWide && (
                   <div className={`absolute -bottom-10 -right-10 w-40 h-40 ${colors.bg} blur-[80px] rounded-full pointer-events-none opacity-50`} />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
