import clsx from "clsx";
import PropTypes from "prop-types";
import _styles from "./_styles.module.css";

function IconButton({ onClick, icon, className }) {
  const Icon = icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(_styles.button, className)}>
      <Icon className={_styles.icon} />
    </button>
  );
}

IconButton.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.elementType,
  className: PropTypes.string,
};

export default IconButton;
