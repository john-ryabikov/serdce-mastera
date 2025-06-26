"use client"

import { useForm } from 'react-hook-form';
import { useAlerts, usePopups } from "@/app/_Store/store"

import axios from 'axios'

import "./FormSend.scss"

const TOKEN = "7596491276:AAF8GV4jU3zZRzmvGfNCQqHg9yoQtvzbnnk";
const CHAT_ID = "-1002876020412";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

type FormData = {
    name: string,
    phone: string,
}

interface Props {
  typedClass: string,
  isPopup: boolean
}

export default function FormSend({ typedClass, isPopup}: Props) {

    const { closePopup } = usePopups()
    const { toggleAlertError, toggleAlertDone, toggleAlertErrorPhone } = useAlerts()

    const {register, handleSubmit, reset} = useForm<FormData>()

    const sendForm = (data: FormData) => {
        if (data.name === "" || data.phone === ""){
            toggleAlertError()
            return
        }
        if (!/^(\+79)[0-9]{9}$/.test(data.phone)){
            toggleAlertErrorPhone()
            return
        }
        questionSubmit(data)
        toggleAlertDone()
    }
    
    const questionSubmit = (data: FormData) => {
        const message_tg = [
            `<b>Заявка для созвона</b>\n`,
            `<b>Имя:</b> ${data.name}\n`,
            `<b>Номер:</b> ${data.phone}\n`
        ]
        sendMessage(message_tg)
        reset()
    }

    const sendMessage = (message_tg: string[]) => {
        let message = ""
        for (let text_tg of message_tg) {
          message += text_tg
        }  
        axios.post(URI_API, {
          chat_id: CHAT_ID,
          parse_mode: "html",
          text: message
        }).catch ((err) => alert(err))
        // console.log(message)
    }

    return (
        <>
            <form className={typedClass} onSubmit={handleSubmit(sendForm)}>
                {isPopup && ( 
                    <p className={`${typedClass}__close-btn`} onClick={closePopup}>
                        <img src="/img/Icons/close_icon.svg" alt="Закрыть" />        
                    </p>
                )}
                {isPopup && (<p className={`${typedClass}__cap`}>Отправьте заявку</p>)}
                <label className={`${typedClass}__label`}>
                    <span className={`${typedClass}__input-title`}>Ваше имя</span>
                    <input
                        className={`${typedClass}__input`} 
                        type="text"
                        placeholder="Как Вас зовут?"  
                        {...register('name')}  
                    />
                </label>
                <label className={`${typedClass}__label`}>
                    <span className={`${typedClass}__input-title`}>Телефон</span>
                    <input 
                        className={`${typedClass}__input`} 
                        type="tel"
                        placeholder="+79123456789"  
                        {...register('phone')}  
                    />
                    <span className={`${typedClass}__input-hint`}>(Используйте формат, указаный в поле ввода)</span>
                </label>
                {isPopup && ( 
                    <p className={`${typedClass}__under-text`}>
                        Мы свяжемся с Вами в течение 15 минут и уточним детали доставки.      
                    </p>
                )}
                <button className={`${typedClass}__button`} type="submit">
                    <img src="img/Icons/send_icon.svg" alt="Отправить" />
                    <span>Отправить заявку</span>
                </button>
                <p className={`${typedClass}__rules`}>
                    *Оставляя заявку, Вы соглашаетесь с условиями <a href="https://сердце-мастера.рф/include/licenses_detail.php" target="_blank" rel="nofollow">обработки персональных данных </a>      
                </p>
            </form>
        </>
    )
}
