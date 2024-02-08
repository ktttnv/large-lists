import React from 'react';

type List1ItemProps = {
  num: number;
}

const List1Item: React.FC<List1ItemProps> = ({num}) => {
  return <li>List Item {num}</li>;
};

export default List1Item;
