import { create } from "zustand";
import type{ IAlerts, IMenu, IPopup } from "./store.types";

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

export const useAlerts = create<IAlerts>(set => ({
    showAlertDone: false,
    showAlertError: false,
    toggleAlertDone: () => {
        set((state) => ({showAlertDone: !state.showAlertDone}))
        setTimeout(() => {
            set((state) => ({showAlertDone: !state.showAlertDone}))
        }, 2500)
    },
    toggleAlertError: () => {
        set((state) => ({showAlertError: !state.showAlertError}))
        setTimeout(() => {
            set((state) => ({showAlertError: !state.showAlertError}))
        }, 2500)
    }
}))