'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface DurationSwitcherProps {
  selectedDuration: 'daily' | 'monthly';
  onDurationChange: (duration: 'daily' | 'monthly') => void;
}

const DurationSwitcher: React.FC<DurationSwitcherProps> = ({
  selectedDuration,
  onDurationChange,
}) => {
  return (
    <div className="grid grid-cols-2 mb-6 border rounded-md overflow-hidden">
      {(['daily', 'monthly'] as const).map((duration) => (
        <motion.button
          key={duration}
          whileTap={{ scale: 0.98 }}
          onClick={() => onDurationChange(duration)}
          className={`py-3 px-4 text-center transition-colors ${
            selectedDuration === duration
              ? 'bg-[#022C22] text-white'
              : 'bg-white hover:bg-gray-50'
          }`}
        >
          {duration === 'daily' ? 'Daily Plans' : 'Monthly Plans'}
        </motion.button>
      ))}
    </div>
  );
};

export default DurationSwitcher;