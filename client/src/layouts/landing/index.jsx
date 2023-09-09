import PropTypes from "prop-types";

import Topbar from "./topbar";
import Bottombar from "./bottombar";

import _styles from "./_styles.module.css";

function Landing({ children }) {
  return (
    <main className={_styles.root}>
      <Topbar />
      <section className={_styles.container}>{children}</section>
      <Bottombar />
    </main>
  );
}

Landing.propTypes = {
  children: PropTypes.node,
};

export default Landing;
