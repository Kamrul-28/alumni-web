import clsx from "clsx";
import { OutlinedButton } from "components/widgets/buttons";
import { CursorArrowRippleIcon } from "@heroicons/react/24/outline";

import { SHARING, STUDYING } from "assets/images";

import DATA from "./_data_";
import _styles from "./_styles.module.css";

function Scholarship() {
  return (
    <section className={_styles.root}>
      <img src={SHARING} alt="sharing" className={_styles.image} />
      <div className={_styles.container}>
        <h1 className={_styles.title}>{DATA.title}</h1>
        <p className={_styles.description}>{DATA.description}</p>
        <div>
          <OutlinedButton
            endIcon={CursorArrowRippleIcon}
            className={_styles.action_button}>
            Apply Now
          </OutlinedButton>
        </div>
      </div>
      <img
        src={STUDYING}
        alt="studying"
        className={clsx(_styles.image, _styles.mobile)}
      />
    </section>
  );
}

export default Scholarship;
