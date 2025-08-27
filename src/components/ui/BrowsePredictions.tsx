'use client'
import { Post } from "@/app/(default)/browse-Predictions/page";
import { useAllPostQuery } from "@/app/provider/redux/services/postApis";
import PredictionCard from "@/components/default/cards/PredictionCard";
import TitleBar from "@/components/shared/TitleBar";
import { Card } from "antd";
import React, { useState } from "react";

function BrowsePredictions() {
    const [targetUser] = useState('')
    const { data, isLoading } = useAllPostQuery(targetUser)
    if (isLoading) {
        return (
            <div className="container py-28 mx-auto px-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    Array.from({ length: 10 }).map((_, index) => (
                        <Card key={index} loading />
                    ))
                }
            </div>
        )
    }
    return (
        <div className="container py-28 mx-auto px-4 ">
            <TitleBar title="Latest Predictions" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data?.data?.posts?.map((post: Post) => (
                    <PredictionCard key={post?._id} post={post} />
                ))}
            </div>
        </div >
    );
}

export default BrowsePredictions;
