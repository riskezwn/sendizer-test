import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import FormContext from '../../context/form/FormContext';

interface Props {
  label: string;
  name: string;
  placeholder: string;
}

function InputTextComponent({ label, name, placeholder }: Props) {
  const { addFormValue } = useContext(FormContext);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    addFormValue(target.id, target.value);
  };

  return (
    <TextField
      sx={{ mt: 2 }}
      id={name}
      label={label}
      variant="outlined"
      placeholder={placeholder}
      fullWidth
      onChange={handleChange}
    />
  );
}

export default InputTextComponent;
