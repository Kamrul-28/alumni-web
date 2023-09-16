import { JOB_CIRCULARS } from "./_data_";
import _styles from "./_styles.module.css";

import Card from "./card";
import Header from "./header";

const JobCircularRoot = () => {
  return (
    <div className={_styles.container}>
      <Header />
      <div className={_styles.card_wraper}>
        {JOB_CIRCULARS?.map((item, index) => (
          <Card key={index} instance={item} />
        ))}
      </div>
    </div>
  );
};

export default JobCircularRoot;
