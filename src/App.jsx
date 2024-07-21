import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UpperNav from './Components/NavbarSection/UpperNav';
import NavBar from './Components/NavbarSection/NavBar';
import Slider from './Components/SliderSection/Slider';
import CourseAndFees from './Components/CourseCards/CourseAndFees';
import NewsAndNotification from './Components/NewsAndNotificationSection/NewsAndNotification';
import AboutSection from './Components/WhyChoiceUsSecion/AboutSection';
import FactsAndEnrollSections from './Components/WhyChoiceUsSecion/FactsAndEnroll';
import BlogSection from './Components/BlogSection/BlogSection';
import TestimonialsSection from './Components/TestimonialsSection/TestimonialsSection';
import LocationSection from './Components/LocationSection/LocationSection';
import AppSection from './Components/AppSection/AppSection';
import FooterSection from './Components/Footer/FooterSection';
import CoursesAndBatches from './Pages/CoursesAndBatchesPage/CoursesAndBatches';
import CoursesAndBatchesNEET from './Pages/CoursesAndBatchesPage/CoursesAndBatchesNEET';
import AdmissionForm from './Pages/Admission/AdmissionForm';
import FeeStructure from './Pages/FeeAndScholarship/FeeStructure';
import Scholarship from './Pages/FeeAndScholarship/Scholarship';
import FeeRefundRules from './Pages/FeeAndScholarship/FeeRefundRules';
import ResultsHomePage from './Pages/Results/ResultsHomePege';
import BlogHomePage from './Pages/Blog/BlogHomePage';
import PhotoGallery from './Pages/Gallery/PhotoGallery';
import WhyChooseUs from './Pages/WhyChoiceUs/WhyChooseUs';
import DirectorsAndteachers from './Pages/AboutUs/DirectorsAndteachers';
import Home from './Pages/Home/Home'; // Ensure Home is imported
import Layout from './Layout.jsx'; // Ensure Layout is imported
import ResultMainPage from './Pages/Results/ResultMainPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "course&batch", element: <CoursesAndBatches /> },
      { path: "course&batchneet", element: <CoursesAndBatchesNEET /> },
      { path: "admission", element: <AdmissionForm /> },
      {
        path: "feeAndScholarship",
        children: [
          { path: "feeStructure", element: <FeeStructure /> },
          { path: "scholarship", element: <Scholarship /> },
          { path: "feeRefundRules", element: <FeeRefundRules /> },
        ],
      },
      { path: "result", element: <ResultsHomePage /> },
      { path: "bloghomepage", element: <BlogHomePage />},
      { path: "gallery", element: <PhotoGallery /> },
      { path: "whychoiceus", element: <WhyChooseUs />},
      { path: "directorsandteachers", element: <DirectorsAndteachers /> },
    ],
  }
]);

function App() {
  return (
    <div className="App">

      {/* Routing setup */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
