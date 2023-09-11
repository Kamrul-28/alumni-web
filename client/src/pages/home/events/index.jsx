import { TextButton } from "components/widgets/buttons";
import { formatShortMonth } from "utils/date-helper";
import DATA, { CARDS_ITEMS } from "./_data_";
import _styles from "./_styles.module.css";

function Events() {
  return (
    <section className={_styles.container}>
      <h1 className={_styles.title}>{DATA.title}</h1>
      <p className={_styles.description}>{DATA.description}</p>
      <div className={_styles.card_container}>
        {CARDS_ITEMS?.map(({ title, description, cover, date }) => (
          <div key={title} className={_styles.card}>
            <img src={cover} alt={title} className={_styles.card_img} />
            <time className={_styles.card_date}>{formatShortMonth(date)}</time>
            <h6>{title}</h6>
            <p>{description}</p>
            <TextButton>Learn More</TextButton>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
