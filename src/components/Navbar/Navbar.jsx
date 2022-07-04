import React from "react";
import { NavLink, Router } from "react-router-dom";
import styles from "./Navbar.module.css"


function Navbar(props) {
    return (
        <div className={styles.wrapper}>

            <div className={styles.item}>
                <NavLink to="/website-react" className={({ isActive }) => (isActive ? [styles.active] : [])}>Home</NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to="/almanac" className={({ isActive }) => (isActive ? [styles.active] : [])}>Almanac</NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to="/todo" className={({ isActive }) => (isActive ? [styles.active] : [])}>To Do List</NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to="/contacts" className={({ isActive }) => (isActive ? [styles.active] : [])}>Contacts</NavLink>
            </div>

            <div className={styles.login}>
                <NavLink to="/login" className={({ isActive }) => (isActive ? [styles.active] : [])}>Login</NavLink>
            </div>

        </div>
    )
}

export default Navbar;