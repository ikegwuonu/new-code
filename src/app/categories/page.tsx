"use client";
//import { Ellipsis } from "@/components/svg/icon";
import React, { useEffect } from "react";
import PodcastCard from "./PodcastCard";
import Image from "next/image";
import { useGetPodcastEpisodes, useGetTopCategories } from "@/lib/api/actions";
import Pagination from "@/components/ui/Pagination";
import useTablePageData from "@/lib/hooks/use-table-page-data";
import usePaginatedData from "@/lib/hooks/use-paginated-data";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import {
  filterType,
  setCategory,
  setFilter,
  setPodcast,
} from "@/lib/store/filterSlice";

export default function Page() {
  const reduxData = useSelector(
    (state: RootState) => state.filterSort
  ).filteredPodcast;
  const dispatch = useDispatch<AppDispatch>();
  const { data: categoryData } = useGetTopCategories();
  const categories = categoryData?.data || [];
  const { isSuccess: isEpisodeSuccess, data } = useGetPodcastEpisodes("1");

  const podcasts = data?.data?.data || [];
  const { limit, page, search, setPage } = useTablePageData();
  const totalPages = Math.ceil(reduxData?.length / limit);
  const { data: paginatedData } = usePaginatedData(
    reduxData,
    page,
    limit,
    search
  );

  const categoriesOption =
    Array.from(
      Array.from(
        new Set(data?.data?.data.flatMap((item) => item.category_type))
      )
    ) || [];
  useEffect(() => {
    if (podcasts) {
      dispatch(setPodcast(podcasts));
      dispatch(setFilter("all"));
    }
  }, [isEpisodeSuccess]);
  return (
    <div className="bg-[#fcfcfc] app-container pb-[87px]">
      <div className="mx-auto app-width">
        <p className="uppercase text-[#5a5a5a] text-[28px] font-[800] pt-[76px] pb-[17px] ">
          All podcasts
        </p>
        <div className="pt-[27px] border-y-2 border-[#dcdcdc] pb-[53px]">
          <div className="flex pb-[33px] gap-5 flex-wrap">
            <div className="flex  items-center">
              <p className="text-[#5a5a5a] text-base font-[500] flex gap-1">
                Sort by :{" "}
              </p>

              <select
                value={"all"}
                onChange={(e) =>
                  dispatch(setFilter(e.target.value as filterType))
                }
              >
                <option value={"all"} className=" font-[700] text-[#282828]">
                  All ...
                </option>
                <option value={"latest"} className=" font-[700] text-[#282828]">
                  Latest
                </option>
                <option value={"popular"} className="font-[700] text-[#282828]">
                  Popular
                </option>
              </select>
            </div>

            <p className="w-1.5 text-[#979797]">|</p>
            <div className="flex items-center flex-wrap">
              <p className="text-[#5a5a5a] text-base font-[500] flex gap-1">
                Sort by category :{" "}
              </p>
              <select
                value={categoriesOption || ""}
                onChange={(e) => dispatch(setCategory(e.target.value))}
              >
                {isEpisodeSuccess &&
                  categoriesOption.length > 0 &&
                  categoriesOption.map((item) => (
                    <option
                      value={item}
                      key={item}
                      className="flex gap-1 font-[700] text-[#282828]"
                    >
                      {item}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-10 pb-[77px]">
            {paginatedData.length > 0 &&
              paginatedData?.map((podcast, i) => (
                <PodcastCard key={i} podcast={podcast} />
              ))}
          </div>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(page) => setPage(page)}
          />
        </div>

        <div>
          <p className="pt-[66px] pb-[39px] text-[#5a5a5a] text-[28px] font-[800]">
            Explore other categories
          </p>
          <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-[30px] ">
            {categories ? (
              categories.length > 0 &&
              categories.slice(0, 4).map((category, i) => (
                <div className="relative h-full" key={i}>
                  <Image
                    src={category?.image_url}
                    width={306}
                    height={177}
                    alt="Editor"
                    className="h-[277px] w-full"
                  />
                  <div className="py-3 px-[25px]  absolute w-full left-0 bottom-0 bg-black bg-gradient-to-b from-transparent to-black opacity-50 flex gap-4 items-center">
                    <p className="text-white text-2xl font-[800]">
                      {category?.name}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <Skeleton width={306} height={177} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
