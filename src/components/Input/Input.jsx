import React, { useState } from "react";

const Input = ({ type }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <div>
      {type !== "textarea" ? (
        <input
          type={type}
          value={inputValue}
          onChange={handleInputChange}
          autoComplete="off"
          lang="ko"
        />
      ) : (
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          autoComplete="off"
          lang="ko"
        ></textarea>
      )}
    </div>
  );
};

export default Input;
