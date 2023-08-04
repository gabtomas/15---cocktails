import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

// Create a router that uses the elements from the routes folder
// and wraps them in a Layout component
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cocktail/:id" element={<SingleCocktail />} />
            <Route path="*" element={<Error />} />
        </Route>
    )
);
