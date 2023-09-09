import HOME_ROUTE from "./home";
import AUTH_ROUTE from "./auth";
import ABOUT_ROUTE from "./about";

const BROWSE_ROUTE = [...AUTH_ROUTE, ...HOME_ROUTE, ...ABOUT_ROUTE];

export default BROWSE_ROUTE;
