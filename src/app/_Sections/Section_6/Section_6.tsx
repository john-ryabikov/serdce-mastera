import { extra_items } from "@/app/_Constants/ExtraItems";

import Container from "@/app/_UI/Container/Container";
import ButtonPopup from "@/app/_UI/ButtonPopup/ButtonPopup";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";

import "./Section_6.scss"

interface Props {
  typedClass: string
}

export default function Section_6({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass}>
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <h4 className={`${typedClass}__h4`}>Вибростолы карелия для вашего производства</h4>
        <div className={`${typedClass}__extra-items`}>
          <div className={`${typedClass}__extra-items-wrapper`}>
            <div className={`${typedClass}__extra-items-row`}>
              {extra_items.slice(0, 4).map((extra) => (
                <div className={`${typedClass}__extra-item`} key={extra.id}>
                  <div className={`${typedClass}__extra-item-img`}>
                    <img src={extra.src} alt={extra.id} />
                  </div>
                  <p className={`${typedClass}__extra-item-info`}>
                    {extra.name}
                    <strong>{extra.price}</strong>
                  </p>
                </div>
              ))}
            </div>
            <div className={`${typedClass}__extra-items-row`}>
              {extra_items.slice(4).map((extra) => (
                <div className={`${typedClass}__extra-item`} key={extra.id}>
                  <div className={`${typedClass}__extra-item-img`}>
                    <img src={extra.src} alt={extra.id} />
                  </div>
                  <p className={`${typedClass}__extra-item-info`}>
                    {extra.name}
                    <strong>{extra.price}</strong>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ButtonPopup typedClass="button-popup" icon="/img/Icons/send_icon.svg" cont="Заказать компонент"/>
      </Container>
    </AnimatedSection>
  )
}