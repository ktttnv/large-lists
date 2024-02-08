import { useState } from 'react';

const useLoadMoreNavigation = () => {
  const [page, setPage] = useState(1);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return {
    page,
    loadMore
  };
};

export default useLoadMoreNavigation;
