import { NavLink, Outlet } from "react-router-dom";

import React from "react";
import Navbar from "./Navbar";
import Home from "../pages/Home";

export default function RootLayout() {
    return (
        <div className="root-layout">
            <Navbar />

            <main>
                <Outlet />
            </main>
        </div>
    );
}
