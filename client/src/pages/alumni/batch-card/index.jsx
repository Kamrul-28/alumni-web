import PropTypes from "prop-types";

import useNavigation from "hooks/useNavigation";
import _styles from "./_styles.module.css";

function Card({ year }) {
  const { setQuery } = useNavigation();

  const handleClick = () => {
    setQuery({ year: year });
  };

  return (
    <div className={_styles.card} onClick={handleClick}>
      <p className={_styles.short_year}>{String(year).slice(-2)}02__</p>
      <p className={_styles.full_year}>Batch: {year}</p>
    </div>
  );
}

Card.propTypes = {
  year: PropTypes.number,
};

Card.defaultProps = {};

export default Card;
