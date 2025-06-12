import { create } from "zustand";
import type{ IMenu, IPopup } from "./store.types";

export const usePopups = create<IPopup>(set => ({
    showPopup: false,
    openPopup: () => set(() => ({showPopup: true})),
    closePopup: () => set(() => ({showPopup: false}))
}))

export const useMenu = create<IMenu>(set => ({
    showMenu: false,
    openMenu: () => set(() => ({showMenu: true})),
    closeMenu: () => set(() => ({showMenu: false}))
}))