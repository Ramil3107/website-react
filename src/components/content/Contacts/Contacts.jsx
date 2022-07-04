import React from "react";
import styles from "./Contacts.module.css"

function Contacts(props) {
    return (
        <div className={styles.wrapper}>

            <p>Украинский ном.тел.: <a href="tel:+380631891472">+380631891472</a> </p>
            <hr />
            <br />
            <p>Турецкий ном.тел.: <a href="tel:+90(501)3692884">+90(501)3692884</a> </p>
            <hr />
            <br />
            <p>Email: <a href="mailto:abbasov.ram3107@gmail.com">abbasov.ram3107@gmail.com</a> </p>
            <hr />
            <br />
            <p>Instagram: <a href="https://www.instagram.com/blinchik_s_povidlom">@blinchik_s_povidlom</a> </p>
            <hr />
            <br />
            <p>Facebook: <a href="https://www.facebook.com/ramil.abbasov.56232">Ramil Abbasov</a> </p>
            <hr></hr>
            
        </div>
    )
}

export default Contacts;