import BookIcon from '@/components/ui/iconSvg/BookIcon';
import PlaneSvg from '@/components/ui/iconSvg/PlaneSvg';
import SmartSvg from '@/components/ui/iconSvg/SmartSvg';
import Image from 'next/image';
import React from 'react';

function WorkSystem() {
  const workFlow = [
    {
      title: 'Get the App',
      description: 'Download BetWise and sign up in seconds to get started.',
      icon: <BookIcon />,
    },
    {
      title: 'Pick a Plan',
      description: 'Choose the subscription that fits your betting style.',
      icon: <PlaneSvg />,
    },
    {
      title: 'Bet Smarter',
      description: 'Access expert tips, explore insights, and start winning.',
      icon: <SmartSvg />,
    },
  ];
  return (
    <div className="container px-2 mx-auto py-12 md:py-28">
      <div className="flex flex-col mb-12 items-center gap-4">
        <h1 className="font-poppins font-semibold text-2xl md:text-4xl xl:text-5xl text-center tracking-normal leading-none">
          How <span className="text-[#E5B92E]">BetWise</span> Works
        </h1>
        <p>
          Getting started is easy — just three simple steps to unlock expert
          insights and start betting smarter.
        </p>
      </div>
      <div className="relative">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="absolute hidden xl:block top-0 left-1/2 transform -translate-x-1/2 max-w-7xl h-full container"
          >
            <Image
              src="/curve-svg.png"
              alt="work-system-bg"
              width={1000}
              height={200}
              className="w-full h-full object-bottom-right -z-1"
            />
          </div>
        ))}
        <div className="grid  grid-cols-1 gap-4 xl:gap-24 xl:grid-cols-3 px-3">
          {workFlow.map((item, index) => (
            <div
              key={index}
              className="relative p-6 z-10 md:p-12 rounded-md overflow-hidden shadow-sm md:shadow-sm flex flex-col md:items-start"
            >
              <div className="absolute -top-1/2 left-1/2 transform -translate-x-1/2  w-full h-full -z-1"></div>
              <div className="absolute -z-1 top-0 left-0 w-full h-full">
                <Image
                  src="/work-bg.png"
                  alt="work-system-bg"
                  fill
                  className="object-bottom-right"
                />
              </div>
              <div className="w-20 h-20  flex items-start justify-center rounded-full">
                {item.icon}
              </div>
              <h1 className="text-2xl font-bold mt-4">{item.title}</h1>
              <p className="md:text-start text-center mt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkSystem;
