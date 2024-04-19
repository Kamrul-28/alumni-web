import { useQuery } from "@tanstack/react-query";

import { getUserInfo } from "services/rest-api/users";

import { DEFAULT_DATA } from "./_data";

import UserInfo from "./user-info";
import UserDetails from "./user-details";

import _styles from "./_styles.module.css";

const MyProfile = () => {
  const { data: user_info } = useQuery({
    queryKey: ["user-info"],
    queryFn: getUserInfo,
  });

  const data = user_info || DEFAULT_DATA;

  return (
    <div className={_styles.container}>
      <div>
        <UserInfo instance={data} />
      </div>
      <div>
        <UserDetails instance={data} />
      </div>
      <div>
        <></>
      </div>
    </div>
  );
};

export default MyProfile;
