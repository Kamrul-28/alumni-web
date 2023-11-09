import handleFetchError from "./fetch-error";

const handleFormError = (error, setFieldError) => {
  const { status, message } = error?.response || {};

  if (status === 400 && typeof message === "object") {
    for (let [key, value] of Object.entries(message)) {
      setFieldError(key, {
        type: "manual",
        message: value,
      });
    }
  } else handleFetchError(error);
};

export default handleFormError;
