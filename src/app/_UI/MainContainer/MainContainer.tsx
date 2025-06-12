"use client"

import { usePopups } from "@/app/_Store/store"

import Popup from "@/app/_Sections/Popup/Popup"
import AnimatedMain from "../AnimatedTags/AnimatedMain"
import MenuMobile from "../MenuMobile/MenuMobile"

export default function MainContainer({ children }: Readonly<{children: React.ReactNode}>){

    const { showPopup } = usePopups()

    return (
        <AnimatedMain typedClass="main-page">
            <MenuMobile typedClass="menu-mobile"/>
            {showPopup && <Popup/>}
            {children}
        </AnimatedMain>
    )
}
