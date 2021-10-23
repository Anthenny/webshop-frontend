import { useState } from "react";
import { useHistory } from "react-router-dom";

const useForm = (validate) => {
  const [values, setValues] = useState({
    naam: " ",
    email: "",
    adress: "",
    plaats: "",
    wachtwoord: "",
    bevestigWachtwoord: "",
  });
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));

    finalSubmit();
  };

  const finalSubmit = () => {
    console.log(errors);
    if (errors.length === 0) {
      history.push("/login");
    }
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
