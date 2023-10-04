import { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

import _styles from "./_styles.module.css";

const BasePagination = forwardRef((props, ref) => {
  const { onChange, count, className } = props;

  const page_count = Math.ceil(count / import.meta.env.VITE_PAGE_OFFSET) || 1;
  const page_list = Array.from({ length: page_count }, (_, index) => index + 1);

  const onClick = (value) => {
    onChange(value);
  };
  const onNext = () => {
    onChange((prev) => prev + 1);
  };
  const onBack = (event) => {
    onChange((prev) => prev - 1);
  };

  return (
    <div className={clsx(_styles.container)} ref={ref}>
      <div className={clsx(_styles.item, _styles.icon, className)} onClick={onBack}>
        <ChevronLeftIcon />
      </div>
      {page_list?.map((page) => (
        <div
          value={0}
          key={page}
          className={clsx(_styles.item, className)}
          onClick={() => onClick(page)}>
          {page}
        </div>
      ))}
      <div className={clsx(_styles.item, _styles.icon, className)} onClick={onNext}>
        <ChevronRightIcon />
      </div>
    </div>
  );
});

BasePagination.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  count: PropTypes.number,
};

BasePagination.defaultProps = {
  error: false,
  count: 0,
};

export default BasePagination;
