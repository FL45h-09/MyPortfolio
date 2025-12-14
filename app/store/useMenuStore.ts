import { create } from 'zustand';

type MenuState = {
  open: boolean;
  toggle: () => void;
  close: () => void;
  openMenu: () => void;
};

export const useMenuStore = create<MenuState>((set) => ({
  open: false,
  toggle: () => set((s) => ({ open: !s.open })),
  close: () => set({ open: false }),
  openMenu: () => set({ open: true }),
}));
