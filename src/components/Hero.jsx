import React from 'react';
import { assets } from '../assets/assets';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <div className="relative h-[500px] sm:h-[600px] w-full border border-gray-400 overflow-hidden">
            {/* Background Image */}
            <img
                src={assets.young}
                alt="hero"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20 px-4 text-white">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-gray-200">
                        <p className="w-8 md:w-11 h-[2px] bg-gray-200"></p>
                        <p className="font-medium text-sm md:text-base">{t('Simple_solution')}</p>
                    </div>
                    <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed text-white">
                        {t('Change for Header')}
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-gray-200">
                        <p className="font-semibold text-sm md:text-base">{t('On lick at a time')}</p>
                        <p className="w-8 md:w-11 h-[1px] bg-gray-200"></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
