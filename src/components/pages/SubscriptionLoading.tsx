'use client'
import React from 'react';

const SubscriptionLoading: React.FC = () => {
    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Subscription Management</h1>
                <p className="text-gray-500 mt-2">Loading subscription plans...</p>
            </div>
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#022C22]"></div>
            </div>
        </div>
    );
};

export default SubscriptionLoading;