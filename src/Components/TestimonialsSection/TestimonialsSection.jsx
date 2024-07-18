import React, { useEffect, useRef } from 'react';
import { FaStar, FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import styles from './TestimonialsSection.module.css';
const testimonialsData = [
  {
    image: 'https://ravi22110219.github.io/BidsukTechnoCreation/Ravi%20Kumawat.jpg',
    name: 'Ravi Kumawat',
    description: 'IIT Gandhinagar (AIR-1400)',
    text: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."',
    rating: 5,
  },
  {
    image: 'https://ravi22110219.github.io/BidsukTechnoCreation/sanjeev.jpg',
    name: 'Sanjeev Kumawat',
    description: 'IIT Madras (AIR-1st)',
    text: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."',
    rating: 5,
  },
  {
    image: 'https://ravi22110219.github.io/BidsukTechnoCreation/subhash.jpg',
    name: 'Subhash Kumawat',
    description: 'NIT Patna  (AIR-5000)',
    text: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."',
    rating: 5,
  },
  {
    image: 'https://ravi22110219.github.io/BidsukTechnoCreation/honey.jpg',
    name: 'Hansraj Swami',
    description: 'IIT Mandi (AIR-900)',
    text: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const carouselRef = useRef(null);
  let autoPlayTimeout = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const handleNext = () => {
      if (carousel) {
        carousel.scrollLeft += carousel.offsetWidth;
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
          carousel.scrollLeft = 0;
        }
      }
    };

    autoPlayTimeout.current = setInterval(handleNext, 6000);
    return () => clearInterval(autoPlayTimeout.current);
  }, []);

  return (
    <section className="w-full px-[4%] py-4" id="testimonials">
    <header className={styles.sectionHeader}>
        <h3>Testimonials</h3>
        <h1>What Our Clients Say About Us</h1>
      </header>
      <div className="relative">
        <button className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 text-2xl bg-transparent border-none cursor-pointer" onClick={() => (carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth)}>
          <FaArrowLeft />
        </button>
        <div className="flex overflow-x-auto scroll-smooth space-x-6 p-4" ref={carouselRef}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-80 md:w-1/3 bg-gray-100 rounded-lg p-4">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="block text-lg font-semibold">{testimonial.name}</span>
                  <span className="block text-sm text-gray-600">{testimonial.description}</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">{testimonial.text}</p>
              <div className="text-center mb-2">
                <FaQuoteLeft className="text-xl text-gray-500" />
              </div>
              <div className="flex justify-center space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 text-2xl bg-transparent border-none cursor-pointer" onClick={() => (carouselRef.current.scrollLeft += carouselRef.current.offsetWidth)}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
