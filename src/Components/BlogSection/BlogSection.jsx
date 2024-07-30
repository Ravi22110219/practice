import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogSection.module.css';
import { FaCalendar, FaUser } from 'react-icons/fa';
import Neet_Scam from '../../assets/photoes/Neet_Scam.png'
import Infinite_Eduverse from '../../assets/photoes/blog.jpg'
import Roorkee from '../../assets/photoes/Roorkee.jpg'

const BlogSection = () => {
  useEffect(() => {
    const wrapper = document.querySelector(`.${styles.wrapper}`);
    const carousel = document.querySelector(`.${styles.carousel}`);
    const firstCardWidth = carousel.querySelector(`.${styles.card}`).offsetWidth;
    const arrowBtns = document.querySelectorAll(`.${styles.wrapper} i`);
    const carouselChildren = [...carousel.children];

    let isDragging = false,
      isAutoPlay = true,
      startX,
      startScrollLeft,
      timeoutId;

    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    carouselChildren.slice(-cardPerView).reverse().forEach((card) => {
      carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
    });

    carouselChildren.slice(0, cardPerView).forEach((card) => {
      carousel.insertAdjacentHTML('beforeend', card.outerHTML);
    });

    carousel.classList.add(styles.noTransition);
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove(styles.noTransition);

    arrowBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.id === 'left') {
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
    };

    const dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove(styles.dragging);
    };

    const infiniteScroll = () => {
      if (carousel.scrollLeft === 0) {
        carousel.classList.add(styles.noTransition);
        carousel.scrollLeft = carousel.scrollWidth - 4 * carousel.offsetWidth;
        carousel.classList.remove(styles.noTransition);
      } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add(styles.noTransition);
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove(styles.noTransition);
      }
      clearTimeout(timeoutId);
      if (!wrapper.matches(':hover')) autoPlay();
    };

    const autoPlay = () => {
      if (window.innerWidth < 40 || !isAutoPlay) return;
      timeoutId = setTimeout(() => {
        carousel.scrollLeft += firstCardWidth;
        infiniteScroll();
      }, 3000);
    };
    autoPlay();

    carousel.addEventListener('mousedown', dragStart);
    carousel.addEventListener('mousemove', dragging);
    carousel.addEventListener('mouseup', dragStop);
    carousel.addEventListener('mouseleave', dragStop);
    carousel.addEventListener('scroll', infiniteScroll);

    wrapper.addEventListener('mouseover', () => clearTimeout(timeoutId));
    wrapper.addEventListener('mouseout', autoPlay);

    return () => {
      carousel.removeEventListener('mousedown', dragStart);
      carousel.removeEventListener('mousemove', dragging);
      carousel.removeEventListener('mouseup', dragStop);
      carousel.removeEventListener('mouseleave', dragStop);
      carousel.removeEventListener('scroll', infiniteScroll);
      wrapper.removeEventListener('mouseover', () => clearTimeout(timeoutId));
      wrapper.removeEventListener('mouseout', autoPlay);
    };
  }, []);

  const blogs = [
    {
      id: 1,
      imgSrc: Roorkee,
      title: 'Inspiring Success: The Journey to IIT Roorkee',
      description: 'The journey to IIT Roorkee begins with the dream of countless JEE aspirants across India...',
      date: "28th july",
      author:"Lakhveer Singh",
    },
    {
      id: 2,
      imgSrc: Neet_Scam,
      title: 'The NEET Scam 2024: Uncovering the Truth Behind the Controversy',
      description: 'The year 2024 has added a dire chapter to the annals of Indian education: the NEET Scam...',
      date: "20th june",
      author:"Bidsuk CEO",
    },
    { 
      id: 3,
      imgSrc: Infinite_Eduverse,
      title: 'Why Infinite EduVerse is the Best Choice for NEET and JEE Preparation',
      description: 'Infinite EduVerse stands out as a premier institute for NEET and JEE preparation...',
      date: '29st May, 2022',
      author: 'Naushad Khan',
    }
    // Add more blog objects as needed
  ];

  return (
    <section className={styles.blog} id="blog">
      <header className={styles.sectionHeader}>
        <h3>Daily Blogs</h3>
        <h1>Online animation lessons at your pace</h1>
      </header>
      <div className={styles.teamBox}>
        <div className={styles.wrapper}>
          <i id="left" className="fa-solid fa-angle-left" style={{ visibility: 'hidden' }}></i>
          <ul className={styles.carousel}>
            {blogs.map((blog) => (
              <li key={blog.id} className={styles.card}>
                <Link to={`/blog/${blog.id}`} className={styles.blogLink}>
                  <div className={styles.blogImg}>
                    <img src={blog.imgSrc} alt="img" draggable="false" />
                  </div>
                  <h4>{blog.title}</h4>
                  <p>{blog.description}</p>
                  <div className={styles.icons}>
                                <div className='flex align-middle px-3'>
                                    <FaCalendar className='mr-2' color='crimson' /> <span className='text-black'>{blog.date} </span>
                                </div>
                                <div className='flex align-middle px-3'>
                                    <FaUser className='mr-2' color='crimson' /> <span className='text-black'>{blog.author} </span>
                                </div>
                            </div>
                </Link>
              </li>
            ))}
          </ul>
          <i id="right" className="fa-solid fa-angle-right" style={{ visibility: 'hidden' }}></i>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
