import React, { useState } from 'react';

type List1SizeInputProps = {
  value: number;
  onSizeChange: (newValue: number) => void;
};

const List1SizeInput: React.FC<List1SizeInputProps> = ({ value, onSizeChange }) => {
  const [inputValue, setInputValue] = useState<number>(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };

  const handleButtonClick = () => {
    onSizeChange(inputValue);
  };

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        min="1"
      />
      <button onClick={handleButtonClick}>OK</button>
    </div>
  );
};

export default List1SizeInput;
