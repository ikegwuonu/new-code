import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MoveLeft, MoveRight } from "../svg/icon";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}) => {
  const range = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, idx) => start + idx);
  };

  const generatePagination = () => {
    const totalNumbers = siblingCount * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages <= totalBlocks) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, -1, totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [1, -1, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [1, -1, ...middleRange, -1, totalPages];
    }

    return [];
  };

  const pages = generatePagination();

  const baseButtonStyles =
    "h-6 px-2 flex items-center justify-center rounded-lg transition-colors duration-200 text-[13px] cursor-pointer";
  const activeButtonStyles =
    "bg-[#2c2c2c] text-white rounded-lg text-[13px] cursor-pointer";
  const inactiveButtonStyles =
    "text-black bg-[#AEAEAE]  hover:bg-gray-100 cursor-pointer";
  const disabledButtonStyles =
    "text-gray-300 cursor-not-allowed hover:bg-transparent";

  return (
    <nav
      className="flex items-center justify-center space-x-2 h-"
      aria-label="Pagination"
    >
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={` ${currentPage === 1 && "cursor-not-allowed"}`}
        aria-label="Previous page"
      >
        {currentPage === 1 ? (
          <MoveRight />
        ) : (
          <MoveLeft className="rotate-180" />
        )}
      </button>
      {/* <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${baseButtonStyles} ${
          currentPage === 1 ? disabledButtonStyles : inactiveButtonStyles
        }`}
        aria-label="Previous page"
      >
        <ChevronLeft size={20} />
      </button> */}

      {pages.map((pageNumber, idx) => {
        if (pageNumber === -1) {
          return (
            <span
              key={`ellipsis-${idx}`}
              className="px-4 h-10 flex items-center justify-center text-gray-500"
            >
              ...
            </span>
          );
        }

        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`${baseButtonStyles} ${
              pageNumber === currentPage
                ? activeButtonStyles
                : inactiveButtonStyles
            }`}
            aria-current={pageNumber === currentPage ? "page" : undefined}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className={` ${currentPage === totalPages && "cursor-not-allowed"}`}
        aria-label="Next page"
      >
        {currentPage === totalPages ? (
          <MoveRight className="rotate-180" />
        ) : (
          <MoveLeft />
        )}
      </button>
    </nav>
  );
};

export default Pagination;
