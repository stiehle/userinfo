import { ChangeEventHandler } from "react";
import "./Textinput.scss";
import { ValidationError } from "../types/Validation";

type TextInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error: ValidationError;
  id: string;
  name: string;
};

function TextInput({ value, onChange, error, id, name }: TextInputProps) {
  function displayError() {
    if (error.isError) {
      return (
        <>
          <p className={"text-input__error"}>{error.errorMessage}</p>
        </>
      );
    }
  }

  return (
    <div className="text-input">
      <label className="text-input__label" htmlFor={id}>
        {name}:
      </label>
      <input className="text-input__text" type="text" id={id} value={value} onChange={onChange} />
      {displayError()}
    </div>
  );
}

export default TextInput;
