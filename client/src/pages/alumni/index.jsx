import { getAllBatches } from "./_helper_";

import _styles from "./_styles.module.css";

function Alumni() {
  const all_batches = getAllBatches();
  return (
    <div className={_styles.container}>
      <h1 className={_styles.title}>Graduate Batches</h1>
      <div className={_styles.card_container}>
        {all_batches?.map((year) => (
          <div key={year} className={_styles.card}>
            <p className={_styles.short_year}>{String(year).slice(-2)}02__</p>
            <p className={_styles.full_year}>Batch: {year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Alumni;
