'use client';

import { useState, useEffect } from 'react';

type PaginationClientProps = {
  totalPages: number;
  onPageChange: (page: number) => void;
};

const PaginationClient = ({ totalPages, onPageChange }: PaginationClientProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page); // Appelle la fonction pour mettre à jour les données
  };

  return (
    <ul className="flex items-center justify-center pt-8">
      <li className="mx-1">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
        >
          Prev
        </button>
      </li>

      {[...Array(totalPages)].map((_, index) => (
        <li className="mx-1" key={index}>
          <button
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

      <li className="mx-1">
        <button
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
