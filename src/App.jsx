import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import CheckDisease from "./pages/services/checkDisease/CheckDisease";
import CropPrice from "./pages/services/CropPrice/CropPrice";
import Services from "./pages/services/Services";
import "./style.scss";

function App() {
  const Layout = () => {
    return (
      <div className={`theme-${"light"}`}>
        <NavBar />
        <Outlet />
        <Footer />
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
          element: <Home />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/services/cropPrice",
          element : <CropPrice />
        },
        {
          path: "/services/checkDisease",
          element : <CheckDisease />
        }
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
