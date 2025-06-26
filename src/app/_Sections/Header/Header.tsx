import { navbar } from "@/app/_Constants/Navigation";

import Container from "@/app/_UI/Container/Container";
import ButtonPopup from "@/app/_UI/ButtonPopup/ButtonPopup";
import MenuButton from "./MenuButton";

import "./Header.scss"

interface Props {
  typedClass: string
}

export default function Header({ typedClass }: Props) {
  return (
    <header className={typedClass}>
      <Container typedClass={`${typedClass}__cont wrapper_large`}>
        <div className={`${typedClass}__nav`}>
          <a className={`${typedClass}__nav-logo`} href="#main">
            <img src="/img/Icons/logo.svg" alt="Сердце Мастера" />
          </a>
          <nav className={`${typedClass}__nav-links`}>
            {navbar.map((link) => (
              <a className={`${typedClass}__nav-link`} key={link.id} href={link.href}>{link.title}</a>
            ))}
          </nav>
        </div>
        <div className={`${typedClass}__phone`}>
          <p className={`${typedClass}__phone-text`}>
            <span className={`${typedClass}__phone-text-cap`}>Звонок по России бесплатный</span>
            <span className={`${typedClass}__phone-text-num`}>+7 (925) 369-90-91</span>
          </p>
          <ButtonPopup typedClass="button-popup" icon="/img/Icons/call_icon.svg" cont="Заказать звонок"/>
        </div>
        <MenuButton typedClass={`${typedClass}__menu-btn`}/>
      </Container>
    </header>
  )
}