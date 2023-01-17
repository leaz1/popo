import {NavBar} from "../components/NavBar";
import {NavBarItem} from "../components/NavBarItem";
import {Outlet} from "react-router-dom";
import React from "react";

export function MeScreen() {
    return (
        <>
            <NavBar level="1">
                <NavBarItem link={`works`} linkText="Works" />
                <NavBarItem link={`tags`} linkText="Drafts" />
                <NavBarItem link={`tags`} linkText="Favs" />
            </NavBar>
            <div className="me-area">
                <Outlet />
            </div>
        </>
    )
}
