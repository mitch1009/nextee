import { auth } from '@/lib/auth';
import Image from 'next/image';
import React from 'react';

export const OnBoardingHeader = async () => {
    const session =await auth()
    console.log("SESSION",session)
    return (
        <div className="relative isolate rounded-lg overflow-hidden bg-gray-900 py-8 sm:py-16">
            <Image height={160} width={160}
                src="https://images.pexels.com/photos/3826676/pexels-photo-3826676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div
                className="absolute inset-0 bg-gray-900 opacity-90"
                style={{ zIndex: -1 }}
            ></div>
            <div
                className="mx-auto max-w-7xl z-50 px-6 lg:px-8 relative"
                style={{ zIndex: 1 }}
            >
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Welcome Aboard <span className='text-[#917248]'>{session?.user?.name}</span></h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Welcome aboard! {"We're"} thrilled to have you join us. Our mission is to create unforgettable experiences together. 
                    </p>
                </div>
            </div>
        </div>
    );
};
