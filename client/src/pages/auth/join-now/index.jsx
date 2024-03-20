import { Link } from "react-router-dom";
import { APP_LOGO } from "assets/images";
import SITE_CONFIG from "data/site.config";

import Login from "./login";
import Register from "./register";
import ForgetPassword from "./forget-password";

import _styles from "./_styles.module.css";

function JoinNow() {
  return (
    <section className={_styles.root}>
      <Link to="/">
        <img className={_styles.logo} src={APP_LOGO} alt={SITE_CONFIG.title} />
      </Link>
      <div className={_styles.container}>
        <div className={_styles.column}>
          <Login />
          <div className={_styles.vertical_line} />
          <ForgetPassword />
        </div>
        <div className={_styles.horizontal_line} />
        <Register />
      </div>
    </section>
  );
}

export default JoinNow;
