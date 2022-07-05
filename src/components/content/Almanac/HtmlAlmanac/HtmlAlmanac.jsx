import React, { useState } from "react";
import styles from "./HtmlAlmanac.module.css"





function HtmlAlmanac(props) {

    const [data,setData] = useState ([{
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
    ])
    
    const [question, setQstn] = useState('')
    const [answer, setAnswr] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const faqs = {question,answer}
        setData(data => data.concat(faqs))
        console.log(faqs)
    }

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }


    return (

        <div className={styles.wrapper}>

            <form onSubmit={handleSubmit}>
                <label>Question</label>
                <input type="text" required value={question} onChange={(e) => setQstn(e.target.value)}/>

                <label>Answer</label>
                <input type="text" required value={answer} onChange={(e) => setAnswr(e.target.value)}/>

                <button>Add FAQ</button>
            </form>

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