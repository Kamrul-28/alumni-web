import Manage from "pages/job-circular/manage";
import Root from "pages/job-circular/root";

const JOB_CIRCULAR_ROUTE = [
  {
    path: "/job-circular",
    component: Root,
    is_authenticated: false,
  },
  {
    path: "/job-circular/create",
    component: Manage,
    is_authenticated: false,
  },
  {
    path: "/job-circular/update/:id",
    component: Manage,
    is_authenticated: false,
  },
];

export default JOB_CIRCULAR_ROUTE;
