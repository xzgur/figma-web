import React from 'react';
import Layout from '@/components/layout/Layout';
import { Hero as HeroSection } from '@/components/Hero';
import { DataProcessFlow } from '@/components/DataProcessFlow';
import RequestDemoSection from '@/components/sections/RequestDemoSection';
import IntegrationsSection from '@/components/sections/IntegrationsSection';
import MaturityAssessmentSection from '@/components/sections/MaturityAssessmentSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      
      {/* Central Nervous System Diagram */}
      <DataProcessFlow />
      
      {/* Request Demo Section */}
      <RequestDemoSection />
      
      {/* Integrations Section */}
      <IntegrationsSection />
      
      {/* Maturity Assessment Section */}
      <MaturityAssessmentSection />
    </Layout>
  );
}

