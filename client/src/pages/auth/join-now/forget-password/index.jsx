import { Link } from "react-router-dom";

import { TextButton } from "components/widgets/buttons";

import { BugAntIcon } from "@heroicons/react/24/outline";

import _styles from "./_styles.module.css";

function ForgetPassowrd() {
  return (
    <div className={_styles.container}>
      Forget Password?
      <Link to="/forget-password">
        <TextButton color="secondary" startIcon={BugAntIcon}>
          Reset Here
        </TextButton>
      </Link>
    </div>
  );
}

export default ForgetPassowrd;
