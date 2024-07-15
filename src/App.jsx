import React from 'react';
import UpperNav from './Components/NavbarSection/UpperNav';
import NavBar from './Components/NavbarSection/NavBar';
import './App.css'; // Global styles
import Slider from './Components/SliderSection/Slider';
import CourseAndFees from './Components/CourseCards/CourseAndFees';
import NewsAndNotification from './Components/NewsAndNotificationSection/NewsAndNotification';
import AboutSection from './Components/AboutAndFact/AboutSection';
import FactsAndEnrollSections from './Components/AboutAndFact/FactsAndEnroll';
import BlogSection from './Components/BlogSection/BlogSection';
import TestimonialsSection from './Components/TestimonialsSection/TestimonialsSection';
import LocationSection from './Components/LocationSection/LocationSection';
import AppSection from './Components/AppSection/AppSection';
import FooterSection from './Components/Footer/FooterSection';
import BlogPage from './Pages/Blog/BlogPage';
import GalleryHome from './Pages/Gallery/GalleyHome';
import PhotoGallery from './Pages/Gallery/PhotoGallery';
import AdmissionForm from './Pages/Admission/AdmissionForm';
import CoursesAndBatches from './Pages/CoursesAndBatchesPage/CoursesAndBatches';

function App() {
    return (
        <div className="App">
         <div className="homePage">
            <UpperNav />
            <NavBar /> 
            <Slider/>
            <CourseAndFees/>
            <NewsAndNotification/>
            <AboutSection />
            <FactsAndEnrollSections />
            <BlogSection />
            <TestimonialsSection />
            <LocationSection />
            <AppSection />
            <FooterSection />
            </div>
             {/* <GalleryHome /> */}
            {/* <PhotoGallery /> */}
             {/* <BlogPage /> */}
             {/* <AdmissionForm /> */}
             {/* <CoursesAndBatches /> */}
            {/* Other sections go here */}
        </div>
    );
}

export default App;