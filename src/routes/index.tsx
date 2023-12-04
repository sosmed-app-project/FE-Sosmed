import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import Navbar from '@/components/navbar';
import Home from '@/pages';


export default function Router() {
  const routes = [
    {
      path: '/',
      element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/navbar',
        element: <Navbar />,
      },
    
    {
      path: '*',
      element: <div>404 page not found</div>,
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
