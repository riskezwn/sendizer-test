import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import FormContext from '../../context/form/FormContext';

interface Props {
  label: string;
  name: string;
  placeholder: string;
}

function TextAreaComponent({ label, name, placeholder }: Props) {
  const { addFormValue } = useContext(FormContext);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    addFormValue(target.id, target.value);
  };

  return (
    <TextField
      id={name}
      label={label}
      variant="outlined"
      placeholder={placeholder}
      multiline
      rows={2}
      fullWidth
      onChange={handleChange}
    />
  );
}

export default TextAreaComponent;
