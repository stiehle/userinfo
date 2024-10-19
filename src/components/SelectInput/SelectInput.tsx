// import { useState } from "react";
import { ChangeEventHandler } from "react";
import "./SelectInput.scss";
import { ValidationError } from "../types/Validation";

type SelectInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: string[];
  error: ValidationError;
  id: string;
  name: string;
};

function SelectInput({ value, onChange, error, options, id, name }: SelectInputProps) {
  function displayError() {
    if (error.isError) {
      return (
        <>
          <p className={"date-input__error"}>{error.errorMessage}</p>
        </>
      );
    }
  }
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
      {displayError()}
    </div>
  );
}

export default SelectInput;
