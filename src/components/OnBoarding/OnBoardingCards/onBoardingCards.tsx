import React from "react";
import Link from "next/link";
import { ProgressBar } from "../ProgressBar";
import { IOnBoarding } from "../OnBoardingDTO";
import Image from "next/image";
interface Props {
    onboarding: IOnBoarding;
}

export const OnBoardingCards: React.FC<Props> = ({ onboarding }) => {
    const isComplete = onboarding.current === onboarding.target;

    return (
        <Link href={`/dashboard/onboarding/${encodeURIComponent(onboarding.id)}`}>
                <li className="relative shadow-md border ">
                    <div className="group aspect-h-6 aspect-w-10 block w-full overflow-hidden rounded-t-md bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                        <Image height='160' width='160' src={onboarding.image} alt="" className="pointer-events-none h-[10rem] w-full object-cover group-hover:opacity-75" />
                        <div className="absolute top-0 left-0 px-4 py-2">
                            <p className={`p-1 px-4 text-white ${isComplete ? ' bg-[#917248]' : ' bg-[#043673]'}  rounded-full inline-block max-w-xs`}>
                                {isComplete ? 'Complete' : 'Incomplete'}
                            </p>
                        </div>
                    </div>
                    <div className="px-8 py-2 rounded-b-xl bg-white">
                        <p className="pointer-events-none block truncate text-2xl font-bold text-gray-900">{onboarding.title}</p>
                        <div className="flex mt-8 mb-6 items-center">
                            <p className="text-base text-gray-500 capitalize line-clamp-3">{onboarding.description}</p>
                        </div>

                        <div className="justify-between flex ">
                            <p className="pointer-events-none block text-sm font-medium text-green-600">
                                {onboarding.current} completed
                            </p>

                            <div className="flex items-center">
                                <Image height={64} width={64}
                                    src="/onboarding/Goal.svg"
                                    alt="Goal"
                                    className="h-4 w-4 mr-1 text-gray-600"
                                />
                                <p className="pointer-events-none block text-sm font-medium text-gray-600">
                                    {onboarding.target} target
                                </p>
                            </div>
                        </div>
                        <div className="mb-6 flex items-center justify-center">
                            <ProgressBar
                                progress={onboarding.current}
                                target={onboarding.target}
                            />
                        </div>
                    </div>
                </li>
        </Link>
    );
};

