import { useForm } from "react-hook-form";

import { FieldController } from "components/_controllers";
import { OutlineInputField } from "components/widgets/inputs";
import { OutlinedButton } from "components/widgets/buttons";

import _styles from "./_styles.module.css";

function Login() {
  const defaultValues = {
    email: "",
    password: "",
  };

  const { control, handleSubmit } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

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
      <OutlinedButton type="submit" onClick={handleSubmit(onSubmit)}>
        Login
      </OutlinedButton>
    </form>
  );
}

export default Login;
