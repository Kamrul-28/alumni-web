import clsx from "clsx";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { FieldController } from "components/_controllers";
import { TextButton } from "components/widgets/buttons";
import { FilledButton } from "components/widgets/buttons";
import { BaseCheckbox } from "components/widgets/checkboxs";
import { OutlineInputField } from "components/widgets/inputs";
import { OutlineSelectField } from "components/widgets/selects";

import { ApiResponseLoader } from "components/modules/loaders";

import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/outline";

import { createAccount } from "services/rest-api/auth";
// import { handleFormError } from "services/error-handling";
import { QUEUE } from "assets/images";

import { BLOOD_GROUPS } from "./_data";
import _styles from "./_styles.module.css";

function Register() {
  const defaultValues = {
    roll: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    nickName: "",
    email: "",
    phoneNumber: "",
    bloodGroup: "",
    dob: "",
    disciplineId: 2,
    isAgree: true,
  };

  const { control, handleSubmit, watch } = useForm({
    defaultValues: defaultValues,
  });

  const password = watch("password");

  const { isPending, mutate } = useMutation({
    mutationFn: createAccount,
    onSuccess: (data) => {
      toast.success("Successfully Create Account");
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    mutate(data);
  };

  if (isPending) return <ApiResponseLoader />;

  return (
    <div className={_styles.container}>
      <div className={_styles.column}>
        <img
          src={QUEUE}
          alt="studying"
          className={clsx(_styles.image, _styles.mobile)}
        />
        <div className={_styles.title_wrapper}>
          <h2 className={_styles.title}>Register</h2>
          <p>
            Joining the alumni register ensures you stay informed about networking
            events and career advancements within your alumni network.
          </p>
        </div>
        <div className={_styles.login_info}>
          Already have an account?
          <Link to="/login">
            <TextButton
              color="secondary"
              startIcon={ArrowRightOnRectangleIcon}
              onClick={onSubmit}>
              Log in
            </TextButton>
          </Link>
        </div>
      </div>
      <form className={_styles.form}>
        <h2 className={_styles.title}>Create Your Account</h2>
        <div className={_styles.form_row}>
          <FieldController
            name="firstName"
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
            name="roll"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please provide student id",
              },
            }}>
            <OutlineInputField label="Student Id" />
          </FieldController>
          <FieldController name="nickName" control={control}>
            <OutlineInputField label="Nick Name" />
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
            name="email"
            control={control}
            rules={{
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email",
              },
            }}>
            <OutlineInputField label="Email" type="email" />
          </FieldController>
        </div>
        <div className={_styles.form_row}>
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
          <FieldController name="dob" control={control}>
            <OutlineInputField label="Date Of Birth" type="date" />
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
                !Boolean(value) || value === password || "Password mismatch",
            }}>
            <OutlineInputField label="Confirm Passowrd" type="password" />
          </FieldController>
        </div>
        <FieldController
          name="isAgree"
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
    </div>
  );
}

export default Register;
