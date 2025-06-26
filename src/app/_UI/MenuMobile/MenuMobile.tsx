import { useMenu } from "@/app/_Store/store"
import { navbar } from "@/app/_Constants/Navigation"

import ButtonPopup from "../ButtonPopup/ButtonPopup"

import "./MenuMobile.scss"

interface Props {
  typedClass: string
}

export default function MenuMobile({ typedClass }: Props) {

    const { showMenu, closeMenu } = useMenu()

    return (
        <div className={showMenu ? `${typedClass} ${typedClass}_active` : typedClass}>
            <button className={`${typedClass}__close-btn`} onClick={closeMenu}>
                <img src="/img/Icons/close_icon.svg" alt="" />
            </button>
            <nav className={`${typedClass}__nav-links`}>
                {navbar.map((link) => (
                    <a className={`${typedClass}__nav-link`} key={link.id} href={link.href} onClick={closeMenu}>{link.title}</a>
                ))}
            </nav>
            <div className={`${typedClass}__phone`}>
                <p className={`${typedClass}__phone-text`}>
                <span className={`${typedClass}__phone-text-cap`}>Звонок по России бесплатный</span>
                <span className={`${typedClass}__phone-text-num`}>+7 (925) 369-90-91</span>
                </p>
                <ButtonPopup typedClass="button-popup" icon="/img/Icons/call_icon.svg" cont="Заказать звонок"/>
            </div>
        </div>
    )
}