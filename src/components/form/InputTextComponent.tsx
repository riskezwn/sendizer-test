import React from 'react';
import { TextField } from '@mui/material';

interface Props {
  label: string;
  name: string;
  placeholder: string;
}

function InputTextComponent({ label, name, placeholder }: Props) {
  return <TextField sx={{ my: 2 }} id={name} label={label} variant="outlined" placeholder={placeholder} fullWidth />;
}

export default InputTextComponent;
