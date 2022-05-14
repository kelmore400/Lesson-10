import { AuthLayout } from './layouts/auth';
import { MainLayout } from './layouts/main';

import { Home } from './pages/Home';
import { Name } from './pages/Name';
import { Support } from './pages/Support';
import { Login } from './pages/Login';


export const routes = [
  {
    path: "/auth",
    component: AuthLayout,
    routes: [
      {
        path: "/auth",
        component: Login
      }
    ]
  },
  {
    path: "*",
    component: MainLayout,
    routes: [
      {
        path: "/support",
        component: Support
      },
      {
        path: "/name",
        component: Name
      },
      {
        path: "/",
        component: Home
      }
    ]
  }
];