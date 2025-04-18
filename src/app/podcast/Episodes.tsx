"use client";
import {
  Dot,
  FileIcon,
  Gift,
  Gift2,
  Share,
  Share2,
} from "@/components/svg/icon";
import Ads from "@/components/ui/Ads";
import Pagination from "@/components/ui/Pagination";
import { useGetTopPodcasts } from "@/lib/api/actions";
import usePaginatedData from "@/lib/hooks/use-paginated-data";
import useTablePageData from "@/lib/hooks/use-table-page-data";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Skeleton from "react-loading-skeleton";

export default function Episodes() {
  const { data, isSuccess } = useGetTopPodcasts();
  const podcast = data?.data?.data || [];
  const { limit, page, search, setPage } = useTablePageData();
  const totalPages = Math.ceil(podcast?.length / limit);
  const { data: paginatedData } = usePaginatedData(podcast, page, 3, search);
  return (
    <div className="pt-[56px] pb-[174px] app-container">
      <div className="mx-auto app-width grid md:grid-cols-4 grid-cols-3 justify-between xl:gap-[163px] gap-5 ">
        {!isSuccess ? (
          <Skeleton width={300} height={300} />
        ) : (
          isSuccess &&
          podcast && (
            <div className="col-span-3">
              <p className="uppercase font-[800] font-sm text-[#5a5a5a] pb-[19px] w-full border-b border-[#dcdcdc]">
                All Episodes{" "}
                <span className="font-[500]">
                  ({podcast?.length} AVAILABLE)
                </span>
              </p>
              <div className="pb-10">
                {podcast?.slice(0, 5).map((item, i) => (
                  <Link href={`/podcast?id=${item.id}`} key={i}>
                    <div className="pl-4 pt-[26px] pr-[26px] pb-[38px] border-b border-[#dcdcdc] flex gap-[18px] flex-col sm:flex-row ">
                      <Image
                        width={157}
                        height={129}
                        alt="episodes"
                        src={item.picture_url}
                        className="w-full sm:w-auto"
                      />
                      <div>
                        <p className="text-[#828282] uppercase text-[17px] font-[700] flex">
                          {formatDate(item.created_at)}
                          <span>•</span>
                          <span>35 MINS</span>
                        </p>
                        <p className="text-[#787878] text-xl font-[700] pt-[1px] pb-[7px]">
                          {item.title}
                        </p>
                        <p className="text-[15px] text-[#282828] font-[500]">
                          {item.description}
                        </p>
                        <div className="mt-4 flex gap-[21px] h-10 overflow-hidden">
                          <Image
                            width={40}
                            height={40}
                            alt="play"
                            src={"/Play.png"}
                            className="h-10 w-10"
                          />
                          <FileIcon className="w-fit h-fit max-h-fit" />
                          <Share2 className="w-10 h-full" />
                          <Gift2 className="w-10 h-10" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}{" "}
              </div>
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={(page) => setPage(page)}
              />
            </div>
          )
        )}
        <div className="flex md:flex-col gap-[34px] mx-auto flex-row w-full  ">
          <Ads image="/Ads4.png" width={344} height={489} />
          <Image src="/Ads3.png" width={344} height={340} alt="Ads" />
        </div>
      </div>
    </div>
  );
}
