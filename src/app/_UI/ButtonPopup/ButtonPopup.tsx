"use client"

import { usePopups } from "@/app/_Store/store"

import "./ButtonPopup.scss"

interface Props {
  typedClass: string,
  icon?: string,
  cont?: string,
  tabels?: boolean,
  price?: string
}

export default function ButtonPopup({ typedClass, icon, cont, tabels, price}: Props) {

    const { openPopup } = usePopups()

    return (
        <>
            {tabels ? (
                <button className={`${typedClass}_tabels`} onClick={openPopup}>
                  <span>Купить за</span>
                  <b>{price}</b>
                </button>
            ) : (
                <button className={`${typedClass}`} onClick={openPopup}>
                    <img className={`${typedClass}__btn-icon`} src={icon} alt="Иконка" />
                    <span className={`${typedClass}__btn-cont`}>{cont}</span>
                </button>
            )}
        </>
    )
}
