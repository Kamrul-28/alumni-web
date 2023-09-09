import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { KU_LOGO } from "assets/images";
import SITE_CONFIG from "data/site.config";

import _styles from "./_styles.module.css";

const CenterLayout = ({ children }) => {
  return (
    <main className={_styles.root}>
      <section className={_styles.container}>
        <Link to="/">
          <img className={_styles.logo} src={KU_LOGO} alt={SITE_CONFIG.title} />
        </Link>
        {children}
      </section>
    </main>
  );
};

CenterLayout.propTypes = {
  children: PropTypes.node,
};
export default CenterLayout;
