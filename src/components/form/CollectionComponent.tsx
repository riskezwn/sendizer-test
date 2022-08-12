import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import InputTextComponent from './InputTextComponent';
import FormType from '../../interfaces/formTypes';
import TextAreaComponent from './TextAreaComponent';
import OperatorSelectorComponent from './OperatorSelectorComponent';
import KeyValueComponent from './KeyValueComponent';
import { Field } from '../../interfaces/form';

interface Props {
  field: Field;
  label: string;
}

function CollectionComponent({ field, label }: Props) {
  const [fieldNumber, setFieldNumber] = useState(1);

  const handleAddField = () => {
    if (fieldNumber === 10) return;
    setFieldNumber((prevFieldNumber) => prevFieldNumber + 1);
  };

  const handleRemoveField = () => {
    if (fieldNumber === 1) return;
    setFieldNumber((prevFieldNumber) => prevFieldNumber - 1);
  };

  return (
    <>
      <Typography color="GrayText">{label}</Typography>
      <Box>
        {[...Array(fieldNumber)].map((e, i) => {
          switch (field.type as FormType) {
            case 'TextComponent':
              return (
                <InputTextComponent
                  key={`${field.name}${i + 1}`}
                  label={field.label}
                  name={field.name}
                  placeholder={field.place_holder}
                />
              );
            case 'TextAreaComponent':
              return (
                <TextAreaComponent
                  key={`${field.name}${i + 1}`}
                  label={field.label}
                  name={field.name}
                  placeholder={field.place_holder}
                />
              );
            case 'OperatorSelectorComponent':
              return (
                <OperatorSelectorComponent
                  key={`${field.name}${i + 1}`}
                  label={field.label}
                  name={field.name}
                  placeholder={field.place_holder}
                />
              );
            case 'KeyValueComponent':
              return (
                <KeyValueComponent
                  key={`${field.name}${i + 1}`}
                  label={field.label}
                  name={field.name}
                  placeholderKey={field.place_holder_key}
                  placeholderValue={field.place_holder_value}
                />
              );
            default:
              return null;
          }
        })}
      </Box>
      <Box>
        <IconButton onClick={handleAddField}>
          <AddIcon />
        </IconButton>
        <IconButton onClick={handleRemoveField}>
          <RemoveIcon />
        </IconButton>
      </Box>
    </>
  );
}

export default CollectionComponent;
