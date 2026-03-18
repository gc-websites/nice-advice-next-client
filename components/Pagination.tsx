'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
  onPageChange?: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, basePath, onPageChange }: PaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Calculate the base path dynamically if not provided
  const path = basePath || pathname;
  
  const createPageURL = (pageNumber: number | string) => {
    // Fallback to client handler if provided
    if (onPageChange) return '#';
    
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${path}?${params.toString()}`;
  };

  const handlePageClick = (e: React.MouseEvent, pageNumber: number) => {
    if (onPageChange) {
      e.preventDefault();
      onPageChange(pageNumber);
    }
  };

  const pageNumbers = [];
  const maxPageNumbers = 5;
  const halfPageNumbers = Math.floor(maxPageNumbers / 2);

  let startPage = Math.max(currentPage - halfPageNumbers, 1);
  let endPage = Math.min(startPage + maxPageNumbers - 1, totalPages);

  if (endPage - startPage < maxPageNumbers - 1) {
    startPage = Math.max(endPage - maxPageNumbers + 1, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-8 space-x-2">
      <Link
        href={createPageURL(currentPage - 1)}
        onClick={(e) => handlePageClick(e, currentPage - 1)}
        className={`font-inter px-3 py-1 border rounded transition-colors ${
          currentPage === 1 ? 'opacity-50 pointer-events-none' : ''
        }`}
      >
        &larr; <span className="hidden md:inline-block">Prev</span>
      </Link>
      {pageNumbers.map(number => (
        <Link
          key={number}
          href={createPageURL(number)}
          onClick={(e) => handlePageClick(e, number)}
          className={`font-inter px-3 py-1 border rounded transition-colors ${
            number === currentPage ? 'bg-main2 text-white' : ''
          }`}
        >
          {number}
        </Link>
      ))}
      <Link
        href={createPageURL(currentPage + 1)}
        onClick={(e) => handlePageClick(e, currentPage + 1)}
        className={`font-inter px-3 py-1 border rounded transition-colors ${
          currentPage === totalPages ? 'opacity-50 pointer-events-none' : ''
        }`}
      >
        <span className="hidden md:inline-block">Next</span> &rarr;
      </Link>
    </div>
  );
};

export default Pagination;
