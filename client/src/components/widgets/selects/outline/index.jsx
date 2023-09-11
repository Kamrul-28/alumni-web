import { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import _styles from "./_styles.module.css";

const OutlineSelectField = forwardRef((props, ref) => {
  const {
    items,
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
      <select
        ref={ref}
        value={value || ""}
        className={clsx(_styles.select_field, className)}
        {...others}>
        <option value="" disabled={required}>
          {placeholder}
        </option>
        {items.map(({ value, title }, index) => (
          <option value={value} key={index}>
            {title}
          </option>
        ))}
      </select>
      {helperText && <span className={_styles.helper_message}>{helperText}</span>}
    </div>
  );
});

OutlineSelectField.propTypes = {
  error: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  ).isRequired,
};

OutlineSelectField.defaultProps = {
  items: [],
  label: "",
  error: false,
  required: false,
  placeholder: "Choose a option",
};
export default OutlineSelectField;
