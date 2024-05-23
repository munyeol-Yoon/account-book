import { useEffect, useRef, useState } from "react";

const useFormInputs = () => {
  const [inputs, setInputs] = useState({
    date: "",
    item: "",
    amount: "",
    content: "",
  });

  const dateRef = useRef("");

  useEffect(() => {
    dateRef.current.focus();
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleResetInputs = () => {
    setInputs({
      date: "",
      item: "",
      amount: "",
      content: "",
    });
  };

  return { inputs, dateRef, handleOnChange, handleResetInputs, setInputs };
};

export default useFormInputs;
