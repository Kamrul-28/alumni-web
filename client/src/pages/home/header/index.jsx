import { OutlinedButton } from "components/widgets/buttons";
import { ArrowRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import DATA, { SOCIAL_CONTACTS } from "./_data_";
import _styles from "./_styles.module.css";

const Header = () => {
  return (
    <section className={_styles.container}>
      <div className={_styles.social_actions}>
        {SOCIAL_CONTACTS?.map(({ link, icon: Icon }) => (
          <a href={link} key={link} className={_styles.social_link}>
            <Icon />
          </a>
        ))}
      </div>
      <div>
        <h1 className={_styles.title}>{DATA.title}</h1>
        <h2 className={_styles.sub_title}>{DATA.sub_title}</h2>
        <p className={_styles.description}>{DATA.description}</p>
        <div className={_styles.action_buttons}>
          <OutlinedButton endIcon={ArrowRightIcon}>Join Now</OutlinedButton>
        </div>
      </div>
    </section>
  );
};

export default Header;
