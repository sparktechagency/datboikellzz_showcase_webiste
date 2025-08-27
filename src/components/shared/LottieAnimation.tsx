"use client";
import React from "react";
import Lottie from "lottie-react";
import animationData from "@/../public/loader.json";

export default function LottieAnimation() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-64px)]">
      <Lottie 
        animationData={animationData} 
        loop={true} 
        autoplay={true} 
      />
    </div>
  );
}
