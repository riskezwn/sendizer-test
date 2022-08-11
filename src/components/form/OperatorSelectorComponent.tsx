import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import LogisticOperator from '../../interfaces/logisticOperators';

interface Props {
  label: string;
  name: string;
  placeholder: string;
}

function OperatorSelectorComponent({ label, name, placeholder }: Props) {
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

  const [operator, setOperator] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setOperator(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
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
