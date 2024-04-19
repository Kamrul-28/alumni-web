import PropTypes from "prop-types";

import DetailsInfo from "components/modules/info/details";

import { formatBloodGroup } from "utils/format";
import { formatLocalDate } from "utils/date-time";

import _styles from "./_styles.module.css";

const UserDetails = ({ instance }) => {
  const {
    dob,
    roll,
    mobile,
    company,
    nickName,
    bloodGroup,
    profession,
    designation,
    companyAddress,
    presentAddress,
    permanentAddress,
  } = instance;

  return (
    <div className={_styles.container}>
      <div className={_styles.wraper}>
        <span className={_styles.section_title}>{"personal Information"}</span>
        <hr />
        <div className={_styles.info_wraper}>
          <DetailsInfo title="name" info={nickName} />
          <DetailsInfo title="student id" info={roll} />
          <DetailsInfo title="mobile" info={mobile} />
          <DetailsInfo title="blood group" info={formatBloodGroup(bloodGroup)} />
          <DetailsInfo title="birth date" info={formatLocalDate(dob)} />
          <DetailsInfo title="present address" info={presentAddress} />
          <DetailsInfo title="permanent address" info={permanentAddress} />
        </div>
      </div>
      <div className={_styles.wraper}>
        <span className={_styles.section_title}>{"professional Information"}</span>
        <hr />
        <div className={_styles.info_wraper}>
          <DetailsInfo title="profession" info={profession} />
          <DetailsInfo title="designation" info={designation} />
          <DetailsInfo title="company" info={company} />
          <DetailsInfo title="company address" info={companyAddress} />
        </div>
      </div>
    </div>
  );
};

UserDetails.propTypes = { instance: PropTypes.object };

UserDetails.defaultProps = {
  instance: {},
};
export default UserDetails;
