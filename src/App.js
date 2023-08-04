import React from "react";

// import router
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";

// import pages

// import components

function App() {
    return (
        <>
            <RouterProvider router={router} />;
        </>
    );
}

export default App;
