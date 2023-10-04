import PropTypes from "prop-types";

import { CheckIcon, CloseIcon } from "assets/icons";
import { FilledButton, OutlinedButton } from "components/widgets/buttons";

import _styles from "./_styles.module.css";

const ManageAction = ({ onSubmit, onCancel, isUpdate, submitText, disabled }) => {
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
      <OutlinedButton color="primary" startIcon={CloseIcon} onClick={onCancel}>
        Cancel
      </OutlinedButton>
    </div>
  );
};

ManageAction.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  isUpdate: PropTypes.bool,
  submitText: PropTypes.string,
  disabled: PropTypes.bool,
};
ManageAction.defaultProps = {
  submitText: "Save",
  isUpdate: false,
};

export default ManageAction;
