import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {NavBar} from "./components/NavBar";
import './stylesheets/common.scss';
import {NavBarItem} from "./components/NavBarItem";

function App() {
  return (
    <div className="App">
        <div className="App container-h">
            <NavBar level="0">
                <NavBarItem link={`/front`} linkText="Front" />
                <NavBarItem link={`/write`} linkText="Write" />
                <NavBarItem link={`/me`} linkText="Me" />
                <NavBarItem link={`/about`} linkText="About" />
            </NavBar>
            <Outlet />
        </div>
    </div>
  );
}

export default App;
