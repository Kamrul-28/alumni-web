import clsx from "clsx";
import PropTypes from "prop-types";
import _styles from "./_styles.module.css";

function TextButton(props) {
  const { startIcon, endIcon, onClick, children, size, className, color } = props;
  const Icon = endIcon || startIcon;

  return (
    <span
      onClick={onClick}
      className={clsx(_styles.button, className, {
        [_styles.secondary]: color === "secondary",
        [_styles.primary]: color === "primary",
        [_styles.small]: size === "small",
      })}>
      {startIcon && <Icon className={_styles.icon} />}
      {children}
      {endIcon && <Icon className={_styles.icon} />}
    </span>
  );
}

TextButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  endIcon: PropTypes.elementType,
  startIcon: PropTypes.elementType,
  color: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["small", "large"]),
};

TextButton.defaultProps = {};

export default TextButton;
