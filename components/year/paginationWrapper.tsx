'use client';

import { useSearchParams } from 'next/navigation';
import Pagination from './pagination'; // Composant client déjà défini

type PaginationWrapperProps = {
  totalPages: number;
};

const PaginationWrapper = ({ totalPages }: PaginationWrapperProps) => {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1');

  return <Pagination currentPage={currentPage} totalPages={totalPages} />;
};

export default PaginationWrapper;
