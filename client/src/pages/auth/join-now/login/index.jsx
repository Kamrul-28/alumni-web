import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

import { FieldController } from "components/_controllers";
import { FilledButton } from "components/widgets/buttons";
import { OutlineInputField } from "components/widgets/inputs";
import { ApiResponseLoader } from "components/modules/loaders";

import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

import { attemptLogin } from "services/rest-api/auth";
import { handleFormError } from "services/error-handling";

import _styles from "./_styles.module.css";

function Login() {
  const defaultValues = {
    identifier: "",
    password: "",
    loginType: "ROLL",
  };

  const { control, handleSubmit, setError } = useForm({
    defaultValues: defaultValues,
  });

  const { isPending, mutate } = useMutation({
    mutationFn: attemptLogin,
    onSuccess: (data) => {
      toast.success("Successfully Create Account");
    },
    onError: (error) => {
      handleFormError(error, setError);
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  if (isPending) return <ApiResponseLoader />;

  return (
    <form className={_styles.container}>
      <h2 className={_styles.title}>Login</h2>
      <FieldController
        name="identifier"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Please provide student id",
          },
        }}>
        <OutlineInputField label="Student Id" />
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
    </form>
  );
}

export default Login;
