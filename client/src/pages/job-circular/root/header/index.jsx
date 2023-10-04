import { useCallback } from "react";

import useNavigation from "hooks/useNavigation";
import { FilledButton, TextButton } from "components/widgets/buttons";
import { PlusIcon, ViewfinderCircleIcon } from "@heroicons/react/24/outline";

import _styles from "./_styles.module.css";

const Header = () => {
  const { primary_pathname, setPath } = useNavigation();

  const onClick = useCallback(() => {
    setPath(`/${primary_pathname}/create`);
  }, [primary_pathname, setPath]);

  return (
    <div className={_styles.container}>
      <div className={_styles.header_left}>
        <FilledButton startIcon={PlusIcon} color="secondary" onClick={onClick}>
          Create
        </FilledButton>
        <span>Total: 10</span>
      </div>
      <TextButton color="secondary" startIcon={ViewfinderCircleIcon}>
        Advance Search
      </TextButton>
    </div>
  );
};

export default Header;
