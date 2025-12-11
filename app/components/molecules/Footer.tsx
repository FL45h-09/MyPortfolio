import React from 'react';
import { ProfileData as data } from '@/config/content';


export const Footer: React.FC = () => (
    <footer className="footer">
        <div className="container py-4.5">
            <p className='text-base text-center'>&copy; {new Date().getFullYear()} — Built with ❤️ by {data.fname} using Next.js + TypeScript + Tailwind.</p>
        </div>
    </footer>
);