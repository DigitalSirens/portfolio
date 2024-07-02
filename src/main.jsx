import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './components/landing/landing';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);