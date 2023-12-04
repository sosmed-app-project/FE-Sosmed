import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';


export default function Router() {
  const routes = [
    // {
    //   path: '/',
    //   element: <Home />,
    // },
    {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
   
    {
      path: '*',
      element: <div>404 page not found</div>,
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
