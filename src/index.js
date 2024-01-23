import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import VideosList from './pages/VideosList';
import VideoDetail from './pages/VideoDetail';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <VideosList />,
      },
      {
        path: 'videos',
        element: <VideosList />,
      },
      {
        path: 'videos/:keyword',
        element: <VideosList />,
      },
      {
        path: 'videos/watch/:videoId',
        element: <VideoDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
