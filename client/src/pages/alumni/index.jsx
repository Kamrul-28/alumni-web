import { useState } from "react";

import { BasePagination } from "components/widgets/paginations";
import useNavigation from "hooks/useNavigation";

import { getAllBatches } from "./_helper_";
import { STUDENTS } from "./_data_";

import StudentCard from "./student-card";
import BatchCard from "./batch-card";

import _styles from "./_styles.module.css";

function Alumni() {
  const { query, setPath } = useNavigation();
  const selected_year = query?.year;

  const all_batches = getAllBatches();

  const [page, setPage] = useState(1);
  const handlePageChange = (value) => {
    const params = new URLSearchParams({ ...query, page: value });
    setPath({ search: params.toString() });
    setPage(value);
  };

  return (
    <div className={_styles.container}>
      <h1 className={_styles.title}>Graduate Batches</h1>
      {Boolean(selected_year) ? (
        <div className={_styles.card_container}>
          {STUDENTS?.map((student, index) => (
            <StudentCard instance={student} key={index} />
          ))}
        </div>
      ) : (
        <div className={_styles.card_container}>
          {all_batches?.map((year) => (
            <BatchCard year={year} key={year} />
          ))}
        </div>
      )}
      <BasePagination count={STUDENTS.length} onChange={handlePageChange} />
    </div>
  );
}

export default Alumni;
