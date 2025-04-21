import { useMemo } from "react";

interface PaginatedData<T> {
  data: T[];
  page: number;
  limit: number;
  pages: number;
  total: number;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function usePaginatedData<T extends { [key: string]: any }>(
  data: T[],
  page: number,
  limit: number,
  search?: string
): PaginatedData<T> {
  const filteredData = useMemo(() => {
    if (!search) return data;
    const lowercasedSearch = search.toLowerCase();
    return data.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(lowercasedSearch)
      )
    );
  }, [data, search]);

  const startIndex = (page - 1) * limit;
  const paginatedData = filteredData?.slice(startIndex, startIndex + limit);
  const totalPages = Math.ceil(filteredData?.length / limit);
  const totalItems = filteredData?.length;

  return {
    data: paginatedData,
    page,
    limit,
    pages: totalPages,
    total: totalItems,
  };
}

export default usePaginatedData;
