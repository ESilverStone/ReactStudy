import React from "react";
import Option from "./Option/Option";

const Select = ({ options, onSelect }) => {
  const handleSelect = (option) => {
    onSelect(option);
  };

  return (
    <div className="select-wrapper">
      <select
        onChange={(e) =>
          handleSelect(options.find((o) => o.value === e.target.value))
        }
      >
        {options.map((option) => (
          <Option
            key={option.value}
            value={option.value}
            label={option.label}
          />
        ))}
      </select>
    </div>
  );
};

export default Select;
