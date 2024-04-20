import PropTypes from "prop-types";
import { AVATAR } from "assets/images";

import { SOCIAL_CONTACTS } from "./_data";

import _styles from "./_styles.module.css";

const UserInfo = ({ instance }) => {
  const { fullName, photo, shortNote } = instance;

  return (
    <div className={_styles.container}>
      <div className={_styles.avatar}>
        <img src={photo || AVATAR} alt="image" />
      </div>
      <span className={_styles.name}>{fullName}</span>
      <span className={_styles.short_bio}>{shortNote}</span>
      <div className={_styles.social_icons}>
        {SOCIAL_CONTACTS?.map(({ link, icon: Icon }) => (
          <a href={link} key={link} className={_styles.social_link}>
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
};

UserInfo.propTypes = { instance: PropTypes.object };

UserInfo.defaultProps = {
  instance: {},
};

export default UserInfo;
