import { useQuery } from "@tanstack/react-query";

import { getUserInfo } from "services/rest-api/users";

import UserInfo from "./user-info";
import UserDetails from "./user-details";

import _styles from "./_styles.module.css";

const MyProfile = () => {
  const { data } = useQuery({
    queryKey: ["user-info"],
    queryFn: getUserInfo,
  });

  return (
    <div className={_styles.container}>
      <UserInfo instance={data} />
      <UserDetails instance={data} />
    </div>
  );
};

export default MyProfile;
