import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { FieldController } from "components/_controllers";
import { OutlineInputField } from "components/widgets/inputs";
import { FilledButton } from "components/widgets/buttons";
import { TextButton } from "components/widgets/buttons";

import { ApiResponseLoader } from "components/modules/loaders";

import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/outline";

import { createUser } from "services/rest-api/users";
// import { handleFormError } from "services/error-handling";

import _styles from "./_styles.module.css";

function Login() {
  const defaultValues = {
    email: "",
    password: "",
  };

  const { control, handleSubmit } = useForm({
    defaultValues: defaultValues,
  });

  const { isPending, mutate } = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      toast.success("Successfully Create Account");
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    mutate(data);
  };

  if (isPending) return ApiResponseLoader;

  return (
    <form className={_styles.container}>
      <h2 className={_styles.title}>Login</h2>
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
      <FilledButton
        type="submit"
        onClick={handleSubmit(onSubmit)}
        startIcon={ArrowRightOnRectangleIcon}>
        Login
      </FilledButton>
      <div className={_styles.register_info}>
        Want to create account?
        <TextButton color="secondary" startIcon={UserPlusIcon}>
          Register
        </TextButton>
      </div>
    </form>
  );
}

export default Login;
