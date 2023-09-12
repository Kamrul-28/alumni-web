import clsx from "clsx";
import PropTypes from "prop-types";
import _styles from "./_styles.module.css";

function LinkButton(props) {
  const { startIcon, endIcon, href, children, className, color } = props;
  const Icon = endIcon || startIcon;

  return (
    <a
      href={href}
      className={clsx(_styles.button, className, {
        [_styles.secondary]: color === "secondary",
        [_styles.primary]: color === "primary",
      })}>
      {startIcon && <Icon className={_styles.icon} />}
      {children}
      {endIcon && <Icon className={_styles.icon} />}
    </a>
  );
}

LinkButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  endIcon: PropTypes.elementType,
  startIcon: PropTypes.elementType,
  color: PropTypes.oneOf(["primary", "secondary"]),
};

LinkButton.defaultProps = {};

export default LinkButton;
