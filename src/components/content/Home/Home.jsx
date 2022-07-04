import React from "react";
import styles from "./Home.module.css"
import Text from "./Text/Text";
import Slideshow from "./Slideshow/Slideshow";

function Home(props) {
    return (
        <div className={styles.wrapper}>
            <Text />
            <Slideshow />
        </div>
    )
}

export default Home;