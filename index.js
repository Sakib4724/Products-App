import React from "React";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from "./src/App";
import Error from "./src/components/Error";
import Body from "./src/components/Body";
import ProuductTable from "./src/components/ProductTable";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },

            {
                path: "/products",
                element: <ProuductTable />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={appRouter}>
        <AppLayout />
    </RouterProvider>

);