import PropTypes from "prop-types";

import _styles from "./_styles.module.css";

const DetailsInfo = ({ title, info }) => {
  return (
    <div className={_styles.container}>
      <span className={_styles.label}>{title}:</span>
      <p className={_styles.info}>{info}</p>
    </div>
  );
};

DetailsInfo.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
};

export default DetailsInfo;
