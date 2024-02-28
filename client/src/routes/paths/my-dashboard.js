import Notification from "pages/my_dashboard/notification";
import Profile from "pages/my_dashboard/profile";

const JOB_CIRCULAR_ROUTE = [
  {
    path: "/my-notification",
    component: Notification,
    is_authenticated: true,
  },
  {
    path: "/my-profile",
    component: Profile,
    is_authenticated: true,
  },
];

export default JOB_CIRCULAR_ROUTE;
