import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import CoursesAndBatches from './Pages/CoursesAndBatchesPage/CoursesAndBatches.jsx'
import Home from './Pages/Home/Home.jsx'
import AdmissionForm from './Pages/Admission/AdmissionForm.jsx'
import FeeStructure from './Pages/FeeAndScholarship/FeeStructure.jsx'
import ResultsHomePage from './Pages/Results/ResultsHomePege.jsx'
import BlogPage from './Pages/Blog/BlogPage.jsx'
import PhotoGallery from './Pages/Gallery/PhotoGallery.jsx'
import AdminBlogPage from './Pages/AdminPage/AdminBlogPage.jsx'
import Scholarship from './Pages/FeeAndScholarship/Scholarship.jsx'
import FeeRefundRules from './Pages/FeeAndScholarship/FeeRefundRules.jsx'
import WhyChooseUs from './Pages/WhyChoiceUs/WhyChooseUs.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "", element: <Home /> },
            { path: "course&batch", element: <CoursesAndBatches /> },
            { path: "admission", element: <AdmissionForm /> },
            {
                path: "feeAndScholarship",
                children: [
                    { path: "feeStructure", element: <FeeStructure /> },
                    { path: "scholarship", element: <Scholarship /> },
                    { path: "feeRefundRules", element: <FeeRefundRules /> }, // Correct component
                ],
            },
            { path: "result", element: <ResultsHomePage /> },
            { path: "blog", element: <BlogPage /> },
            { path: "gallery", element: <PhotoGallery /> },
            { path: "whychoiceus", element: <WhyChooseUs />},
        ],
    },

     
])


ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
