'use client';
import React from 'react';
import Link from 'next/link';
import { navLinks as items } from '@/config/NavLinks';
import { usePathname } from 'next/navigation';

export const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar h-full bg-transparent hidden lg:inline-block">
      <nav className="mt-6 space-y-1">
        {items.map((it) => {
          const isActive = pathname === it.href;

          return (
            <Link
              key={it.href}
              href={it.href}
              className={`flex items-center gap-2 text-sm px-2 py-3 rounded-md hover:bg-(--btn-bg) transition border border-transparent ${
                isActive 
                  ? 'bg-(--btn-bg) hover:border-(--primar-color)' // active styles
                  : ''
              }`}
            >
              <it.icon />
              <span>{it.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
