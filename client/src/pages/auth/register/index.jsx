import { useForm } from "react-hook-form";

import { FieldController } from "components/__controllers";
import { BaseCheckbox } from "components/widgets/checkboxs";
import { OutlineInputField } from "components/widgets/inputs";
import { OutlineSelectField } from "components/widgets/selects";
import { OutlinedButton } from "components/widgets/buttons";

import { USER_ROLE } from "data/user-accessibility";

import _styles from "./_styles.module.css";

function Register() {
  const defaultValues = {
    email: "",
    password: "",
    re_password: "",
    mobile: "",
    address: "",
    role: "student",
    is_active: true,
  };

  const { control, handleSubmit } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={_styles.container}>
      <h2 className={_styles.title}>Register</h2>
      <FieldController
        name="email"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Please provide email",
          },
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Invalid email",
          },
        }}>
        <OutlineInputField label="Email" type="email" />
      </FieldController>
      <FieldController
        name="password"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Please provide password",
          },
        }}>
        <OutlineInputField label="Passowrd" type="password" />
      </FieldController>
      <FieldController
        name="re_password"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Please provide re enter password",
          },
        }}>
        <OutlineInputField label="Re Passowrd" type="re_password" />
      </FieldController>
      <FieldController name="mobile" control={control}>
        <OutlineInputField label="Mobile" type="mobile" />
      </FieldController>
      <FieldController name="address" control={control}>
        <OutlineInputField label="Address" type="address" />
      </FieldController>
      <FieldController name="role" control={control}>
        <OutlineSelectField items={USER_ROLE} label="Role" />
      </FieldController>
      <FieldController name="is_active" control={control}>
        <BaseCheckbox label="Active" />
      </FieldController>
      <OutlinedButton type="submit" onClick={handleSubmit(onSubmit)}>
        Register
      </OutlinedButton>
    </form>
  );
}

export default Register;
