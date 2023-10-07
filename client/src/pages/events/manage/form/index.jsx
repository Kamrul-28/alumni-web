import { useCallback } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import { FieldController } from "components/_controllers";
import { ManageAction } from "components/modules/actions";
import { OutlineInputField } from "components/widgets/inputs";
import { TextAreaInputField } from "components/widgets/inputs";

import useNavigation from "hooks/useNavigation";

import _styles from "./_styles.module.css";

const Form = ({ instance, isUpdate }) => {
  const { backPath } = useNavigation();

  const defaultValues = {
    title: instance?.title || "",
    date: instance?.date || "",
    keywords: instance?.keywords || "",
    img_url: instance?.img_url || "",
    applicant: instance?.applicant || "",
    description: instance?.description || "",
  };

  const { control, handleSubmit } = useForm({ defaultValues });

  const onSubmit = useCallback((data) => {
    // mutate(data);
    console.log("🚀 ~ file: index.jsx:35 ~ onSubmit ~ data:", data);
  }, []);

  const handleCancel = useCallback(
    (event) => {
      backPath();
    },
    [backPath],
  );

  return (
    <div className={_styles.container}>
      <form className={_styles.form_container}>
        <div className={_styles.row_wraper}>
          <FieldController
            name="title"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please provide title",
              },
            }}>
            <OutlineInputField label="Title" />
          </FieldController>
          <FieldController name="keywords" control={control}>
            <OutlineInputField label="Keyword" />
          </FieldController>
        </div>
        <div className={_styles.row_wraper}>
          <FieldController
            name="date"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please provide date",
              },
            }}>
            <OutlineInputField label="Date" type="date" />
          </FieldController>
          <FieldController name="img_url" control={control}>
            <OutlineInputField label="Upload Image" type="file" />
          </FieldController>
        </div>
        <FieldController
          name="description"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please provide description",
            },
          }}>
          <TextAreaInputField label="Description" />
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
