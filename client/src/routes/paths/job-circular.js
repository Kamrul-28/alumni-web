import JobCircularRoot from "pages/job-circular/root";
import JobCircularManage from "pages/job-circular/manage";

const JOB_CIRCULAR_ROUTE = [
  {
    path: "/job-circular",
    component: JobCircularRoot,
    is_authenticated: false,
  },
  {
    path: "/job-circular/create",
    component: JobCircularManage,
    is_authenticated: false,
  },
  {
    path: "/job-circular/update/:id",
    component: JobCircularManage,
    is_authenticated: false,
  },
];

export default JOB_CIRCULAR_ROUTE;
