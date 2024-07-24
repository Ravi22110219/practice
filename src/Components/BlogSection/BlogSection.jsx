import React, { useEffect } from 'react';
import styles from './BlogSection.module.css'; // Import the CSS module

const BlogSection = () => {
  

  useEffect(() => {
    const wrapper = document.querySelector(`.${styles.wrapper}`);
    const carousel = document.querySelector(`.${styles.carousel}`);
    const firstCardWidth = carousel.querySelector(`.${styles.card}`).offsetWidth;
    const arrowBtns = document.querySelectorAll(`.${styles.wrapper} i`);
    const carouselChildren = [...carousel.children];

    let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

    // Get the number of cards that can fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    // Insert copies of the last few cards to the beginning of the carousel for infinite scrolling
    carouselChildren.slice(-cardPerView).reverse().forEach(card => {
      carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    // Insert copies of the first few cards to the end of the carousel for infinite scrolling
    carouselChildren.slice(0, cardPerView).forEach(card => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    // Scroll the carousel to the correct position
    carousel.classList.add(styles.noTransition);
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove(styles.noTransition);

    // Add event listeners for the arrow buttons
    arrowBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.id === "left") {
          carousel.scrollLeft -= firstCardWidth;
        } else {
          carousel.scrollLeft += firstCardWidth;
        }
      });
    });

    const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add(styles.dragging);
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove(styles.dragging);
    }

    const infiniteScroll = () => {
      if (carousel.scrollLeft === 0) {
        carousel.classList.add(styles.noTransition);
        carousel.scrollLeft = carousel.scrollWidth - (4 * carousel.offsetWidth);
        carousel.classList.remove(styles.noTransition);
      } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add(styles.noTransition);
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove(styles.noTransition);
      }
      clearTimeout(timeoutId);
      if (!wrapper.matches(":hover")) autoPlay();
    }

    const autoPlay = () => {
      if (window.innerWidth < 40 || !isAutoPlay) return;
      timeoutId = setTimeout(() => {
        carousel.scrollLeft += firstCardWidth;
        infiniteScroll();
      }, 3000);
    }
    autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mouseup", dragStop);
    carousel.addEventListener("mouseleave", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);

    // Pause autoplay on mouse hover
    wrapper.addEventListener("mouseover", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseout", autoPlay);

    return () => {
      carousel.removeEventListener("mousedown", dragStart);
      carousel.removeEventListener("mousemove", dragging);
      carousel.removeEventListener("mouseup", dragStop);
      carousel.removeEventListener("mouseleave", dragStop);
      carousel.removeEventListener("scroll", infiniteScroll);
      wrapper.removeEventListener("mouseover", () => clearTimeout(timeoutId));
      wrapper.removeEventListener("mouseout", autoPlay);
    };
  }, []);

  return (
    <section className={styles.blog} id="blog">
      <header className={styles.sectionHeader}>
        <h3>Daily Blogs</h3>
        <h1>Online animation lessons at your pace</h1>
      </header>
      <div className={styles.teamBox}>
        <div className={styles.wrapper}>
          <i id="left" className="fa-solid fa-angle-left" style={{visibility:"hidden"}}></i>
          <ul className={styles.carousel}>
            <li className={styles.card}>
              <div className={styles.blogImg}>
                <img src="https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Seat-Will-Be-Cancelled-If-Partial-Admission-Fee-is-Not-Deposited-thegem-blog-timeline-large.jpg" alt="img" draggable="false" />
              </div>
              <h4>JEE Main 2024 – Results of Many Students Withheld</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum animi, quasi veritatis cum culp....</p>
            </li>
            <li className={styles.card}>
              <div className={styles.blogImg}>
                <img src="https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Cutoff-of-lower-branches-increased-in-top-IITs-thegem-blog-timeline-large.webp" alt="img" draggable="false" />
              </div>
              <h4>JEE Main 2024 – Results of Many Students Withheld</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum animi, quasi veritatis cum culp....</p>
           
            </li>
            {/* Add more cards as needed */}
          </ul>
          <i id="right" className="fa-solid fa-angle-right" style={{visibility:"hidden"}}></i>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
