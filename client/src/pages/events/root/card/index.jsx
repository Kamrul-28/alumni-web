import PropTypes from "prop-types";

import { TextButton } from "components/widgets/buttons";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import { formatShortMonth } from "utils/date-time";

import _styles from "./_styles.module.css";

function Card({ instance }) {
  const { title, description, cover, date } = instance;
  return (
    <div className={_styles.card}>
      <img src={cover} alt={title} className={_styles.card_image} />
      <time className={_styles.card_time}>{formatShortMonth(date)}</time>
      <div className={_styles.card_content}>
        <h2 className={_styles.card_title}>{title}</h2>
        <p className={_styles.card_description}>{description}</p>
        <TextButton color="primary" size="small" endIcon={ChevronRightIcon}>
          More
        </TextButton>
      </div>
    </div>
  );
}

Card.propTypes = {
  instance: PropTypes.object,
};

Card.defaultProps = {};

export default Card;
