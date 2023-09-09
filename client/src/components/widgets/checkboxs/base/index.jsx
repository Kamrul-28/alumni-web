import { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import _styles from "./_styles.module.css";

const BaseCheckbox = forwardRef((props, ref) => {
  const { label, value, error, required, helperText, className, ...others } = props;

  return (
    <div className={clsx(_styles.container, error && _styles.error)}>
      <div className={_styles.flex_row}>
        <input
          ref={ref}
          type="checkbox"
          checked={value}
          className={clsx(_styles.checkbox, className)}
          {...others}
        />
        {label && (
          <label className={_styles.label}>
            {required && <span>*</span>}
            {label}
          </label>
        )}
      </div>
      {helperText && <span className={_styles.helper_message}>{helperText}</span>}
    </div>
  );
});

BaseCheckbox.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  helperText: PropTypes.any,
  required: PropTypes.bool,
  error: PropTypes.bool,
  value: PropTypes.bool,
};

BaseCheckbox.defaultProps = {
  error: false,
  required: false,
  label: "Check",
};

export default BaseCheckbox;
