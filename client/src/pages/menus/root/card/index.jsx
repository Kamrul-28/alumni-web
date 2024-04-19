import PropTypes from "prop-types";

import _styles from "./_styles.module.css";

const Card = ({ instance }) => {
  const { name, type, link } = instance;

  return (
    <div className={_styles.container}>
      <h1 className={_styles.title}>{name}</h1>
      <p className={_styles.type}>{type}</p>
      <p className={_styles.type}>{link}</p>
    </div>
  );
};

Card.propTypes = {
  instance: PropTypes.object,
};

Card.defaultProps = {
  instance: {},
};

export default Card;
