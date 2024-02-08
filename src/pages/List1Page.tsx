import React, { useState } from 'react';
import List1 from '../components/lists/List1_Usual/List1';
import List1SizeInput from '../components/lists/List1_Usual/List1SizeInput';

const List1Page: React.FC = () => {
  const [listSize, setListSize] = useState<number>(100);

  return <div>
    <h1>List 1. Usual</h1>
    <List1SizeInput value={listSize} onSizeChange={setListSize} />
    <List1 size={listSize} />
  </div>;
};

export default List1Page;
