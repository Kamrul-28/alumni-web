import { LinkButton } from "components/widgets/buttons";
import { FilledButton } from "components/widgets/buttons";
import { OutlinedButton } from "components/widgets/buttons";

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FacebookIcon } from "assets/icons";

import DATA, { CARDS_ITEMS } from "./_data_";
import _styles from "./_styles.module.css";

function Committee() {
  return (
    <section className={_styles.container}>
      <h1 className={_styles.title}>{DATA.title}</h1>
      <p className={_styles.description}>{DATA.description}</p>
      <div className={_styles.card_container}>
        {CARDS_ITEMS?.map((person) => (
          <div key={person.full_name} className={_styles.card}>
            <img
              src={person.photo}
              alt={person.full_name}
              className={_styles.card_image}
            />
            <div className={_styles.card_content}>
              <h2>{person.full_name}</h2>
              <p>{person.designation}</p>
            </div>
            <div className={_styles.card_contacts}>
              <LinkButton
                href={person.facebook}
                className={_styles.social_icon}
                startIcon={FacebookIcon}></LinkButton>
              <LinkButton
                className={_styles.social_icon}
                href={`mailto:${person.email}`}
                startIcon={EnvelopeIcon}></LinkButton>
              <LinkButton
                href={`tel:${person.phone}`}
                className={_styles.social_icon}
                startIcon={PhoneIcon}></LinkButton>
            </div>
            <div className={_styles.card_actions}>
              <OutlinedButton>About me</OutlinedButton>
              <FilledButton>Message</FilledButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Committee;
