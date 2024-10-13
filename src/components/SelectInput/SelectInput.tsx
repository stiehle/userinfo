// import { useState } from "react";
import { ChangeEventHandler } from "react";
import "./SelectInput.scss";

type SelectInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: string[];
  id: string;
  name: string;
};

function SelectInput({ value, onChange, options, id, name }: SelectInputProps) {
  return (
    <div className="select-input">
      <label className="select-input__label" htmlFor={id}>
        {name}:
      </label>

      <select className="select-input__text" id="gender" value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
