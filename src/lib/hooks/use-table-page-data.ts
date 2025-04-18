"use client";
import React from "react";
interface TableDataPageProps {
  getPage?: number;
  getLimit?: number;
  getSearch?: string;
}

const useTablePageData = ({
  getPage = 1,
  getLimit = 20,
  getSearch = "",
}: TableDataPageProps = {}) => {
  const [page, setPage] = React.useState(getPage);
  const [limit, setLimit] = React.useState(getLimit);
  const [search, setSearch] = React.useState(getSearch);

  return { page, setPage, limit, setLimit, search, setSearch };
};
export default useTablePageData;
