import React from 'react';

type ListProps = {
  num: number;
}

const ListItem: React.FC<ListProps> = ({num}) => {
  return <li>List Item {num}</li>;
};

export default ListItem;
