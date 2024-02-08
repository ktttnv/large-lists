import React from 'react';
import List1Item from './List1Item';

type List1Props = {
  size: number;
};

const List1: React.FC<List1Props> = ({ size }) => {
  const listItemsInfo = Array.from({ length: size });

  return <ul>
    {listItemsInfo.map((_, index) => {
      return <List1Item key={index} num={index + 1} />;
    })}
  </ul>;
};

export default List1;
