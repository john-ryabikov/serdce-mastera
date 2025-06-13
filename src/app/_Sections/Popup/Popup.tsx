import AnimatedDiv from "@/app/_UI/AnimatedTags/AimatedDiv"
import FormSend from "../../_UI/FormSend/FormSend"
import Container from "@/app/_UI/Container/Container"

import "./Popup.scss"

export default function Popup() {
    return (
        <div className="popup">
            <Container typedClass="popup__cont wrapper">
                <AnimatedDiv typedClass="popup">
                    <FormSend typedClass="form-send" isPopup={true}/>
                </AnimatedDiv>
            </Container>
        </div>
    )
}