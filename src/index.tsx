import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import {FrontScreen} from "./screens/FrontScreen";
import {TagsScreen} from "./screens/TagsScreen";
import {WorksScreen} from "./screens/WorksScreen";
import {WriteScreen} from "./screens/WriteScreen";
import {WorkScreen} from "./screens/WorkScreen";
import {TagScreen} from "./screens/TagScreen";
import {MeScreen} from "./screens/MeScreen";
import {AboutScreen} from "./screens/AboutScreen";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/front",
                element: <FrontScreen />,
                children: [
                    {
                        path: "tags",
                        element: <TagsScreen />,
                    },
                    {
                        path: "works",
                        element: <WorksScreen />,
                    },
                ],
            },
            {
                path: "/write",
                element: <WriteScreen />,
            },
            {
                path: "/me",
                element: <MeScreen />,
            },
            {
                path: "/about",
                element: <AboutScreen />,
            },
            {
                path: "/tag/:tagId",
                element: <TagScreen />
            },
            {
                path: "/work/:workId",
                element: <WorkScreen />
            },
        ]
    },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
