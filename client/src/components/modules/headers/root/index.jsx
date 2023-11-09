import { useCallback } from "react";
import PropTypes from "prop-types";

import useNavigation from "hooks/useNavigation";
import { FilledButton, TextButton } from "components/widgets/buttons";
import { PlusIcon, ViewfinderCircleIcon } from "@heroicons/react/24/outline";

import _styles from "./_styles.module.css";

const RootHeader = (props) => {
  const { title, count, onSearch } = props;
  const { primary_pathname, setPath } = useNavigation();

  const onButtonClick = useCallback(() => {
    setPath(`/${primary_pathname}/create`);
  }, [primary_pathname, setPath]);

  return (
    <div className={_styles.container}>
      <div className={_styles.header_left}>
        <FilledButton startIcon={PlusIcon} color="secondary" onClick={onButtonClick}>
          Create
        </FilledButton>
        <span>Total: {count}</span>
      </div>
      {onSearch && (
        <TextButton
          color="secondary"
          startIcon={ViewfinderCircleIcon}
          onClick={onSearch}>
          Advance Search
        </TextButton>
      )}
    </div>
  );
};

RootHeader.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  onSearch: PropTypes.oneOfType([PropTypes.oneOf([false]), PropTypes.func]),
};

RootHeader.defaultProps = {
  title: "Create",
  count: 0,
};

export default RootHeader;
