import { useCallback } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { FieldController } from "components/_controllers";
import { ManageAction } from "components/modules/actions";
import { OutlineInputField } from "components/widgets/inputs";
import { TextAreaInputField } from "components/widgets/inputs";

import { ApiResponseLoader } from "components/modules/loaders";

import useNavigation from "hooks/useNavigation";
import { creatEvent } from "services/rest-api/events";
import { handleFormError } from "services/error-handling";

import _styles from "./_styles.module.css";

const Form = ({ instance, isUpdate }) => {
  const { backPath } = useNavigation();

  const defaultValues = {
    eventName: instance?.eventName || "",
    eventDate: instance?.eventDate || "",
    eventTime: instance?.eventTime || "",
    eventLink: instance?.eventLink || "",
    eventLocation: instance?.eventLocation || "",
    eventDescription: instance?.eventDescription || "",
  };

  const { control, handleSubmit, setError } = useForm({ defaultValues });

  const { isPending, mutate } = useMutation({
    mutationFn: creatEvent,
    onSuccess: (data) => {
      toast.success("Successfully Create.");
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
            name="eventName"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please provide Title",
              },
            }}>
            <OutlineInputField label="Title" />
          </FieldController>
          <FieldController
            name="eventLocation"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please provide Location",
              },
            }}>
            <OutlineInputField label="Location" />
          </FieldController>
        </div>
        <div className={_styles.row_wraper}>
          <FieldController
            name="eventDate"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please provide Date",
              },
            }}>
            <OutlineInputField label="Date" type="date" />
          </FieldController>
          <FieldController
            name="eventTime"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please provide Time",
              },
            }}>
            <OutlineInputField label="Time" type="time" />
          </FieldController>
        </div>
        <div className={_styles.row_wraper}>
          <FieldController name="eventLink" control={control}>
            <OutlineInputField label="Link" type="url" />
          </FieldController>
          <FieldController name="img_url" control={control}>
            <OutlineInputField label="Upload Image" type="file" />
          </FieldController>
        </div>
        <FieldController
          name="eventDescription"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please provide Description",
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
