import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { BasePagination } from "components/widgets/paginations";
import { RootHeader } from "components/modules/headers";
import { ApiResponseLoader } from "components/modules/loaders";

import useNavigation from "hooks/useNavigation";
import { getAllMenus } from "services/rest-api/menus";

import _styles from "./_styles.module.css";

import Card from "./card";

const Root = () => {
  const { query, setPath } = useNavigation();

  const [page, setPage] = useState(1);
  const handlePageChange = (value) => {
    const params = new URLSearchParams({ ...query, page: value });
    setPath({ search: params.toString() });
    setPage(value);
  };

  const { data, isFetching } = useQuery({
    queryKey: ["menus", page],
    queryFn: getAllMenus,
  });

  if (isFetching) return <ApiResponseLoader />;

  const items = (Array.isArray(data) && data) || [];

  return (
    <div className={_styles.container}>
      <RootHeader />
      <div className={_styles.card_wraper}>
        {items?.map((item, index) => (
          <Card key={index} instance={item} />
        ))}
      </div>
      <BasePagination count={items.length} onChange={handlePageChange} />
    </div>
  );
};

export default Root;
