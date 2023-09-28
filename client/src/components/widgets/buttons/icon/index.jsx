import clsx from "clsx";
import PropTypes from "prop-types";
import _styles from "./_styles.module.css";

function IconButton(props) {
  const { onClick, icon, className, color, size } = props;
  const Icon = icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(_styles.button, className, {
        [_styles.secondary]: color === "secondary",
        [_styles.primary]: color === "primary",
        [_styles.small]: size === "small",
      })}>
      <Icon className={_styles.icon} />
    </button>
  );
}

IconButton.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.elementType,
  className: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["small", "large"]),
};

export default IconButton;
