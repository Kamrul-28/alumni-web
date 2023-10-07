import useNavigation from "hooks/useNavigation";
import { CARDS_ITEMS } from "pages/events/root/_data_";

import { ManageHeader } from "components/modules/headers";
import Form from "./form";

import _styles from "./_styles.module.css";

const Manage = () => {
  const { isUpdate } = useNavigation();
  const data = CARDS_ITEMS[0];

  return (
    <div className={_styles.container}>
      <ManageHeader title="Job Circuler" status={isUpdate ? "Update" : "Create"} />
      <Form isUpdate={isUpdate} instance={isUpdate ? data : {}} />
    </div>
  );
};

export default Manage;
