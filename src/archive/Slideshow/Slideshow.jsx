import React from "react";
import styles from "./Slideshow.module.css"
import ImageSlider from "./ImageSlider/ImageSlider";


const slides = [
    { url: "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" },
    { url: "https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg" },
    { url: "https://thumbs.dreamstime.com/b/belle-for%C3%AAt-tropicale-%C3%A0-l-itin%C3%A9raire-am%C3%A9nag%C3%A9-pour-amateurs-de-la-nature-de-ka-d-ang-36703721.jpg" }
];


function Slideshow(props) {
    return (
        <div className={styles.wrapper}>

            <h1>SliderShow</h1>

            <div className={styles.container}>
                <ImageSlider slides={slides} />
            </div>

        </div>
    )
}

export default Slideshow;