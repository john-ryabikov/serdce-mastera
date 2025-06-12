import { tables } from "@/app/_Constants/Tables";

import Container from "@/app/_UI/Container/Container";
import ButtonPopup from "@/app/_UI/ButtonPopup/ButtonPopup";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";

import "./Section_5.scss"

interface Props {
  typedClass: string
}

export default function Section_5({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass} id="tabels">
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <h4 className={`${typedClass}__h4`}>Вибростолы карелия для вашего производства</h4>
        <div className={`${typedClass}__tables`}>
          {tables.map((table) => (
            <div className={`${typedClass}__table`} key={table.id}>
              <img className={`${typedClass}__table-img`} src={table.src} alt={table.name} />
              <div className={`${typedClass}__table-desc`}>
                <p className={`${typedClass}__table-desc-cap`}>Вибростол</p>
                <p className={`${typedClass}__table-desc-name`}>{table.name}</p>
                <p className={`${typedClass}__table-desc-text`}>{table.text}</p>
                <div className={`${typedClass}__table-desc-info`}>
                  <p className={`${typedClass}__table-desc-info-row`}>
                    <b>Размер</b>
                    <span>{table.size}</span>
                  </p>
                  <p className={`${typedClass}__table-desc-info-row`}>
                    <b>Мощность</b>
                    <span>{table.power}</span>
                  </p>
                  <p className={`${typedClass}__table-desc-info-row`}>
                    <b>Нагрузка</b>
                    <span>{table.loading}</span>
                  </p>
                </div>
                <ButtonPopup typedClass="button-popup" tabels={true} price={table.price}/>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  )
}