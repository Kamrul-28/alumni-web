import Manage from "pages/menus/manage";
import Root from "pages/menus/root";

const MENUS_ROUTE = [
  {
    path: "/menus",
    component: Root,
    is_authenticated: false,
  },
  {
    path: "/menus/create",
    component: Manage,
    is_authenticated: false,
  },
  {
    path: "/menus/update/:id",
    component: Manage,
    is_authenticated: false,
  },
];

export default MENUS_ROUTE;
