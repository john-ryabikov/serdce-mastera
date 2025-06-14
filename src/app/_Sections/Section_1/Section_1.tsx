import { sizes } from "@/app/_Constants/Sizes";

import Container from "@/app/_UI/Container/Container";
import ButtonPopup from "@/app/_UI/ButtonPopup/ButtonPopup";

import "./Section_1.scss"

interface Props {
  typedClass: string
}

export default function Section_1({ typedClass }: Props) {
  return (
    <section className={typedClass} id="main">
      <Container typedClass={`${typedClass}__fon wrapper_large`}>
        <Container typedClass={`${typedClass}__cont wrapper`}>
          <h1 className={`${typedClass}__title-h1`}>ВИБРОСТОЛЫ КАРЕЛИЯ</h1>
          <p className={`${typedClass}__main-price`}>от 19 990 руб.</p>
          <p className={`${typedClass}__title-p`}>Производство плитки, брусчатки и облицовочного камня своими руками. Осмотр и проверка <b>до оплаты!</b></p>
          <div className={`${typedClass}__main-cont`}>
            <div className={`${typedClass}__sizes`}>
              {sizes.map((size) => (
                <div className={`${typedClass}__size`} key={size.id}>
                  <div className={`${typedClass}__size-icon`}>
                    <img src={size.icon} alt={size.cap}/>
                  </div>
                  <p className={`${typedClass}__size-text`}>
                    <span className={`${typedClass}__size-text-1`}>{size.cap}</span>
                    <span className={`${typedClass}__size-text-2`}>{size.text}</span>
                  </p>
                </div>
              ))}
            </div>
            <img className={`${typedClass}__main-photo`} src="/img/Section-1/tables_1.png" alt="Вибростолы"/>
          </div>
          <div className={`${typedClass}__btns`}>
            <ButtonPopup typedClass="button-popup" icon="/img/Icons/send_icon.svg" cont="Отправить заявку"/>
            <a className={`${typedClass}__btn-link`} href="#gallery">
              <img src="/img/Icons/arrow_icon.svg" alt="->"/>
              <span>Подробнее о станках</span>
            </a>
          </div>
        </Container>
      </Container>
    </section>
  )
}
