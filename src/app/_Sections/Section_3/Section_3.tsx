import { products } from "@/app/_Constants/Products";

import Container from "@/app/_UI/Container/Container";
import ButtonPopup from "@/app/_UI/ButtonPopup/ButtonPopup";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";

import "./Section_3.scss"

interface Props {
  typedClass: string
}

export default function Section_3({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass}>
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <h3 className={`${typedClass}__h3`}>Что можно производить на вибростоле?</h3>
        <div className={`${typedClass}__products`}>
          <div className={`${typedClass}__products-wrapper`}>
            {products.map((product) => (
              <div className={`${typedClass}__product`} key={product.id}>
                <img className={`${typedClass}__product-icon`} src={product.photo} alt={product.name}/>
                <p className={`${typedClass}__product-text`}>
                  <span>{product.name}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <ButtonPopup typedClass="button-popup" icon="/img/Icons/send_icon.svg" cont="Получить консультацию"/>
      </Container>
    </AnimatedSection>
  )
}