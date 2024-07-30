import React, { useEffect, useRef } from 'react';
import { FaStar, FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import styles from './TestimonialsSection.module.css';
const testimonialsData = [
  {
    image: 'https://ravi22110219.github.io/BidsukTechnoCreation/Ravi%20Kumawat.jpg',
    name: 'Ravi Kumawat',
    description: 'IIT Gandhinagar (AIR-1400)',
    text: '"Infinite Eduverse has played a pivotal role in my JEE preparation journey. The teachers here are incredibly supportive and knowledgeable. They break down complex concepts into easily understandable parts, making even the toughest topics seem manageable. Their constant motivation and personalized attention have boosted my confidence tremendously, helping me stay focused and dedicated throughout my preparation."',
    rating: 5,
  },
  {
    image: 'https://ravi22110219.github.io/BidsukTechnoCreation/sanjeev.jpg',
    name: 'Sanjeev Kumawat',
    description: 'IIT Madras (AIR-1st)',
    text: 'The faculty at Infinite Eduverse is nothing short of exceptional. For NEET preparation, the teachers ensure that every student grasps the fundamental concepts thoroughly before moving on to advanced topics. Their unique teaching methodologies and regular doubt-clearing sessions have been instrumental in improving my problem-solving skills and conceptual clarity."',
    rating: 5,
  },
  {
    image: 'https://ravi22110219.github.io/BidsukTechnoCreation/subhash.jpg',
    name: 'Subhash Kumawat',
    description: 'NIT Patna  (AIR-5000)',
    text: '"As a student preparing for JEE, the guidance I received from the teachers at Infinite Eduverse has been invaluable. They not only teach but also mentor us, helping to develop effective study strategies and time management skills. Their real-life examples and practical applications of theories make learning engaging and relevant, which has greatly enhanced my understanding and retention of the subjects."',
    rating: 5,
  },
  {
    image: 'https://ravi22110219.github.io/BidsukTechnoCreation/honey.jpg',
    name: 'Hansraj Swami',
    description: 'IIT Mandi (AIR-900)',
    text: '"Infinite Eduverse^s teachers are dedicated to ensuring that each student excels. Their systematic approach to NEET preparation, with regular assessments and feedback, has helped me identify and work on my weak areas. The teachers are always approachable and provide extra help whenever needed, creating a supportive learning environment that fosters academic growth."',
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
