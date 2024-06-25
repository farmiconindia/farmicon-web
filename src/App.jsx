import React, { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import CheckDisease from "./pages/services/checkDisease/CheckDisease";
import CropPrice from "./pages/services/CropPrice/CropPrice";
import Drone from "./pages/services/drone/Drone";
import Services from "./pages/services/Services";
import "./style.scss";
import TermsAndConditions from "./pages/Tnc/Terms";
import PrivacyPolicy from "./pages/Privacypolicy/privacy";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Weather from "./pages/weather/Weather";
import Contact from "./pages/contact/Contact";
import BlogPage from "./pages/blogPage/BlogPag";
import Product from "./pages/product/Product";
import CropHealth from "./pages/services/cropHealth/CropHealth";
import SoilHealth from "./pages/services/soilhealth/SoilHealth";
import Ai from "./pages/ai/aii";
import GoToTop from './components/GoToTop/GoToTop';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [changeLang, setChangeLang] = useState(false);
  const Layout = () => {
    return (
      <div className={`theme-${"light"}`}>
        <NavBar setChangeLang={setChangeLang} changeLang={changeLang} />
        <Outlet />
        <Footer changeLang={changeLang} />
        <GoToTop />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home changeLang={changeLang} />,
        },
        {
          path: "/services",
          element: <Services changeLang={changeLang} />,
        },
        {
          path: "/product",
          element: <Product changelang={changeLang} />
        },
        {
          path: "/services/cropPrice",
          element: <CropPrice changeLang={changeLang} />,
        },
        {
          path: "/services/checkDisease",
          element: <CheckDisease changeLang={changeLang} />,
        },
        {
          path: "/services/cropHealth",
          element: <CropHealth changeLang={changeLang} />,
        },
        {
          path: "/services/soilHealth",
          element: <SoilHealth changeLang={changeLang} />,
        },
        {
          path: "/services/drone",
          element: <Drone changeLang={changeLang} />,
        },
        {
          path: "/about",
          element: <About changeLang={changeLang} />,
        },
        {
          path: "/blogs",
          element: <BlogPage changeLang={changeLang} />,
        },
        {
          path: "/weather",
          element: <Weather changeLang={changeLang} />,
        },
        {
          path: "/contact",
          element: <Contact changeLang={changeLang} />,
        },
        {
          path: "/ai",
          element: <Ai changeLang={changeLang} />,
        },
        {
          path: "/blogs/:id",
          element: <Blog changeLang={changeLang} />,
        },
        {
          path: "/terms-and-conditions",
          element: <TermsAndConditions changeLang={changeLang} />,
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy changeLang={changeLang} />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  );
}

export default App;
