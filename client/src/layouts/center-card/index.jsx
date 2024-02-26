import PropTypes from "prop-types";

import _styles from "./_styles.module.css";

const CenterCardLayout = ({ children }) => {
  return (
    <main className={_styles.root}>
      <section className={_styles.container}>{children}</section>
    </main>
  );
};

CenterCardLayout.propTypes = {
  children: PropTypes.node,
};
export default CenterCardLayout;
