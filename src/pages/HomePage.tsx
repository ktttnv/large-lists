import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return <div>
    <div>
      <Link to="/list1">List 1</Link>
      <Link to="/list2">List 2</Link>
      <Link to="/list3">List 3</Link>
    </div>
  </div>;
};

export default HomePage;
