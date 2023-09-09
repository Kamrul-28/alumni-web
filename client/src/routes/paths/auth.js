import Login from "pages/auth/login";
import Register from "pages/auth/register";

import CenterLayout from "layouts/center";

const AUTH_ROUTE = [
  {
    path: "/login",
    component: Login,
    layout: CenterLayout,
    is_authenticated: false,
  },
  {
    path: "/register",
    component: Register,
    layout: CenterLayout,
    is_authenticated: false,
  },
];

export default AUTH_ROUTE;
