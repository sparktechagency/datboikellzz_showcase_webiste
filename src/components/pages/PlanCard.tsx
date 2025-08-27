'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from 'antd';
import { CheckIcon } from '@/components/pages/icon';
import { TransformedPlan } from '@/types/subscription';
import { cn } from '@/lib/utils';

interface PlanCardProps {
    plan: TransformedPlan;
    onSelect: (planId: string) => void;
    isSelected?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, onSelect, isSelected = false }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(`border-2 w-full rounded-lg p-6 h-full flex flex-col`, {
                'border-[#022C22] shadow-md': isSelected,
                'border-gray-200': !isSelected,
            })}
        >
            <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{plan.displayName}</h3>
                <div className="mb-4">
                    <span className="text-[#022C22] text-3xl font-bold">${plan.price}</span>
                    <span className="text-gray-500 ml-1">/{plan.period}</span>
                </div>

                <div className="mb-6">
                    <h4 className="font-semibold mb-3">Features</h4>
                    <ul className="space-y-2">
                        {plan.features.map((feature) => (
                            <li key={feature.id} className="flex items-start gap-2">
                                <div className="flex-shrink-0 h-5 w-5 rounded-full border border-[#022C22] flex items-center justify-center mt-0.5">
                                    <CheckIcon className="h-3 w-3 text-[#022C22]" />
                                </div>
                                <span className="text-sm">{feature.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <Button
                type={isSelected ? 'primary' : 'default'}
                size="large"
                className="w-full mt-auto"
                onClick={() => onSelect(plan.id)}
                style={isSelected ? { backgroundColor: '#022C22', borderColor: '#022C22' } : {}}
            >
                {isSelected ? 'Selected' : 'Choose Now'}
            </Button>
        </motion.div>
    );
};

export default PlanCard;