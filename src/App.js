import React, { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Select from "./components/Select/Select";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleClick = () => {
    console.log("Button clicked");
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const options = [
    { value: "1", label: "text" },
    { value: "2", label: "number" },
    { value: "3", label: "password" },
    { value: "4", label: "textarea" },
  ];

  return (
    <div>
      <Input type="text" />
      <Input type="number" />
      <Input type="password" />
      <Input type="textarea" />

      <Select
        options={options}
        onSelect={handleSelect}
      />

      <p>Selected Option: {selectedOption.label}</p>

      <Input type={selectedOption.label} />

      <Button
        value="즉 시 이 동"
        onClick={handleClick}
        color="#f7ea9e"
        hoverColor="#e6cf50"
        activeColor="#e6af50"
      />
    </div>
  );
};

export default App;
