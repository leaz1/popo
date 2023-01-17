import {createBrowserRouter, Link, Outlet, RouterProvider} from "react-router-dom";
import React from "react";
import {NavBarItem} from "../components/NavBarItem";
import {NavBar} from "../components/NavBar";

import '../stylesheets/Front.scss';

export function FrontScreen() {
    return (
        <>
            <NavBar level="1">
                <NavBarItem link={`works`} linkText="Works" />
                <NavBarItem link={`tags`} linkText="Tags" />
            </NavBar>
            <div className="front-area">
                <Outlet />
            </div>
        </>
    )
}
