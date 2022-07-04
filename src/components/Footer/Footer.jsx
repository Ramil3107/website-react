import React from "react";
import styles from "./Footer.module.css"

function Footer (props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
               Ramil Abbasov | Copyright 2022
            </div>
        </div>
    )
}

export default Footer;