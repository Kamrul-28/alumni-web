import { useCallback } from "react";
import PropTypes from "prop-types";

import { AngleRightIcon } from "assets/icons";

import useNavigation from "hooks/useNavigation";

import theme from "themes/default";
import _styles from "./_styles.module.css";

const Header = ({ title, status }) => {
  const { primary_pathname, setPath } = useNavigation();

  const handleClick = useCallback(() => {
    setPath(`/${primary_pathname}`);
  }, [primary_pathname, setPath]);

  return (
    <div className={_styles.container}>
      <button className={_styles.title} onClick={handleClick}>
        {title}
      </button>
      <AngleRightIcon color={theme.colors.text.primary} />
      <p className={_styles.status}>{status}</p>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  status: PropTypes.string,
};

Header.defaultProps = {
  title: "",
  status: "",
};

export default Header;
