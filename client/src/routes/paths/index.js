import HOME_ROUTE from "./home";
import AUTH_ROUTE from "./auth";
import ABOUT_ROUTE from "./about";
import EVENTS_ROUTE from "./events";
import ALUMNI_ROUTE from "./alumni";
import JOB_CIRCULAR_ROUTE from "./job-circular";

const BROWSE_ROUTE = [
  ...AUTH_ROUTE,
  ...HOME_ROUTE,
  ...ABOUT_ROUTE,
  ...EVENTS_ROUTE,
  ...ALUMNI_ROUTE,
  ...JOB_CIRCULAR_ROUTE,
];

export default BROWSE_ROUTE;
