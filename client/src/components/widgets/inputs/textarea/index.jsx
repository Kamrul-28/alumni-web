import { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import _styles from "./_styles.module.css";

const TextAreaInputField = forwardRef((props, ref) => {
  const {
    label,
    error,
    value,
    fullwidth,
    required,
    helperText,
    placeholder,
    className,
    ...others
  } = props;

  return (
    <div
      className={clsx(_styles.container, {
        [_styles.fullwidth]: fullwidth,
        [_styles.error]: error,
      })}>
      {label && (
        <label className={_styles.label}>
          {required && <span>*</span>}
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={5}
        value={value || ""}
        placeholder={placeholder}
        className={clsx(_styles.input_field, className)}
        {...others}
      />
      {helperText && <span className={_styles.helper_message}>{helperText}</span>}
    </div>
  );
});

TextAreaInputField.propTypes = {
  error: PropTypes.bool,
  fullwidth: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.string,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TextAreaInputField.defaultProps = {
  label: "",
  error: false,
  required: false,
  fullwidth: true,
  placeholder: "Please enter",
};
export default TextAreaInputField;
