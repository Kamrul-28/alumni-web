import { useCallback } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import { FieldController } from "components/_controllers";
import { OutlineInputField } from "components/widgets/inputs";
import { OutlineSelectField } from "components/widgets/selects";

import useNavigation from "hooks/useNavigation";
import { STATUS, TYPE } from "data/job-circular";

import ManageAction from "../manage-action";

import _styles from "./_styles.module.css";

const Form = ({ instance, isUpdate }) => {
  const { backPath } = useNavigation();

  const defaultValues = {
    type: instance?.type || "",
    title: instance?.title || "",
    salary: instance?.salary || "",
    status: instance?.status || "",
    keywords: instance?.keywords || "",
    logo_url: instance?.logo_url || "",
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
        <div className={_styles.form_inner_container}>
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
        </div>
        <div className={_styles.form_inner_container}>
          <FieldController name="logo_url" control={control}>
            <OutlineInputField label="Upload Logo" type="file" />
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
          <OutlineInputField label="Description" />
        </FieldController>
        <div className={_styles.row_wraper}>
          <FieldController
            name="type"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please provide type",
              },
            }}>
            <OutlineSelectField items={TYPE} label="Type" />
          </FieldController>
          <FieldController
            name="status"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please provide status",
              },
            }}>
            <OutlineSelectField items={STATUS} label="Status" />
          </FieldController>
        </div>
        <div className={_styles.row_wraper}>
          <FieldController
            name="salary"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please provide salary",
              },
            }}>
            <OutlineInputField label="Salary" />
          </FieldController>
          <FieldController name="keywords" control={control}>
            <OutlineInputField label="Keyword" />
          </FieldController>
        </div>
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
