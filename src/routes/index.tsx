import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import Home from '@/pages';
import Profile from '@/pages/profile';
import ProfileEdit from '@/pages/profile/edit-profile';


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
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/profile-edit',
        element: <ProfileEdit />,
      },
    
    {
      path: '*',
      element: <div>404 page not found</div>,
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
