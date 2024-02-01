import React from 'react';
import { useSearchParams } from 'react-router-dom';

import List3 from '../components/lists/List3/List3';

const List3Page: React.FC = () => {
  const [searchParams] = useSearchParams();

  const page: number = Number(searchParams.get('page')) ?? 1;

  return <div>
    <h1>List 3</h1>
    <List3 page={page} />
  </div>;
};

export default List3Page;
