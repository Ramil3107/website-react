import React from "react";
import styles from "./Home.module.css"
import Sphere from "./Sphere/Sphere";
import Text from "./Text/Text";


function Home(props) {
    return (
        <div className={styles.wrapper}>
            <Sphere />
            <Text />
        </div>
    )
}


export default Home;