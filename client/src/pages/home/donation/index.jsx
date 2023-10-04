import clsx from "clsx";
import { OutlinedButton } from "components/widgets/buttons";
import { CursorArrowRippleIcon } from "@heroicons/react/24/outline";

import { DONATION, RELIEF } from "assets/images";

import DATA from "./_data_";
import _styles from "./_styles.module.css";

function Donation() {
  return (
    <section className={_styles.root}>
      <img src={DONATION} alt="sharing" className={_styles.image} />
      <div className={_styles.container}>
        <h1 className={_styles.title}>{DATA.title}</h1>
        <p className={_styles.description}>{DATA.description}</p>
        <div>
          <OutlinedButton
            endIcon={CursorArrowRippleIcon}
            className={_styles.action_button}>
            Donate
          </OutlinedButton>
        </div>
      </div>
      <img
        src={RELIEF}
        alt="studying"
        className={clsx(_styles.image, _styles.mobile)}
      />
    </section>
  );
}

export default Donation;
