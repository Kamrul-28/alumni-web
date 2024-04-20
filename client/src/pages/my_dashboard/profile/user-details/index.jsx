import PropTypes from "prop-types";

import DetailsInfo from "components/modules/info/details";

import { formatLocalDate } from "utils/date-time";
import { formatBloodGroup } from "./_data";

import _styles from "./_styles.module.css";

const UserDetails = ({ instance }) => {
  const { dob, roll, nickName, bloodGroup, contactDetail } = instance;

  const {
    email,
    company,
    phoneNumber,
    profession,
    designation,
    companyAddress,
    presentAddress,
    permanentAddress,
  } = contactDetail || {};

  return (
    <div className={_styles.container}>
      <div className={_styles.wraper}>
        <span className={_styles.section_title}>personal Information</span>
        <hr />
        <div className={_styles.info_wraper}>
          <DetailsInfo title="nick name" info={nickName} />
          <DetailsInfo title="student id" info={roll} />
          <DetailsInfo title="blood group" info={formatBloodGroup(bloodGroup)} />
          <DetailsInfo title="birth date" info={dob && formatLocalDate(dob)} />
          <DetailsInfo title="mobile" info={phoneNumber} />
          <DetailsInfo title="email" info={email} />
          <DetailsInfo title="present address" info={presentAddress} />
          <DetailsInfo title="permanent address" info={permanentAddress} />
        </div>
      </div>
      <div className={_styles.wraper}>
        <span className={_styles.section_title}>professional Information</span>
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
