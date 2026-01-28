import React from 'react';
import Layout from './components/layout/Layout';
import { Hero as HeroSection } from './components/Hero';
import FeatureSection from './components/sections/FeatureSection';
import { DataProcessFlow } from './components/DataProcessFlow';

export default function App() {
  const features = [
    {
      title: 'Issue Tracking',
      description: 'Track and manage issues with ease. Never lose track of what needs to be done.',
    },
    {
      title: 'Project Management',
      description: 'Organize your projects and roadmaps in one place. Keep your team aligned.',
    },
    {
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time updates and notifications.',
    },
    {
      title: 'Customizable Workflows',
      description: 'Adapt Linear to your team\'s workflow with customizable states and fields.',
    },
    {
      title: 'Powerful Integrations',
      description: 'Connect with your favorite tools like GitHub, Slack, and more.',
    },
    {
      title: 'Beautiful Design',
      description: 'Enjoy a clean, modern interface that makes work feel effortless.',
    },
  ];

  return (
    <Layout>
      <HeroSection />
      
      {/* Central Nervous System Diagram */}
      <DataProcessFlow />
      
      <FeatureSection
        title="Everything you need to build better products"
        subtitle="Linear brings together issue tracking, project management, and team collaboration in one beautiful interface."
        features={features}
      />
    </Layout>
  );
}
