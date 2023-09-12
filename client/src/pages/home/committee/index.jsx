import { LinkButton } from "components/widgets/buttons";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

import DATA, { CARDS_ITEMS } from "./_data_";
import _styles from "./_styles.module.css";

function Committee() {
  return (
    <section className={_styles.container}>
      <h1 className={_styles.title}>{DATA.title}</h1>
      <p className={_styles.description}>{DATA.description}</p>
      <div className={_styles.card_container}>
        {CARDS_ITEMS?.map(({ full_name, email, photo, phone }) => (
          <div key={full_name} className={_styles.card}>
            <img src={photo} alt={full_name} className={_styles.card_image} />
            <h6>{full_name}</h6>
            <LinkButton href={`mailto:${email}`} startIcon={EnvelopeIcon}>
              {email}
            </LinkButton>
            <LinkButton href={`tel:${phone}`} startIcon={PhoneIcon}>
              {phone}
            </LinkButton>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Committee;
