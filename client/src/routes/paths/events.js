import Root from "pages/events/root";
import Manage from "pages/events/manage";

const JOB_CIRCULAR_ROUTE = [
  {
    path: "/events",
    component: Root,
    is_authenticated: false,
  },
  {
    path: "/events/create",
    component: Manage,
    is_authenticated: false,
  },
  {
    path: "/events/update/:id",
    component: Manage,
    is_authenticated: false,
  },
];

export default JOB_CIRCULAR_ROUTE;
