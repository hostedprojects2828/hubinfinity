import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages.
import Root from './common/Root';
import Home from './page/home';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
