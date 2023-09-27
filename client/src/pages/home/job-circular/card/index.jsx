import PropTypes from "prop-types";

import { CAMERA } from "assets/images";
import { BookmarkIcon } from "@heroicons/react/24/outline";

import { IconButton } from "components/widgets/buttons";

import _styles from "./_styles.module.css";

const Card = ({ instance }) => {
  const { title, type, salary, keywords, status, logo_url, description } = instance;

  return (
    <div className={_styles.container}>
      <div className={_styles.header}>
        <div className={_styles.header_info}>
          <img
            className={_styles.header_icon}
            src={logo_url || CAMERA}
            alt="logo_url"
          />
          <div className={_styles.header_details}>
            <p className={_styles.title}>{title}</p>
            <div className={_styles.keyword_wraper}>
              <span className={_styles.keyword}>{status}</span>
              <span className={_styles.keyword}>{type}</span>
              <span className={_styles.keyword}> {salary}</span>
            </div>
          </div>
        </div>
        <IconButton icon={BookmarkIcon} />
      </div>
      <p className={_styles.description}>{description}</p>
      <div className={_styles.footer}>
        <div className={_styles.keyword_wraper}>
          {keywords.split(",").map((keyword, index) => (
            <span key={index} className={_styles.keyword}>
              {keyword}
            </span>
          ))}
        </div>
        <span className={_styles.time}>Posted 5min ago</span>
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
