import { useForm } from "react-hook-form";

import { FieldController } from "components/_controllers";
import { BaseCheckbox } from "components/widgets/checkboxs";
import { FilledButton } from "components/widgets/buttons";
import { OutlineInputField } from "components/widgets/inputs";
import { OutlineSelectField } from "components/widgets/selects";

import { UserPlusIcon } from "@heroicons/react/24/outline";

import { BLOOD_GROUPS } from "./_data";
import _styles from "./_styles.module.css";

function Register() {
  const defaultValues = {
    roll: "",
    password: "",
    confirmPassword: "",
    firstname: "",
    lastName: "",
    phoneNumber: "",
    bloodGroup: "",
    disciplineId: 2,
    isAgree: true,
  };

  const { control, handleSubmit, watch } = useForm({
    defaultValues: defaultValues,
  });
  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={_styles.container}>
      <h2 className={_styles.title}>Register</h2>
      <div className={_styles.form_row}>
        <FieldController
          name="firstname"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please provide first name",
            },
          }}>
          <OutlineInputField label="First Name" />
        </FieldController>
        <FieldController name="lastName" control={control}>
          <OutlineInputField label="Last Name" />
        </FieldController>
      </div>
      <div className={_styles.form_row}>
        <FieldController
          name="phoneNumber"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please provide mobile number",
            },
          }}>
          <OutlineInputField label="Mobile" type="tel" />
        </FieldController>
        <FieldController
          name="bloodGroup"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please provide blood group",
            },
          }}>
          <OutlineSelectField label="Blood Group" items={BLOOD_GROUPS} />
        </FieldController>
      </div>
      <div className={_styles.form_row}>
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
          name="confirmPassword"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please provide confirm password",
            },
            validate: (value) =>
              !Boolean(value) || value === password || "Password Mismatch",
          }}>
          <OutlineInputField label="Confirm Passowrd" type="password" />
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
