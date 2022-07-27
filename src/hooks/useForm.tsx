import { ChangeEvent, useState } from "react";

const useForm = (initialState: any) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const reset = () => {
    setValues(initialState);
  };

  return { values, handleInputChange, reset };
};
export default useForm;
