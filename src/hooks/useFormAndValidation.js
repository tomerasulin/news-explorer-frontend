import { useState, useCallback } from 'react';

const useFormAndValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isvalid, setIsvalid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsvalid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsvalid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsvalid(newIsvalid);
    },
    [setValues, setErrors, setIsvalid]
  );
  return { isvalid, values, errors, handleChange, resetForm, setValues };
};

export default useFormAndValidation;
