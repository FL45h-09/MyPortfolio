'use client';
import React, { useEffect, useState } from 'react';
import { LogoSection } from '@/components/atoms/LogoSection';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import ThemeMode from '@/components/atoms/ThemeMode';

import { SocialIcons } from '@/components/atoms/SocialIcons';
import { ClockSection } from '../atoms/ClockSection';

export const Header  = () => {
    const [menuOpen, setMenuOpen] = useState(false);
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
                <button className="lg:hidden p-2 rounded-lg hover:bg-gray-800" onClick={() => setMenuOpen(true)} aria-label="Open menu">
                    <Bars3Icon className="w-7 h-7" />
                </button>
            </div>
        </header>
    );
};