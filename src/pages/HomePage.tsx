import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return <div>
    <div className="contents">
      <Link to="/list1">List 1. Usual</Link>
      <Link to="/list2">List 2. API connected</Link>
      <Link to="/list3">List 3. Pagination</Link>
      <Link to="/list4">List 4. Load more</Link>
    </div>
  </div>;
};

export default HomePage;
