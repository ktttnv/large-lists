import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const useListNavigation = (pageRelativePath: string) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const currentPage = Number(searchParams.get('page')) || 1;
    setPage(currentPage);
  }, [searchParams]);

  const goToPage = (newPage: number) => {
    navigate(`${pageRelativePath}?page=${newPage}`);
  };

  return {
    page,
    goToPage
  };
};

export default useListNavigation;
