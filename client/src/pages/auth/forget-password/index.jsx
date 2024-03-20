import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { FieldController } from "components/_controllers";
import { FilledButton } from "components/widgets/buttons";
import { OutlineInputField } from "components/widgets/inputs";

import { ApiResponseLoader } from "components/modules/loaders";

import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";

import { forgetPassword } from "services/rest-api/auth";
import { handleFormError } from "services/error-handling";

import _styles from "./_styles.module.css";

function ForgetPassword() {
  const defaultValues = {
    email: "",
  };

  const { control, handleSubmit, setError } = useForm({
    defaultValues: defaultValues,
  });

  const { isPending, mutate } = useMutation({
    mutationFn: forgetPassword,
    onError: (error) => {
      handleFormError(error, setError);
    },
    onSuccess: (data) => {
      toast.success("Successfully Create Account");
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  if (isPending) return <ApiResponseLoader />;

  return (
    <form className={_styles.form}>
      <h2 className={_styles.title}>Forget Password</h2>
      <FieldController
        name="email"
        control={control}
        rules={{
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Invalid email",
          },
          required: {
            value: true,
            message: "Please provide email",
          },
        }}>
        <OutlineInputField label="Email" type="email" />
      </FieldController>
      <FilledButton
        type="submit"
        onClick={handleSubmit(onSubmit)}
        startIcon={ArrowUpOnSquareIcon}>
        Get Reset Link
      </FilledButton>
    </form>
  );
}

export default ForgetPassword;
