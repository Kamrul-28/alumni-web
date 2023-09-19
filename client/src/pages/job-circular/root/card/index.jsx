import PropTypes from "prop-types";

import { JOB_CURCULAR_LOGO } from "assets/images";
import { BookmarkIcon } from "assets/icons";

import { IconButton } from "components/widgets/buttons";

import _styles from "./_styles.module.css";

const Card = ({ instance }) => {
  const { title, type, salary, applicant, keywords, status, logo_url, description } =
    instance;
  const url = logo_url ?? JOB_CURCULAR_LOGO;

  return (
    <div className={_styles.container}>
      <div className={_styles.header}>
        <div className={_styles.header_info}>
          <img className={_styles.header_icon} src={url} alt="logo_url" />
          <div className={_styles.header_details}>
            <p className={_styles.title}>{title}</p>
            <div className={_styles.subtitle}>
              <div className={_styles.text_wraper_box}>
                <span className={_styles.status}>{status}</span>
              </div>
              <div className={_styles.text_wraper_box}>
                <span>{type}</span>
              </div>
              <span className={_styles.dot}>&#9679;</span>
              <span>{salary}</span>
              <span className={_styles.dot}>&#9679;</span>
              <span>{applicant} Applicant</span>
            </div>
          </div>
        </div>
        <div className={_styles.header_right}>
          <IconButton icon={BookmarkIcon} />
        </div>
      </div>
      <div className="content">
        <p className={_styles.description}>{description}</p>
      </div>
      <div className={_styles.footer_wraper}>
        <div className={_styles.footer_left}>
          {keywords.split(",").map((keyword, index) => (
            <>
              <div className={_styles.keyword_wraper_box} key={index}>
                <span className={_styles.su}>{keyword}</span>
              </div>
            </>
          ))}
        </div>
        <div className={_styles.footer_right}>
          <span>Posted 5min ago</span>
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
