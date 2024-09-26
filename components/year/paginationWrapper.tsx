// paginationWrapper.tsx

'use client';

import { useSearchParams } from 'next/navigation';
import Pagination from './pagination'; // Make sure this path is correct

type PaginationWrapperProps = {
  totalPages: number;
};

const PaginationWrapper = ({ totalPages }: PaginationWrapperProps) => {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1');

  // return <Pagination currentPage={currentPage} totalPages={totalPages} />;
  return <div></div>
};

export default PaginationWrapper;
