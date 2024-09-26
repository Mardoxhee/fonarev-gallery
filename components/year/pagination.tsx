'use client';

import { useState } from 'react';

type PaginationClientProps = {
  totalPages: number;
  onPageChange: (page: number) => void;
};

const PaginationClient = ({ totalPages, onPageChange }: PaginationClientProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Function to handle page change
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return; // Prevent invalid page changes
    setCurrentPage(page);
    onPageChange(page); // Call the function to update the data
  };

  return (
    <ul className="flex items-center justify-center pt-8">
      {/* Previous Button */}
      <li className="mx-1">
        <button
          aria-label="Previous Page"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
        >
          Prev
        </button>
      </li>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => (
        <li className="mx-1" key={index}>
          <button
            aria-label={`Page ${index + 1}`}
            onClick={() => handlePageChange(index + 1)}
            className={`flex h-9 min-w-[36px] items-center justify-center rounded-md ${
              currentPage === index + 1
                ? 'bg-primary text-white'
                : 'bg-body-color bg-opacity-[15%] text-body-color'
            } px-4 text-sm transition hover:bg-primary hover:bg-opacity-100 hover:text-white`}
          >
            {index + 1}
          </button>
        </li>
      ))}

      {/* Next Button */}
      <li className="mx-1">
        <button
          aria-label="Next Page"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default PaginationClient;
