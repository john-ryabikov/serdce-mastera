import { useMenu } from "@/app/_Store/store"

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
        </div>
    )
}