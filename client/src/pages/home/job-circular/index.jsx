import DATA, { JOB_CIRCULARS } from "./_data_";

import Card from "./card";
import _styles from "./_styles.module.css";

function JobCircularRoot() {
  return (
    <section className={_styles.container}>
      <h1 className={_styles.title}>{DATA.title}</h1>
      <p className={_styles.description}>{DATA.description}</p>
      <div className={_styles.card_container}>
        {JOB_CIRCULARS?.map((item, index) => (
          <Card key={index} instance={item} />
        ))}
      </div>
    </section>
  );
}

export default JobCircularRoot;
