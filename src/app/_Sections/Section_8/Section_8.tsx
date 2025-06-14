import { spoilers } from "@/app/_Constants/Spoilers";

import Container from "@/app/_UI/Container/Container";
import Spoiler from "./Spoiler";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";

import "./Section_8.scss"

interface Props {
  typedClass: string
}

export default function Section_8({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass} id="faq">
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <h5 className={`${typedClass}__h5`}>Частые вопросы</h5>
        <div className={`${typedClass}__spoilers`}>
          {spoilers.map((spoiler, i) => (
            <Spoiler key={spoiler.id} typedClass={typedClass} spoiler={spoiler} number={i}/>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  )
}