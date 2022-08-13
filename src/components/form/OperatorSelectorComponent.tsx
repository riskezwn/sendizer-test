import React, { useContext, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import LogisticOperator from '../../interfaces/logisticOperators';
import FormContext from '../../context/form/FormContext';
import useFetch from '../../hooks/useFetch';

interface Props {
  label: string;
  name: string;
  placeholder: string;
}

function OperatorSelectorComponent({ label, name, placeholder }: Props) {
  const { addFormValue } = useContext(FormContext);
  const [operator, setOperator] = useState('');

  const { data }: { data: LogisticOperator[] } = useFetch('/data/logistics-operators.json');

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
        {data.map((operatorItem) => (
          <MenuItem value={operatorItem.id} key={operatorItem.id}>
            {operatorItem.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default OperatorSelectorComponent;
