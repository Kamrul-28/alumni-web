import PropTypes from "prop-types";

import { JOB_CURCULAR_LOGO } from "assets/images";
import { DeleteIcon, EditIcon, EyeOpenIcon } from "assets/icons";

import { IconButton, OutlinedButton } from "components/widgets/buttons";

import _styles from "./_styles.module.css";

const Card = ({ instance }) => {
  const { title, status, logo_url, category, description } = instance;
  const url = logo_url ?? JOB_CURCULAR_LOGO;

  return (
    <div className={_styles.container}>
      <div className={_styles.card_info_wraper}>
        <img className={_styles.avatar} src={url} alt="logo_url" />
        <p className={_styles.category}>{category}</p>
        <div className={_styles.status_wraper}>
          <p className={_styles.status}>{status}</p>
        </div>
        <p className={_styles.title}>{title}</p>
        <p className={_styles.description}>{description}</p>
      </div>
      <div className={_styles.card_action}>
        <OutlinedButton startIcon={EyeOpenIcon}>View Details</OutlinedButton>
        <div className={_styles.card_action}>
          <IconButton icon={EditIcon}>Edit</IconButton>
          <IconButton icon={DeleteIcon}>Delete</IconButton>
        </div>
      </div>
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
