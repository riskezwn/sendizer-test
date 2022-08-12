import React, { useContext, useState } from 'react';
import { Box, Grid, IconButton, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FormContext from '../../context/form/FormContext';

interface Props {
  label: string;
  name: string;
  placeholderKey: string;
  placeholderValue: string;
}

function KeyValueComponent({ label, name, placeholderKey, placeholderValue }: Props) {
  const { addFormValue, removeFormValue } = useContext(FormContext);

  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const onKeyChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setKey(target.value);
  };

  const onValueChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const handleAddValue = () => {
    if (key && value) {
      addFormValue(key, value);
      setIsDisabled((disabled) => !disabled);
    }
  };

  const handleRemoveValue = () => {
    if (!isDisabled) return;
    setIsDisabled((disabled) => !disabled);
    removeFormValue(key);
  };

  return (
    <Box sx={{ my: 2 }}>
      <Typography sx={{ mb: 1 }} color="GrayText" fontSize={10}>
        {label}
      </Typography>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        <Grid item xs={5}>
          <TextField
            id={name}
            label={placeholderKey}
            variant="outlined"
            placeholder={placeholderKey}
            multiline
            maxRows={4}
            value={key}
            onChange={onKeyChange}
            disabled={isDisabled}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id={name}
            label={placeholderValue}
            variant="outlined"
            placeholder={placeholderValue}
            value={value}
            onChange={onValueChange}
            disabled={isDisabled}
          />
        </Grid>
        <Grid item xs={2}>
          {!isDisabled ? (
            <IconButton onClick={handleAddValue}>
              <AddIcon />
            </IconButton>
          ) : (
            <IconButton onClick={handleRemoveValue}>
              <RemoveIcon />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default KeyValueComponent;
