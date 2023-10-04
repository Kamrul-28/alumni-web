import { useCallback } from "react";

import { AddIcon, SearchIcon } from "assets/icons";

import useNavigation from "hooks/useNavigation";
import { FilledButton, TextButton } from "components/widgets/buttons";

import _styles from "./_styles.module.css";

const Header = () => {
  const { primary_pathname, setPath } = useNavigation();

  const onClick = useCallback(() => {
    setPath(`/${primary_pathname}/create`);
  }, [primary_pathname, setPath]);

  return (
    <div className={_styles.container}>
      <div className={_styles.header_left}>
        <FilledButton startIcon={AddIcon} color="secondary" onClick={onClick}>
          Create
        </FilledButton>
        |<span>Total: 10</span>
      </div>
      <div>
        <TextButton color="secondary" startIcon={SearchIcon}>
          Advance Search
        </TextButton>
      </div>
    </div>
  );
};

export default Header;
