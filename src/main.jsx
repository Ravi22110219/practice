import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import ErrorBoundary from './Pages/ErrorPage/ErrorBoundary.jsx'; // Import the ErrorBoundary component

import CoursesAndBatches from './Pages/CoursesAndBatchesPage/CoursesAndBatches.jsx';
import Home from './Pages/Home/Home.jsx';
import AdmissionForm from './Pages/Admission/AdmissionForm.jsx';
import FeeStructure from './Pages/FeeAndScholarship/FeeStructure.jsx';
import ResultsHomePage from './Pages/Results/ResultsHomePege.jsx'; // Correct the import
import ResultMainPage from './Pages/Results/ResultMainPage.jsx'; // Import the ResultMainPage
import BlogPage from './Pages/Blog/BlogPage.jsx';
import GalleryHome from './Pages/Gallery/GalleyHome.jsx';
import PhotoGallery from './Pages/Gallery/PhotoGallery.jsx';
import AdminBlogPage from './Pages/AdminPage/AdminBlogPage.jsx';
import Scholarship from './Pages/FeeAndScholarship/Scholarship.jsx';
import FeeRefundRules from './Pages/FeeAndScholarship/FeeRefundRules.jsx';
import WhyChooseUs from './Pages/WhyChoiceUs/WhyChooseUs.jsx';
import DirectorsAndTeachers from './Pages/AboutUs/DirectorsAndteachers.jsx';
import BlogHomePage from './Pages/Blog/BlogHomePage.jsx';
import CoursesAndBatchesNEET from './Pages/CoursesAndBatchesPage/CoursesAndBatchesNEET.jsx';
import AboutCoaching from './Pages/AboutUs/AboutCoaching.jsx';
import OurMotivation from './Pages/AboutUs/OurMotivation.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    ),
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
      { path: "results-main", element: <ResultMainPage /> },
      {
        path: "aboutUs",
        children: [
          { path: "infiniteEduVerse", element: <AboutCoaching /> },
          { path: "directorsandteachers", element: <DirectorsAndTeachers /> },
          { path: "ourMotivation", element: <OurMotivation /> },
        ],
      },
      { path: "blog", element: <BlogHomePage /> },
      { path: "blog/:postId", element: <BlogPage /> },
      { path: "gallery", element: <GalleryHome /> },
      { path: "/gallery/:event", element: <PhotoGallery /> },
      { path: "whychoiceus", element: <WhyChooseUs /> },
      { path: "directorsandteachers", element: <DirectorsAndTeachers /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
