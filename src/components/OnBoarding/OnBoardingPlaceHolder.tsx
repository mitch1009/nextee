import Image from 'next/image';
import React from 'react';


export const OnBoardingPlaceHolder: React.FC<{ imageSrc: string; description: string }> = ({ imageSrc, description }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 h-64 p-4">
      <Image height={160} width={160} src={imageSrc} alt="Placeholder" className="sm:h-[22rem] sm:w-[22rem] h-64 w-64 rounded-full mb-4" />
      <p className="text-lg font-bold">{description}</p>
    </div>
  );
};


