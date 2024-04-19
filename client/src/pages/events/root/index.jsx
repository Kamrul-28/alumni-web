import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { BasePagination } from "components/widgets/paginations";
import { RootHeader } from "components/modules/headers";
import { ApiResponseLoader } from "components/modules/loaders";

import useNavigation from "hooks/useNavigation";
import { getAllEvents } from "services/rest-api/events";

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

  const { data, isFetching } = useQuery({
    queryKey: ["events", page],
    queryFn: getAllEvents,
  });

  if (isFetching) return <ApiResponseLoader />;

  const items = (Array.isArray(data) && data) || CARDS_ITEMS || [];

  return (
    <div className={_styles.container}>
      <RootHeader />
      <div className={_styles.card_wraper}>
        {items?.map((item, index) => (
          <Card key={index} instance={item} />
        ))}
      </div>
      <BasePagination count={CARDS_ITEMS.length} onChange={handlePageChange} />
    </div>
  );
};

export default Events;
