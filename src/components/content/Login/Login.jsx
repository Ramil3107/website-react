import React from "react";              
import styles from "./Login.module.css"



function Login(props) {
    return (
        <div className={styles.wrapper}>
            
            <center>
            <form className={styles.form}>
            <div className={styles.container}>
                <h1> Please Login </h1>
                <br/>
                <label>Username : </label>
                <input type={"text"} placeholder="Enter Username" name="username" required />
                <label>Password : </label>
                <input type="password" placeholder="Enter Password" name="password" required />
                <button
                 className={styles.btn} type="submit"> Login
                </button>
            </div>
        </form>
        </center>

        </div>

    )
}

export default Login