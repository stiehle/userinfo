import { ChangeEventHandler } from "react";
import "./Dateinput.scss";

type DateInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  id: string;
  name: string;
};

function DateInput({ value, onChange, id, name }: DateInputProps) {
  return (
    <div className="date-input">
      <label className="date-input__label" htmlFor={id}>
        {name}:
      </label>
      <input className="date-input__date" type="date" id={id} value={value} onChange={onChange} />
    </div>
  );
}

export default DateInput;
