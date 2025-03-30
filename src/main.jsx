import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Root from "./components/Root/Root.jsx";
import AppoinmentList from "./pages/Home/AppoinmentList/AppoinmentList.jsx";
import Movies from "./pages/Movies/Movies.jsx";
import Product from "./pages/Product/Product.jsx";
import "font-awesome/css/font-awesome.min.css";
import Home from "./pages/Home/Home.jsx";

function HomeWithRefWrapper() {
  const pricingRef = useRef();
  const faqRef = useRef();
  const spaceCalculatorRef = useRef();
  const contactRef = useRef();
  const fastEasyRef = useRef(); 

  return (
    <Home
      pricingRef={pricingRef}
      faqRef={faqRef}
      spaceCalculatorRef={spaceCalculatorRef}
      contactRef={contactRef}
      fastEasyRef={fastEasyRef} 
    />
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomeWithRefWrapper />,
      },
      {
        path: "/appoinment",
        element: <AppoinmentList />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
