import React from "react";
import { OnBoardingCards } from "./OnBoardingCards";
import { biography } from "./onBoardingData";
import { OnBoardingHeader } from "./OnBoardingHeader";

export const OnBoardingPage: React.FC = () => {
    
    return (
        <div className="container">
            <div className="mt-8 mb-16 w-full ">
                <OnBoardingHeader />
            </div>
            <div className="max-w-7xl mx-auto py-8  px-4 sm:px-0">
                <h1  className="text-3xl text-gray-900 font-bold mb-8 border-b-4 border-gray-900 w-full">
                    Biography
                </h1>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
                    {biography.map((onboarding) => (
                        <OnBoardingCards onboarding={onboarding} key={onboarding.id} />
                    ))}
                </ul>
            </div>

        </div>
    );
};

