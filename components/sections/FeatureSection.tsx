'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, subtitle, features }) => {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-[#13141b] transition-colors duration-200">
      <div className="container px-4 mx-auto max-w-[1200px]">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg lg:text-xl text-slate-500 dark:text-slate-400 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <CheckCircle2 size={24} strokeWidth={2.5} />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
