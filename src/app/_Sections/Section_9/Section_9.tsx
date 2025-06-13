import Container from "@/app/_UI/Container/Container";
import FormSend from "../../_UI/FormSend/FormSend";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";

import "./Section_9.scss"

interface Props {
  typedClass: string
}

export default function Section_9({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass}>
      <Container typedClass={`${typedClass}__cont wrapper`}>
          <div className={`${typedClass}__text`}>
            <h6 className={`${typedClass}__h6`}>Хотите узнать больше?</h6>
            <p className={`${typedClass}__text-info`}>Укажите Ваши контактные данные, и наш менеджер свяжется с вами для уточнения деталей. Консультация бесплатна!</p>
            <p className={`${typedClass}__contacts`}>
              <span>Подробную информацию мы всегда готовы предоставить по телефону:</span><br/>
              <b>8 (800) 444-70-28</b>
            </p>
          </div>
          <FormSend typedClass="form-send" isPopup={false}/>
      </Container>
    </AnimatedSection>
  )
}