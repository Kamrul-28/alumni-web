import { useQuery } from "@tanstack/react-query";

import { ManageHeader } from "components/modules/headers";
import { ApiResponseLoader } from "components/modules/loaders";

import useNavigation from "hooks/useNavigation";
import { getMenu } from "services/rest-api/menus";

import Form from "./form";

import _styles from "./_styles.module.css";

const Manage = () => {
  const { isUpdate } = useNavigation();

  const { data, isFetching } = useQuery({
    queryKey: ["menu"],
    queryFn: getMenu,
    enabled: isUpdate,
  });

  if (isFetching) return <ApiResponseLoader />;

  return (
    <div className={_styles.container}>
      <ManageHeader title="Job Circuler" status={isUpdate ? "Update" : "Create"} />
      <Form isUpdate={isUpdate} instance={isUpdate ? data : {}} />
    </div>
  );
};

export default Manage;
