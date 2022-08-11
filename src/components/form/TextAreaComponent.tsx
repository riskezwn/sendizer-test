import React from 'react';
import { TextField } from '@mui/material';

interface Props {
  label: string;
  name: string;
  placeholder: string;
}

function InputTextComponent({ label, name, placeholder }: Props) {
  return (
    <TextField id={name} label={label} variant="outlined" placeholder={placeholder} multiline rows={2} maxRows={4} />
  );
}

export default InputTextComponent;
