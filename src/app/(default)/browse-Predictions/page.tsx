import PrivetRoutes from '@/components/default/Security/PrivetRoutes';
import BrowsePredictions from '@/components/ui/BrowsePredictions';
import React, { Suspense } from 'react'
export interface Post {
    _id: string;
    postTitle: string;
    sportType: string;
    predictionType: string;
    predictionDescription: string;
    winRate: number;
    targetUser: string;
    oddsRange: string;
    post_image: string;
    postedBySuperAdmin: string;
    createdAt: string;
    updatedAt: string;
}
function page() {
    return (
        <Suspense fallback={<div className='flex items-center justify-center h-[calc(100vh-64px)]'>Loading...</div>}>
            <PrivetRoutes>
                <BrowsePredictions />
            </PrivetRoutes>
        </Suspense>
    )
}

export default page