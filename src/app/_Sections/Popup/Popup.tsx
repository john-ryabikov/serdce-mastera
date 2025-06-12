import AnimatedDiv from "@/app/_UI/AnimatedTags/AimatedDiv"
import FormSend from "../Section_9/FormSend/FormSend"

import "./Popup.scss"

export default function Popup() {
    return (
        <div className='popup'>
            <AnimatedDiv>
                <FormSend typedClass="form-send" isPopup={true}/>
            </AnimatedDiv>
        </div>
    )
}