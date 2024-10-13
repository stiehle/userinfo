import { useState } from "react";
import { ValidationError } from "../components/types/Validation";

export function useFormInput(initialValue: string, required = false) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<ValidationError>({ isError: false, errorMessage: "" });

  const handleInputChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const inputValue = event.target.value;
    console.log(inputValue);
    setValue(inputValue);

    if (required) {
      if (inputValue === "") {
        //setze Fehler
        setError({ isError: true, errorMessage: "Bitte geben Sie einen Wert ein" });
      } else {
        // Reset
        setError({ isError: false, errorMessage: "" });
      }
    }
  };

  return {
    value,
    handleInputChangeEvent,
    error,
  };
}
