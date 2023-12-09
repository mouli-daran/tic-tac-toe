import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";

import Body from "./src/Body";
import Advice from "./src/Advice";
import Homepage from "./src/Homepage";
import Gameboard from "./src/Gameboard";
import Error from "./src/Error";



const Appcontainer = () => {
    return (
        <div className="app">
            <Homepage />
            <Outlet />

        </div>
    )
};
const appRouter = createBrowserRouter ([
    {
        path: "/",
        element: <Appcontainer />,
        errorElement: <Error />,
    },
    {
        path: "/",
        element: <Homepage />
    },
    {
        path:"/gameboard",
         element: <Gameboard />
     },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);