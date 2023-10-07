import useNavigation from "hooks/useNavigation";
import { JOB_CIRCULARS } from "pages/job-circular/root/_data_.js";

import { ManageHeader } from "components/modules/headers";
import Form from "./form";

import _styles from "./_styles.module.css";

const JobCircularManage = () => {
  const { isUpdate } = useNavigation();
  const data = JOB_CIRCULARS[0];

  return (
    <div className={_styles.container}>
      <ManageHeader title="Job Circuler" status={isUpdate ? "Update" : "Create"} />
      <Form isUpdate={isUpdate} instance={isUpdate ? data : {}} />
    </div>
  );
};

export default JobCircularManage;
