import { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import _styles from "./_styles.module.css";

const OutlineInputField = forwardRef((props, ref) => {
  const {
    label,
    error,
    value,
    required,
    helperText,
    placeholder,
    className,
    ...others
  } = props;

  return (
    <div className={clsx(_styles.container, { [_styles.error]: error })}>
      {label && (
        <label className={_styles.label}>
          {required && <span>*</span>}
          {label}
        </label>
      )}
      <input
        ref={ref}
        value={value || ""}
        placeholder={placeholder}
        className={clsx(_styles.input_field, className)}
        {...others}
      />
      {helperText && <span className={_styles.helper_message}>{helperText}</span>}
    </div>
  );
});

OutlineInputField.propTypes = {
  error: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.string,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

OutlineInputField.defaultProps = {
  label: "",
  error: false,
  required: false,
  placeholder: "Please enter",
};
export default OutlineInputField;
