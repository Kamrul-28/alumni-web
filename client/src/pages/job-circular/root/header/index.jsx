import { FilledButton, TextButton } from "components/widgets/buttons";
import { AddIcon, SearchIcon } from "assets/icons";
import _styles from "./_styles.module.css";

const Header = () => {
  return (
    <div className={_styles.container}>
      <div className={_styles.header_left}>
        <FilledButton startIcon={AddIcon} color="secondary">
          Create
        </FilledButton>
        |<span>Total: 10</span>
      </div>
      <div>
        <TextButton color="secondary" startIcon={SearchIcon}>
          Advance Search
        </TextButton>
      </div>
    </div>
  );
};

export default Header;
