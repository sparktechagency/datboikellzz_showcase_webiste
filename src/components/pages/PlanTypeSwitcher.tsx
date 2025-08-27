'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface PlanTypeSwitcherProps {
  planTypes: string[];
  selectedPlanType: string;
  onPlanTypeChange: (planType: string) => void;
}

const PlanTypeSwitcher: React.FC<PlanTypeSwitcherProps> = ({
  planTypes,
  selectedPlanType,
  onPlanTypeChange,
}) => {
  const gridClass = planTypes.length === 3 ? 'grid-cols-3' : 
                   planTypes.length === 2 ? 'grid-cols-2' : 
                   'grid-cols-1';

  return (
    <div className={`grid ${gridClass} mb-8 border rounded-md overflow-hidden`}>
      {planTypes.map((planType) => (
        <motion.button
          key={planType}
          whileTap={{ scale: 0.98 }}
          onClick={() => onPlanTypeChange(planType)}
          className={`py-3 px-4 text-center transition-colors ${
            selectedPlanType === planType
              ? 'bg-[#022C22] text-white'
              : 'bg-white hover:bg-gray-50'
          }`}
        >
          {planType
            .split('_')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')}
        </motion.button>
      ))}
    </div>
  );
};

export default PlanTypeSwitcher;