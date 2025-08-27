'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGetAllSubscriptionQuery } from '@/app/provider/redux/services/subscriptionApis';
import {
    SubscriptionPlan,
    TransformedPlan,
    PlansByDuration,
    PlanSelection,
} from '@/types/subscription';
import DurationSwitcher from './DurationSwitcher';
import PlanTypeSwitcher from './PlanTypeSwitcher';
import PlanCard from './PlanCard';
import SubscriptionLoading from './SubscriptionLoading';

const SubscriptionManagement: React.FC = () => {
    const { data: subscriptionData, isLoading: subscriptionDataLoading } =
        useGetAllSubscriptionQuery(undefined);

    const [selection, setSelection] = useState<PlanSelection>({
        duration: 'daily',
        planType: 'quick_hit',
    });
    const [plansByDuration, setPlansByDuration] = useState<PlansByDuration>({
        daily: [],
        monthly: [],
    });
    const [availablePlanTypes, setAvailablePlanTypes] = useState<{
        daily: string[];
        monthly: string[];
    }>({
        daily: [],
        monthly: [],
    });

    useEffect(() => {
        if (subscriptionData?.data?.subscriptionPlans) {
            const apiPlans: SubscriptionPlan[] = subscriptionData.data.subscriptionPlans;


            const transformedPlans: Record<string, TransformedPlan> = {};
            const planTypes = {
                daily: [] as string[],
                monthly: [] as string[],
            };


            apiPlans.forEach((plan) => {
                const type = plan.subscriptionType.toLowerCase();
                const duration = plan.duration === 'daily' ? 'daily' : 'monthly';


                const planKey = `${duration}_${type}`;
                const existingPlan = transformedPlans[planKey];

                if (
                    !existingPlan ||
                    new Date(plan.updatedAt) > new Date(existingPlan.updatedAt)
                ) {
                    transformedPlans[planKey] = {
                        id: plan._id,
                        name: type,
                        duration,
                        displayName: `${type
                            .split('_')
                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(' ')} Plan`,
                        price: plan.price.toString(),
                        period: plan.duration === 'monthly' ? 'month' : plan.duration,
                        features: plan.features.map((feature, index) => ({
                            id: index + 1,
                            text: feature,
                        })),
                        createdAt: plan.createdAt,
                        updatedAt: plan.updatedAt,
                    };


                    if (!planTypes[duration].includes(type)) {
                        planTypes[duration].push(type);
                    }
                }
            });


            const dailyPlans: TransformedPlan[] = [];
            const monthlyPlans: TransformedPlan[] = [];

            Object.values(transformedPlans).forEach((plan) => {
                if (plan.duration === 'daily') {
                    dailyPlans.push(plan);
                } else {
                    monthlyPlans.push(plan);
                }
            });

            setPlansByDuration({
                daily: dailyPlans,
                monthly: monthlyPlans,
            });
            setAvailablePlanTypes(planTypes);


            const currentDurationPlans = planTypes[selection.duration];
            if (currentDurationPlans.length > 0) {
                const currentPlanExists = currentDurationPlans.includes(selection.planType);
                if (!currentPlanExists) {
                    setSelection({
                        ...selection,
                        planType: currentDurationPlans[0],
                    });
                }
            }
        }
    }, [subscriptionData, selection.duration]);

    const handleDurationChange = (duration: 'daily' | 'monthly') => {
        const availablePlans = availablePlanTypes[duration];
        setSelection({
            duration,
            planType: availablePlans.length > 0 ? availablePlans[0] : '',
        });
    };

    const handlePlanTypeChange = (planType: string) => {
        setSelection({
            ...selection,
            planType,
        });
    };

    const handlePlanSelect = (planId: string) => {

        console.log('Selected plan:', planId);

    };

    if (subscriptionDataLoading) {
        return <SubscriptionLoading />;
    }

    if (
        !subscriptionData?.data?.subscriptionPlans ||
        (availablePlanTypes.daily.length === 0 &&
            availablePlanTypes.monthly.length === 0)
    ) {
        return (
            <div className="container mx-auto p-4 max-w-4xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">Subscription Management</h1>
                    <p className="text-gray-500 mt-2">No subscription plans found</p>
                </div>
                <div className="text-center py-8">
                    <p className="text-gray-500">
                        No subscription plans available to manage.
                    </p>
                </div>
            </div>
        );
    }

    const currentPlans = plansByDuration[selection.duration];
    const currentPlanTypes = availablePlanTypes[selection.duration];

    return (
        <div className="max-w-screen-md mx-auto my-28 p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">Choose Your Plan</h1>
                <p className="text-gray-500 mt-2">
                    Smart Picks. Smarter Bets.
                </p>
            </motion.div>

            <div className="w-full">
                <DurationSwitcher
                    selectedDuration={selection.duration}
                    onDurationChange={handleDurationChange}
                />

                {currentPlanTypes.length > 0 && (
                    <PlanTypeSwitcher
                        planTypes={currentPlanTypes}
                        selectedPlanType={selection.planType}
                        onPlanTypeChange={handlePlanTypeChange}
                    />
                )}

                {currentPlanTypes.length === 0 && (
                    <div className="text-center py-8 border rounded-lg">
                        <p className="text-gray-500">
                            No {selection.duration} plans available yet.
                        </p>
                    </div>
                )}

                <AnimatePresence mode="wait">
                    <motion.div
                        key={selection.duration + selection.planType}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {currentPlans
                            .filter((plan) => plan.name === selection.planType)
                            .map((plan) => (
                                <PlanCard
                                    key={plan.id}
                                    plan={plan}
                                    onSelect={handlePlanSelect}
                                    isSelected={true}
                                />
                            ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default SubscriptionManagement;