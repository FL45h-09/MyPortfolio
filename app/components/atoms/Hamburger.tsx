'use clinet';
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useMenuStore } from '@/store/useMenuStore';

export const Hamburger = () => {
  const openMenu = useMenuStore((s) => s.openMenu);
  return (
    <button className="lg:hidden group p-2 rounded-full bg-(--btn-bg) hover:bg-(--primary-color) cursor-pointer" aria-label="Open menu" onClick={openMenu}>
        <Bars3Icon className="w-7 h-7" />
    </button>
  )
}
