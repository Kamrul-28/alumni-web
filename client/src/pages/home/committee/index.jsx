import DATA, { CARDS_ITEMS } from "./_data_";

import Card from "./card";
import _styles from "./_styles.module.css";

function Committee() {
  return (
    <section className={_styles.container}>
      <h1 className={_styles.title}>{DATA.title}</h1>
      <p className={_styles.description}>{DATA.description}</p>
      <div className={_styles.card_container}>
        {CARDS_ITEMS?.map((person, index) => (
          <Card key={index} instance={person} />
        ))}
      </div>
    </section>
  );
}

export default Committee;
