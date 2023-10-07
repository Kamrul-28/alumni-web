import { useForm } from "react-hook-form";

import { FieldController } from "components/_controllers";
import { BaseCheckbox } from "components/widgets/checkboxs";
import { FilledButton } from "components/widgets/buttons";
import { OutlineInputField } from "components/widgets/inputs";

import { UserPlusIcon } from "@heroicons/react/24/outline";

import _styles from "./_styles.module.css";

function Register() {
  const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    student_id: "",
    mobile: "",
    password: "",
    confirm_password: "",
    is_agree: false,
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
      <div className={_styles.flex_row}>
        <FieldController
          name="first_name"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please provide first name",
            },
          }}>
          <OutlineInputField label="First Name" />
        </FieldController>
        <FieldController name="last_name" control={control}>
          <OutlineInputField label="Last Name" />
        </FieldController>
      </div>
      <div className={_styles.flex_row}>
        {/* <FieldController
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
        </FieldController> */}
        <FieldController
          name="student_id"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please provide student_id",
            },
          }}>
          <OutlineInputField label="Student Id" />
        </FieldController>
        <FieldController name="mobile" control={control}>
          <OutlineInputField label="Mobile" type="mobile" />
        </FieldController>
      </div>
      <div className={_styles.flex_row}>
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
          name="confirm_password"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please provide confirm password",
            },
          }}>
          <OutlineInputField label="Confirm Passowrd" type="confirm_password" />
        </FieldController>
      </div>
      <FieldController
        name="is_agree"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Please provide concent",
          },
        }}>
        <BaseCheckbox label="I accept the terms and conditions" />
      </FieldController>
      <FilledButton
        type="submit"
        onClick={handleSubmit(onSubmit)}
        startIcon={UserPlusIcon}>
        Register
      </FilledButton>
    </form>
  );
}

export default Register;
