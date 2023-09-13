import { JOB_CIRCULARS } from "./_data_";
import Card from "./card";
import _styles from "./_styles.module.css";

const JobCircularRoot = () => {
  return (
    <div className={_styles.container}>
      <div className={_styles.card_wraper}>
        {JOB_CIRCULARS?.map((item, index) => (
          <Card key={index} instance={item} />
        ))}
      </div>
    </div>
  );
};

export default JobCircularRoot;
