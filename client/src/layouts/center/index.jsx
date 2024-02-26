import PropTypes from "prop-types";

import _styles from "./_styles.module.css";

const CenterLayout = ({ children }) => {
  return <main className={_styles.root}>{children}</main>;
};

CenterLayout.propTypes = {
  children: PropTypes.node,
};
export default CenterLayout;
