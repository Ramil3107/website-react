import React, { useState } from "react";
import styles from "./HtmlAlmanac.module.css"


const data = [{
    question: "Что такое HTML?",
    answer: "HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора."
},
{
    question: "Что такое HTML?",
    answer: "HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора."
},
{
    question: "Что такое HTML?",
    answer: "HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора."
}
]






function HtmlAlmanac(props) {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (

        <div className={styles.wrapper}>

            <div className={styles.accordion}>
                {data.map((item, i) => (
                    <div className={selected === i ? [styles.item_show] : [styles.item]}>
                        <div className={styles.title} onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{selected === i ? "-" : "+"}</span>
                        </div>
                        <div className={selected === i ? [styles.content_show] : [styles.content]}>
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default HtmlAlmanac;