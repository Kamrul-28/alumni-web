import { useState } from "react";

import { BasePagination } from "components/widgets/paginations";
import { RootHeader } from "components/modules/headers";

import useNavigation from "hooks/useNavigation";

import { CARDS_ITEMS } from "./_data_";
import _styles from "./_styles.module.css";

import Card from "./card";

const Events = () => {
  const { query, setPath } = useNavigation();

  const [page, setPage] = useState(1);
  const handlePageChange = (value) => {
    const params = new URLSearchParams({ ...query, page: value });
    setPath({ search: params.toString() });
    setPage(value);
  };

  return (
    <div className={_styles.container}>
      <RootHeader />
      <div className={_styles.card_wraper}>
        {CARDS_ITEMS?.map((item, index) => (
          <Card key={index} instance={item} />
        ))}
      </div>
      <BasePagination count={CARDS_ITEMS.length} onChange={handlePageChange} />
    </div>
  );
};

export default Events;
