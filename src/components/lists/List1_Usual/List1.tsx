import React from 'react';
import ListElement from './ListItem';

const List1: React.FC = () => {
  const listElementsInfo = Array.from({ length: 100, });

  return <ul>
    {listElementsInfo.map((_, index) => {
      return <ListElement key={index} num={index + 1} />;
    })}
  </ul>;
};

export default List1;
