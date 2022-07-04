import React, { useState } from "react";
import styles from "./ImageSlider.module.css"


const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const slideStyles = {
        backgroundImage: `url(${slides[currentIndex].url})`,
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex);
    }

    return (
        <div className={styles.wrapper}>

            <div className={styles.leftArrow} onClick={goToPrevious}>←</div>
            <div className={styles.rightArrow} onClick={goToNext}>→</div>

            <div style={slideStyles} className={styles.slideStyles}></div>

        </div>
    )
}

export default ImageSlider