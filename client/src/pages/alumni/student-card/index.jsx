import PropTypes from "prop-types";

import { LinkButton } from "components/widgets/buttons";

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FacebookIcon, LinkdinIcon } from "assets/icons";

import _styles from "./_styles.module.css";

function Card({ instance }) {
  const { full_name, photo, student_id, linkdin, facebook, email, phone } = instance;

  return (
    <div className={_styles.card}>
      <img src={photo} alt={full_name} className={_styles.card_image} />
      <div className={_styles.card_content}>
        <h2 className={_styles.card_title}>{full_name}</h2>
        <p className={_styles.card_description}>{student_id}</p>
      </div>
      <div className={_styles.card_icons}>
        <LinkButton
          href={facebook}
          className={_styles.social_icon}
          startIcon={FacebookIcon}></LinkButton>
        <LinkButton
          href={linkdin}
          className={_styles.social_icon}
          startIcon={LinkdinIcon}></LinkButton>
        <LinkButton
          className={_styles.social_icon}
          href={`mailto:${email}`}
          startIcon={EnvelopeIcon}></LinkButton>
        <LinkButton
          href={`tel:${phone}`}
          className={_styles.social_icon}
          startIcon={PhoneIcon}></LinkButton>
      </div>
    </div>
  );
}

Card.propTypes = {
  instance: PropTypes.object,
};

Card.defaultProps = {};

export default Card;
