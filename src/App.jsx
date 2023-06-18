import React, { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import CheckDisease from "./pages/services/checkDisease/CheckDisease";
import CropPrice from "./pages/services/CropPrice/CropPrice";
import Services from "./pages/services/Services";
import "./style.scss";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";

import Weather from "./pages/weather/Weather";
import Contact from "./pages/contact/Contact";
import BlogPage from "./pages/blogPage/BlogPag";

function App() {
  const [changeLang, setChangeLang] = useState(false);
  const Layout = () => {
    return (
      <div className={`theme-${"light"}`}>
        <NavBar setChangeLang={setChangeLang} changeLang={changeLang} />
        <Outlet />
        <Footer changeLang={changeLang} />
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
          path: "/services/cropPrice",
          element: <CropPrice changeLang={changeLang} />,
        },
        {
          path: "/services/checkDisease",
          element: <CheckDisease changeLang={changeLang} />,
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
          path: "/blogs/:id",
          element: <Blog changeLang={changeLang} />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
