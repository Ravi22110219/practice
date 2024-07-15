import React, { useEffect, useRef, useState } from "react";
import styles from "./AppSection.module.css";
import googlePlayIcon from "../../assets/photoes/google-play-icon.png";
import appleStoreIcon from "../../assets/photoes/apple store.png";
import sliderImg1 from "../../assets/photoes/slider-img1.png";
import sliderImg2 from "../../assets/photoes/slider-img2.png";
import sliderImg3 from "../../assets/photoes/slider-img3.png";

const AppSection = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = 5;

  const images = [sliderImg1, sliderImg2, sliderImg3, sliderImg1, sliderImg2];

  useEffect(() => {
    const slider = sliderRef.current;

    const updateSlider = () => {
      slider.style.transition = "transform 1s ease";
      slider.style.transform = `translateX(-${(activeIndex + 1) * 100}%)`;

      if (activeIndex === totalItems) {
        setTimeout(() => {
          slider.style.transition = "none";
          slider.style.transform = "translateX(-100%)";
          setActiveIndex(0);
        }, 1000);
      }

      if (activeIndex === -1) {
        setTimeout(() => {
          slider.style.transition = "none";
          slider.style.transform = `translateX(-${totalItems * 100}%)`;
          setActiveIndex(totalItems - 1);
        }, 1000);
      }
    };

    updateSlider();

    const autoPlayInterval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 3000);

    return () => clearInterval(autoPlayInterval);
  }, [activeIndex]);

  const goToNext = () =>
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
  const goToPrev = () =>
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);

  const handleDotClick = (index) => setActiveIndex(index);

  return (
    <section className={styles.mobileAppSection}>
      <div className={styles.appColms}>
        <div className={styles.appColmLeft}>
          <div className={styles.appCont}>
            <h2>
              Admission Information through <span>Infinite EduVerse</span> App
            </h2>
            <p>
              INFINITE EduVerse Info and admission app is here to provide all
              the admission info and solve related queries.
            </p>
            <div className={styles.btnOuter}>
              <a
                href="https://play.google.com/store/apps/details?id=in.allen.alleninfo&amp;hl=en"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  gtag("event", "Click", {
                    event_category: "APPS",
                    event_label: "Google Play",
                  })
                }
              >
                <img src={googlePlayIcon} alt="Google Play Store"  className={styles.googlePlay} />
              </a>
              <a
                
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  gtag("event", "Click", {
                    event_category: "APPS",
                    event_label: "Apple Store",
                  })
                }
              >
                <img src={appleStoreIcon} alt="Apple App Store" className={styles.appleStore}  />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.appColmRight}>
         
          <div className={styles.appSlider}>
            <div
              className={styles.last}
              ref={sliderRef}
              style={{ transform: "translateX(-100%)" }}
            >
              <img src={images[totalItems - 1]} alt="Last" />
              {images.map((image, index) => (
                <img key={index} src={image} alt={`Slide ${index + 1}`} />
              ))}
              <img src={images[0]} alt="First" />
            </div>
           
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
