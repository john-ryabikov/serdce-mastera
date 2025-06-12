import { reviews } from "@/app/_Constants/Reviews";

import Container from "@/app/_UI/Container/Container";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";

import "./Section_7.scss"

interface Props {
  typedClass: string
}

export default function Section_7({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass} id="reviews">
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <h5 className={`${typedClass}__h5`}>Присоединяйтесь к тем, кто уже оценил!</h5>
        <div className={`${typedClass}__reviews`}>
          {/* <div className={`${typedClass}__video-reviews`}></div> */}
          <div className={`${typedClass}__reviews-wrapper`}>
            {reviews.map((review) => <img key={review.id} src={review.src} alt={review.id}/>)}
          </div>
        </div>
      </Container>
    </AnimatedSection>
  )
}