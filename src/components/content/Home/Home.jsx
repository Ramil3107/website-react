import React from "react";
import styles from "./Home.module.css"
import Text from "./Text/Text";


function Home(props) {
    return (
        <div className={styles.wrapper}>
            <Text />
        </div>
    )
}


export default Home;