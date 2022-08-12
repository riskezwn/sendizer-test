import React, { useContext, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import LogisticOperator from '../../interfaces/logisticOperators';
import FormContext from '../../context/form/FormContext';

interface Props {
  label: string;
  name: string;
  placeholder: string;
}

const logisticOperators: LogisticOperator[] = [
  {
    name: 'Correos express',
    id: 1,
  },
  {
    name: 'Seur',
    id: 2,
  },
  {
    name: 'UPS',
    id: 3,
  },
];

function OperatorSelectorComponent({ label, name, placeholder }: Props) {
  const { addFormValue } = useContext(FormContext);
  const [operator, setOperator] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    setOperator(value);
    addFormValue(name, value);
  };

  return (
    <FormControl fullWidth sx={{ mt: 2 }}>
      <InputLabel id={name}>{label}</InputLabel>
      <Select
        displayEmpty
        labelId={name}
        id={name}
        label={label}
        placeholder={placeholder}
        value={operator}
        onChange={handleChange}
      >
        <MenuItem disabled>{placeholder}</MenuItem>
        {logisticOperators.map((operatorItem) => (
          <MenuItem value={operatorItem.id} key={operatorItem.id}>
            {operatorItem.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default OperatorSelectorComponent;
