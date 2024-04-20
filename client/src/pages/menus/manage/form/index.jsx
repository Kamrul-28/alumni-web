import { useCallback } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { FieldController } from "components/_controllers";
import { ManageAction } from "components/modules/actions";
import { OutlineInputField } from "components/widgets/inputs";
// import { OutlineSelectField } from "components/widgets/selects";
import { ApiResponseLoader } from "components/modules/loaders";

import useNavigation from "hooks/useNavigation";
import { postMenu } from "services/rest-api/menus";
import { handleFormError } from "services/error-handling";

import _styles from "./_styles.module.css";

const Form = ({ instance, isUpdate }) => {
  const { backPath } = useNavigation();

  const defaultValues = {
    name: instance?.name || "",
    link: instance?.link || "",
    identifier: instance?.identifier || "",
  };

  const { control, handleSubmit, setError } = useForm({ defaultValues });

  const { isPending, mutate } = useMutation({
    mutationFn: postMenu,
    onSuccess: (data) => {
      toast.success("Successfully Create!");
    },
    onError: (error) => {
      handleFormError(error, setError);
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  const handleCancel = useCallback(
    (event) => {
      backPath();
    },
    [backPath],
  );

  if (isPending) return <ApiResponseLoader />;

  return (
    <div className={_styles.container}>
      <form className={_styles.form_container}>
        <div className={_styles.row_wraper}>
          <FieldController
            name="name"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please provide name",
              },
            }}>
            <OutlineInputField label="Name" />
          </FieldController>
          <FieldController
            name="identifier"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please provide identifier",
              },
            }}>
            <OutlineInputField label="Identifier" />
          </FieldController>
        </div>
        <FieldController name="link" control={control}>
          <OutlineInputField label="link" />
        </FieldController>
        <ManageAction
          onSubmit={handleSubmit(onSubmit)}
          onCancel={handleCancel}
          isUpdate={isUpdate}
        />
      </form>
    </div>
  );
};

Form.propTypes = {
  isUpdate: PropTypes.bool,
  instance: PropTypes.object,
};

Form.defaultProps = {
  instance: {},
};

export default Form;
