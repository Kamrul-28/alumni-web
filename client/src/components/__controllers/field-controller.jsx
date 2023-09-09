import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import { Controller } from "react-hook-form";

const FieldController = forwardRef((props, ref) => {
  const { children, rules, ...others } = props;
  const required = Boolean(rules?.required);
  return (
    <Controller
      ref={ref}
      render={({ field, fieldState: { error } }) => (
        <>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              ...field,
              required: required,
              error: Boolean(error),
              helperText: error?.message,
            }),
          )}
        </>
      )}
      rules={rules}
      {...others}
    />
  );
});

FieldController.propTypes = {
  children: PropTypes.node,
  rules: PropTypes.object,
};

export default FieldController;
