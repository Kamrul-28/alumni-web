import clsx from "clsx";
import PropTypes from "prop-types";
import _styles from "./_styles.module.css";

function OutlinedButton({ startIcon, endIcon, onClick, children, className, type }) {
  const Icon = endIcon || startIcon;

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(_styles.button, className)}>
      {startIcon && <Icon className={_styles.icon} />}
      {children}
      {endIcon && <Icon className={_styles.icon} />}
    </button>
  );
}

OutlinedButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  endIcon: PropTypes.elementType,
  startIcon: PropTypes.elementType,
};

OutlinedButton.defaultProps = {
  type: "button",
};

export default OutlinedButton;
