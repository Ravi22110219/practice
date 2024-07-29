import React, { useEffect, useRef, useState } from "react";
import styles from "./NewsAndNotification.module.css";
import mainNav from '../../assets/photoes/mainNav.jpg'

const NewsAndNotification = () => {
  const sliderListRef = useRef(null);
  const sliderItemsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sliderItemsRef.current.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex - 1 < 0 ? sliderItemsRef.current.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const reloadSlider = () => {
      if (sliderListRef.current) {
        sliderListRef.current.style.left = -sliderItemsRef.current[activeIndex].offsetLeft + 'px';
      }

      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(nextSlide, 3000);
    };

    reloadSlider();
    window.addEventListener("resize", reloadSlider);

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener("resize", reloadSlider);
    };
  }, [activeIndex]);

  return (
    <section className={styles.newsnotification} id="newsnotification">
      <div className={styles.mainSliderAndNotification}>
        <div className={styles.mainSliderBox}>
          <div className={styles.mainSlider}>
            <div className={styles.mainSliderList} ref={sliderListRef}>
              <div className={styles.mainSliderItem} ref={(el) => sliderItemsRef.current[0] = el}>
                <img src={mainNav} alt="SliderImage" style={{ objectFit: "cover" }} />
              </div>
              <div className={styles.mainSliderItem} ref={(el) => sliderItemsRef.current[1] = el}>
                <img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/summer-workshop-vedic-maths-kota.png" alt="SliderImage" />
              </div>
              <div className={styles.mainSliderItem} ref={(el) => sliderItemsRef.current[2] = el}>
                <img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="SliderImage" />
              </div>
              <div className={styles.mainSliderItem} ref={(el) => sliderItemsRef.current[3] = el}>
                <img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/book-store-jee-main-topic-wise-papers.jpg"  alt="SliderImage" />
              </div>
              <div className={styles.mainSliderItem} ref={(el) => sliderItemsRef.current[4] = el}>
                <img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/summer-workshop-vedic-maths-kota.png"  alt="SliderImage" />
              </div>
            </div>
            <div className={styles.mainSliderButtons}>
              <button id={styles.previous} onClick={prevSlide}>&lt;</button>
              <button id={styles.nexts} onClick={nextSlide}>&gt;</button>
            </div>
          </div>
        </div>
        <div className={styles.notification}>
          <div className={styles.heading}>
            <div className={styles.headingText}>
              <h4>Notification</h4>
            </div>
            <div className={styles.headingBox2}></div>
            <div className={styles.headingBox3}></div>
          </div>
          <div className={styles.notificationContainer}>
            <marquee
              scrollamount="2"
              behavior=""
              direction="up"
              onMouseOver={(e) => e.target.stop()}
              onMouseOut={(e) => e.target.start()}
            >
              <li className={styles.newNotification}>
                <i
                  className="fa fa-caret-right"
                  style={{ color: "#084298", alignItems: "center" }}
                ></i>
                <div
                  className={styles.overflow}
                  style={{ height: "30px", borderBottom: "#0000ff" }}
                >
                  <a href="#home">
                    Lorem ipsum dolor sit amet consectetur at. Saepe ex..
                    <img
                      src="https://www.allen.ac.in/images/new_icon_blink.gif"
                      alt="Strategy by Ravi Sir"
                      style={{ width: "22px", height: "9px", float: "none" }}
                      className="mCS_img_loaded"
                    />
                  </a>
                </div>
              </li>
              <li className={styles.newNotification}>
                <i className="fa fa-caret-right"></i>
                <div className={styles.overflow}>
                  <a href="#home">
                    Lorem ipsum dolor sit amet consectetur at. Saepe ex..
                    <img
                      src="https://www.allen.ac.in/images/new_icon_blink.gif"
                      alt="Strategy by Ravi Sir"
                      style={{ width: "22px", height: "9px", float: "none" }}
                      className="mCS_img_loaded"
                    />
                  </a>
                </div>
              </li>
              <li className={styles.newNotification}>
                <i className="fa fa-caret-right"></i>
                <div className={styles.overflow}>
                  <a href="#home">
                    Lorem ipsum dolor sit amet consectetur at. Saepe ex..
                    <img
                      src="https://www.allen.ac.in/images/new_icon_blink.gif"
                      alt="Strategy by Ravi Sir"
                      style={{ width: "22px", height: "9px", float: "none" }}
                      className="mCS_img_loaded"
                    />
                  </a>
                </div>
              </li>
            </marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndNotification;
