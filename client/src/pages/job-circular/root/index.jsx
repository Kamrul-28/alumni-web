import { useState } from "react";

import { BasePagination } from "components/widgets/paginations";
import useNavigation from "hooks/useNavigation";

import { JOB_CIRCULARS } from "./_data_";
import _styles from "./_styles.module.css";

import Card from "./card";
import Header from "./header";

const JobCircularRoot = () => {
  const { query, setPath } = useNavigation();

  const [page, setPage] = useState(1);
  const handlePageChange = (value) => {
    const params = new URLSearchParams({ ...query, page: value });
    setPath({ search: params.toString() });
    setPage(value);
  };

  return (
    <div className={_styles.container}>
      <Header />
      <div className={_styles.card_wraper}>
        {JOB_CIRCULARS?.map((item, index) => (
          <Card key={index} instance={item} />
        ))}
      </div>
      <BasePagination count={JOB_CIRCULARS.length} onChange={handlePageChange} />
    </div>
  );
};

export default JobCircularRoot;
