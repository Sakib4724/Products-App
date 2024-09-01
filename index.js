import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from "./src/App";
import Error from "./src/components/Error";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import ProductDetails from "./src/components/ProductDetails";
import ComparePage from "./src/components/ComparePage";
import { ProductProvider } from './src/utils/ProductContext'

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <ProductDetails />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/product-details",
                element: <ProductDetails />
            },
            {
                path: "/compare-products",
                element: <ComparePage />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ProductProvider>
        <RouterProvider router={appRouter}>
            <AppLayout />
        </RouterProvider>
    </ProductProvider>
);
