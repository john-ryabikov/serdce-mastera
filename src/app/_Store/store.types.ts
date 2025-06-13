export interface IPopup {
    showPopup: boolean,
    openPopup: () => void,
    closePopup: () => void
}

export interface IMenu {
    showMenu: boolean,
    openMenu: () => void,
    closeMenu: () => void
}

export interface IAlerts {
    showAlertDone: boolean,
    showAlertError: boolean,
    toggleAlertDone: () => void,
    toggleAlertError: () => void
}