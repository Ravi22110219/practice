import React from 'react'
import Slider from '../../Components/SliderSection/Slider'
import CourseAndFees from '../../Components/CourseCards/CourseAndFees'
import NewsAndNotification from '../../Components/NewsAndNotificationSection/NewsAndNotification'
import AboutSection from '../../Components/WhyChoiceUsSecion/AboutSection'
import FactsAndEnrollSections from '../../Components/WhyChoiceUsSecion/FactsAndEnroll'
import BlogSection from '../../Components/BlogSection/BlogSection'
import TestimonialsSection from '../../Components/TestimonialsSection/TestimonialsSection'
import LocationSection from '../../Components/LocationSection/LocationSection'
import AppSection from '../../Components/AppSection/AppSection'
import WhatsAppButton from '../../Components/WhatsAppButton/WhatsAppButton'

function Home() {
  return (
    <>
    <Slider />
    <CourseAndFees />
    <NewsAndNotification />
    <AboutSection />
    <FactsAndEnrollSections />
    <BlogSection />
    <TestimonialsSection />
    <LocationSection />

    <AppSection />
    <WhatsAppButton />


    </>
  )
}

export default Home;