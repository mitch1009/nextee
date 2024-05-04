'use client'

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { biography } from "../onBoardingData";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { OnBoardingTabs } from "../OnBoardingTabs";
import { OnBoardingSwitch } from "../OnBoardingSwitch";
import Image from "next/image";



export const OnBoardingDetails = () => {
    const { id } = useParams<{ id: string }>();
    const data = biography.find(item => item.id === id);
    const router = useRouter();
    const [seeMore, setSeeMore] = useState(false);
    const [activeTab, setActiveTab] = useState(data?.tabs && data.tabs.length > 0 ? data.tabs[0].name : '');

    const handleTabChange = (tabName: string) => {
        setActiveTab(tabName);
    };

    const handleClick = () => {
        router.push('/dashboard/onboarding');
    };

    const isComplete = data?.current === data?.target;

    return (
        <div className='max-w-7xl mx-auto py-8'>
            <div>
                <button className="flex rounded border px-3 py-1 cursor-pointer items-center" onClick={handleClick}>
                    <ArrowLeftIcon className="h-4 w-4 font-semibold mr-2" />
                    <span className="text-md mr-4">Back to onboarding home</span>
                </button>
            </div>
            <div className="divide-y divide-gray-200 border rounded-2xl px-4 mt-6">
                <div className="card">
                    <div className="mx-auto">
                        <p className={`p-1 px-4 mt-4 text-white ${isComplete ? ' bg-[#917248]' : ' bg-[#043673]'}  rounded-full inline-block max-w-xs`}>
                            {isComplete ? 'Complete' : 'Incomplete'}
                        </p>
                        <div className="group relative py-2 bg-white  dark:shadow-none     sm:gap-8 sm:flex ">
                            <div className="rounded-xl mt-3 overflow-hidden transition-all w-full h-44 sm:w-40">
                                <Image height={160} width={160}
                                    src={data?.image??''}
                                    alt="art cover"
                                    loading="lazy"
                                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="sm:p-2 sm:pl-0 sm:w-5/6">
                                <h3 className="text-2xl font-extrabold sm:mt-0 mt-2 text-gray-800 dark:text-white">{data?.title}</h3>
                                <div className="flex justify-start items-center">
                                    <p className="my-6 text-gray-600 dark:text-gray-300">
                                        <span className={seeMore ? '' : 'line-clamp-3'}>{data?.description}</span>
                                        {data?.description && data?.description?.length > 198 && <button onClick={() => setSeeMore(!seeMore)} className="bg-white text-green-600">{seeMore ? '...see less' : '...see more'}</button>}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-4 menu">
                    <OnBoardingTabs
                        activeTab={activeTab}
                        handleTabChange={handleTabChange}
                        tabs={data?.tabs ? data?.tabs.map(tab => ({ name: tab.name, href: `#${tab.name}`, current: activeTab === tab.name ?? true  })):[]} 
                        styleConfig={{
                            default: "border-transparent text-gray-700 hover:border-green-300 hover:text-green-400 whitespace-nowrap py-4 px-1 font-medium",
                            active: "border-green-500  border-b-4 text-green-500 whitespace-nowrap py-4 px-1 font-medium",
                            hover: ""
                        }} />
                </div>
            </div>
            <div className=" rounded-xl border w-full bg-white mt-10  p-16">
                <div className="w-full p-4 ">
                    <OnBoardingSwitch activeTab={activeTab} />
                </div>
            </div>
        </div>
    )
};

