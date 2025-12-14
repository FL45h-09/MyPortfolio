'use client';
import React from 'react';
import Link from 'next/link';
import { ProfileData as data } from '@/config/content';
import { usePathname } from 'next/navigation';
import { useMenuStore } from '@/store/useMenuStore';

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const {navLinks} = data;
  const { open, close } = useMenuStore();

  return (
    <>
      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={close}
        />
      )}

      <aside
        className={`
          sidebar bg-(--bg) border-r border-(--border)
          lg:relative lg:translate-x-0
          fixed top-0 left-0 h-full w-64 z-50
          transform transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <nav className="mt-6 space-y-1 p-4">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className={`flex items-center gap-2 text-sm px-2 py-3 rounded-md hover:bg-(--btn-bg) transition border border-transparent ${
                  isActive ? 'bg-(--btn-bg) border-(--primary-color)' : ''
                }`}
              >
                <item.icon />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};
