'use client'
import PredictionCard from "@/components/default/cards/PredictionCard";
import TitleBar from "@/components/shared/TitleBar";
import React from "react";

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

function Page() {
    const posts: Post[] = [
        {
            _id: "686e0a158230088ae33cadcd",
            postTitle: "Bronze",
            sportType: "Bronze play",
            predictionType: "idk",
            predictionDescription: "Prediction description",
            winRate: 67,
            targetUser: "bronze",
            oddsRange: "1.5",
            post_image: "uploads/post_image/1756207931412-0d944995d50455d3fc87a14eff374a6724133f7c.png",
            postedBySuperAdmin: "6853e3d06961efa6b1e221a9",
            createdAt: "2025-07-09T06:20:05.597Z",
            updatedAt: "2025-07-09T06:20:05.597Z",
        },
    ];

    return (
        <div className="container py-28 mx-auto px-4 ">
            <TitleBar title="Latest Predictions" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 9 }).map((_, index) => (
                    <PredictionCard key={index}  post={posts[0]} />
                ))}
            </div>
        </div >
    );
}

export default Page;
