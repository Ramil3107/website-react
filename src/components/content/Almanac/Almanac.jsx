import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Almanac.module.css"

function Almanac(props) {
    return (
        <div className={styles.wrapper}>

            <div className={styles.item} >
                <NavLink to="/almanac-html">HTML</NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to="/almanac-css">CSS</NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to="/almanac-js">JavaScript</NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to="/almanac-react">React</NavLink>
            </div>

        </div>
    )
}

export default Almanac;