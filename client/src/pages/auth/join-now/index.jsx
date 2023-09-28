import { Link } from "react-router-dom";
import { APP_LOGO } from "assets/images";
import SITE_CONFIG from "data/site.config";

import Login from "./login";
import Register from "./register";
import _styles from "./_styles.module.css";

function JoinNow() {
  return (
    <section className={_styles.root}>
      <Link to="/">
        <img className={_styles.logo} src={APP_LOGO} alt={SITE_CONFIG.title} />
      </Link>
      <div className={_styles.container}>
        <Login />
        <div className={_styles.draw_line} />
        <Register />
      </div>
    </section>
  );
}

export default JoinNow;
