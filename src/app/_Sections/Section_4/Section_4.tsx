import { gallery } from "@/app/_Constants/Gallery";

import Container from "@/app/_UI/Container/Container";
import ButtonPopup from "@/app/_UI/ButtonPopup/ButtonPopup";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";

import "./Section_4.scss"

interface Props {
  typedClass: string
}

export default function Section_4({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass} id="gallery">
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <h3 className={`${typedClass}__h3`}>Вибростолы в деталях</h3>
        {/* <div className={`${typedClass}__video`}></div> */}
        <p className={`${typedClass}__description`}>
          Вибростолы серии КАРЕЛИЯ позволяют производить в домашних условиях тротуарную плитку, брусчатку,
          бордюры, искуственный камень и другие изделия для отделки фасадов, фундаментов, укладки садовых
          дорожек, парковок и т.д. Размеры вибростолов 102*62 см. или 62*62 см. Оснащены российским отказоустойчивым двигателем 300 ватт, 3000 оборотов, работает от 220В (по желанию установим двигатель 380В за ту же цену). Столы сразу готовы к работе. Гарантия 12 мес.
        </p>
        <div className={`${typedClass}__gallery`}>
          <div className={`${typedClass}__gallery-wrapper`}>
            <div className={`${typedClass}__gallery-row`}>
              {gallery.slice(0, 4).map((photo) => <img className={`${typedClass}__gallery-photo`} key={photo.id} src={photo.photo} alt="Вибростол"/>)}
            </div>
            <div className={`${typedClass}__gallery-row`}>
              {gallery.slice(4).map((photo) => <img className={`${typedClass}__gallery-photo`} key={photo.id} src={photo.photo} alt="Вибростол"/>)}
            </div>
          </div>
        </div>
        <ButtonPopup typedClass="button-popup" icon="/img/Icons/send_icon.svg" cont="Получить консультацию"/>
      </Container>
    </AnimatedSection>
  )
}