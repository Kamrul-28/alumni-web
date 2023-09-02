import { useState } from "react";
import { Link } from "react-router-dom";

import TOP_NAV_ITEMS from "routes/navigations/topbar";
import { KU_LOGO } from "assets/images";
import SITE_CONFIG from "data/site.config";

import _styles from "./_styles.module.css";

export default function Topbar() {
  return (
    <header>
      <nav className={_styles.navbar} aria-label="Global">
        <Link to="/">
          <span className="sr-only">{SITE_CONFIG.title}</span>
          <img className={_styles.logo} src={KU_LOGO} alt={SITE_CONFIG.title} />
        </Link>
        <div className={_styles.nav_items}>
          {TOP_NAV_ITEMS?.map((item) => (
            <Link to={item.path} key={item.title} className={_styles.nav_link}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className={_styles.nav_items}>
          <Link to="/login" className={_styles.nav_link}>
            Login
          </Link>
          <Link to="/register" className={_styles.nav_link}>
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}
