import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css';

// Import your images
import image1 from '../../assets/photoes/slider.jpg';
import image2 from '../../assets/photoes/image-2.jpg';

const images = [image1, image2, image1, image2, image1];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Adjust time for the slide transition

        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className={styles.slider}>
            <div
                className={styles.list}
                style={{ transform: `translateX(${-currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className={styles.item}>
                        <img src={image} alt={`Slide ${index + 1}`} className={styles.image} />
                    </div>
                ))}
            </div>
            <div className={styles.buttons}>
                <button onClick={handlePrev} id="prev">
                    &lt;
                </button>
                <button onClick={handleNext} id="next">
                    &gt;
                </button>
            </div>
            {/* <ul className={styles.dots}>
                {images.map((_, index) => (
                    <li
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                    ></li>
                ))}
            </ul> */}
        </div>
    );
};

export default Slider;
