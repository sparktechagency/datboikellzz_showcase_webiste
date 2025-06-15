import AppFeature from '@/components/default/Sections/AppFeature';
import HeroBanner from '@/components/default/Sections/HeroBanner';
import StatsSection from '@/components/default/Sections/StatsSection';
import WorkSystem from '@/components/default/Sections/WorkSystem';
import React from 'react';

function page() {
  return (
    <div>
      <HeroBanner />
      <WorkSystem />
      <AppFeature />
      <StatsSection />
      <div className="h-screen"></div>
      {/* <div className="h-screen"></div> */}
    </div>
  );
}

export default page;
