import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/services",
    element: <Services/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


serviceWorkerRegistration.register();
