import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Switch,
} from "react-router-dom";

// import router
import { router } from "./router";
import { RouterProvider } from "react-router-dom";

// import pages

// import components
import Navbar from "./components/Navbar";
function App() {
    return <RouterProvider router={router} />;
}

export default App;
