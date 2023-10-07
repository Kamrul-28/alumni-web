import PropTypes from "prop-types";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/outline";

import { FilledButton, OutlinedButton } from "components/widgets/buttons";

import _styles from "./_styles.module.css";

const ManageAction = (props) => {
  const { onSubmit, onCancel, isUpdate, submitText, disabled } = props;
  return (
    <div className={_styles.action_container}>
      <FilledButton
        type="submit"
        color="primary"
        startIcon={CheckIcon}
        onClick={onSubmit}
        disabled={disabled}>
        {isUpdate ? "Update" : submitText}
      </FilledButton>
      <OutlinedButton color="primary" startIcon={XMarkIcon} onClick={onCancel}>
        Cancel
      </OutlinedButton>
    </div>
  );
};

ManageAction.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  isUpdate: PropTypes.bool,
  disabled: PropTypes.bool,
  submitText: PropTypes.string,
};
ManageAction.defaultProps = {
  submitText: "Save",
  isUpdate: false,
};

export default ManageAction;
