'use client';
import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { toggleTheme, initTheme } from '../../lib/theme';
import { IconContext } from 'react-icons';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { FaXTwitter } from "react-icons/fa6";

export const Header  = () => {
const [time, setTime] = useState('');
const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });
const toggleCurrentTheme = () => {
    toggleTheme();
    const newTheme = localStorage.getItem('theme');
    setCurrentTheme(newTheme || 'dark');
}
// const themeIcon = localStorage.getItem('theme') ==='light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />;

useEffect(() => {
    initTheme(true); // default dark
    const t = setInterval(() => {
    const d = new Date();
    let hours = d.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    if (hours === 0) hours = 12;
        const mins = String(d.getMinutes()).padStart(2, '0');
        const secs = String(d.getSeconds()).padStart(2, '0');
        setTime(`${String(hours).padStart(2, '0')}:${mins} ${ampm}`);
    }, 1000);
    return () => clearInterval(t);
}, []);


    return (
        <header className="header bg-transparent">
            <div className="container flex justify-between items-center py-3">
                <div className="flex items-center gap-4">
                    <div className="text-lg font-bold">dev.Maanus</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="clock flex items-center gap-2 rounded-full border border-gray-700 px-3 py-1 text-xsm font-normal">
                        <div className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#914bf1] opacity-75"></span><span className="relative inline-flex h-2 w-2 rounded-full bg-[#914bf1]"></span></div>
                        {time}
                    </div>
                    <button aria-label="toggle theme" onClick={() => toggleCurrentTheme()} className="p-2 rounded-full hover:bg-gray-800" title="Toggle theme">
                        {currentTheme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
                    </button>
                    <div className="flex items-center gap-3">
                        <IconContext.Provider value={{ size: '1.25rem' }}>
                            <a href="#" className='p-2 rounded-full hover:bg-gray-800' aria-label="github"><FiGithub /></a>
                            <a href="#" className='p-2 rounded-full hover:bg-gray-800' aria-label="linkedin"><FiLinkedin /></a>
                            {/* <a href="#" className='p-2 rounded-full hover:bg-gray-800' aria-label="x"><FaXTwitter /></a> */}
                            {/* <a href="#" className='p-2 rounded-full hover:bg-gray-800' aria-label="instagram"><FiInstagram /></a> */}
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </header>
    );
};