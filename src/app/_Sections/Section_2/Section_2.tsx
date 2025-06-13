import { main_prems } from "@/app/_Constants/MainPrems";
import { prems } from "@/app/_Constants/Prems";

import Container from "@/app/_UI/Container/Container";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";
import AnimatedDiv from "@/app/_UI/AnimatedTags/AimatedDiv";

import "./Section_2.scss"

interface Props {
  typedClass: string
}

export default function Section_2({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass} id="prems">
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <div className={`${typedClass}__prems`}>
          {prems.map((prem) => (
            <div className={`${typedClass}__prem`} key={prem.id}>
              <img className={`${typedClass}__prem-icon`} src={prem.icon} alt={prem.cap}/>
              <p className={`${typedClass}__prem-text`}>
                <span className={`${typedClass}__prem-text-1`}>{prem.cap}</span>
                <span className={`${typedClass}__prem-text-2`}>{prem.text}</span>
              </p>
            </div>
          ))}
        </div>
        <AnimatedDiv typedClass={typedClass}>
          <h2 className={`${typedClass}__h2`}>Ваша прибыль начинается с этих преимуществ</h2>
          <div className={`${typedClass}__main-prems`}>
            {main_prems.slice(0, 2).map((prem) => (
              <div className={`${typedClass}__main-prem`} key={prem.id}>
                <img className={`${typedClass}__main-prem-fon`} src="/img/Icons/prem_fon.svg" alt="Fon" />
                <img className={`${typedClass}__main-prem-icon`} src={prem.icon} alt={prem.cap}/>
                <p className={`${typedClass}__main-prem-text`}>
                  <span className={`${typedClass}__main-prem-text-1`}>{prem.cap}</span>
                  <span className={`${typedClass}__main-prem-text-2`}>{prem.text}</span>
                </p>
              </div>
            ))}
          </div>
          <div className={`${typedClass}__main-prems`}>
            {main_prems.slice(2).map((prem) => (
              <div className={`${typedClass}__main-prem`} key={prem.id}>
                <img className={`${typedClass}__main-prem-fon`} src="/img/Icons/prem_fon.svg" alt="Fon" />
                <img className={`${typedClass}__main-prem-icon`} src={prem.icon} alt={prem.cap}/>
                <p className={`${typedClass}__main-prem-text`}>
                  <span className={`${typedClass}__main-prem-text-1`}>{prem.cap}</span>
                  <span className={`${typedClass}__main-prem-text-2`}>{prem.text}</span>
                </p>
              </div>
            ))}
          </div>
        </AnimatedDiv>
      </Container>
    </AnimatedSection>
  )
}