'use client';
import React, { useEffect, useState } from 'react';
import { LogoSection } from '@/components/atoms/LogoSection';
import { Hamburger } from '@/components/atoms/Hamburger';
import ThemeMode from '@/components/atoms/ThemeMode';

import { SocialIcons } from '@/components/atoms/SocialIcons';
import { ClockSection } from '../atoms/ClockSection';

export const Header  = () => {
// const themeIcon = localStorage.getItem('theme') ==='light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />;
    return (
        <header className="header bg-transparent">
            <div className="container flex justify-between items-center py-3 px-6">
                <div className="flex items-center gap-4">
                    <LogoSection />
                </div>
                <div className="hidden lg:flex items-center gap-3">
                    <ClockSection />
                    <ThemeMode />
                    <SocialIcons />
                </div>
                {/* Mobile Hamburger */}
                <Hamburger />
            </div>
        </header>
    );
};