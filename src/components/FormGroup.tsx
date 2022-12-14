import React from 'react';
import { Box } from '@mui/material';
import InputTextComponent from './form/InputTextComponent';
import OperatorSelectorComponent from './form/OperatorSelectorComponent';
import KeyValueComponent from './form/KeyValueComponent';
import TextAreaComponent from './form/TextAreaComponent';
import { Field } from '../interfaces/form';
import FormType from '../interfaces/formTypes';
import CollectionComponent from './form/CollectionComponent';

interface Props {
  fields: Field[];
}

function FormGroup({ fields }: Props) {
  return (
    <Box sx={{ my: 2 }}>
      {fields.map((field) => {
        switch (field.type as FormType) {
          case 'TextComponent':
            return (
              <InputTextComponent
                key={field.name}
                label={field.label}
                name={field.name}
                placeholder={field.place_holder}
              />
            );
          case 'TextAreaComponent':
            return (
              <TextAreaComponent
                key={field.name}
                label={field.label}
                name={field.name}
                placeholder={field.place_holder}
              />
            );
          case 'OperatorSelectorComponent':
            return (
              <OperatorSelectorComponent
                key={field.name}
                label={field.label}
                name={field.name}
                placeholder={field.place_holder}
              />
            );
          case 'KeyValueComponent':
            return (
              <KeyValueComponent
                key={field.name}
                label={field.label}
                name={field.name}
                placeholderKey={field.place_holder_key}
                placeholderValue={field.place_holder_value}
              />
            );
          case 'CollectionComponent':
            return <CollectionComponent field={field.field[0]} key={field.name} label={field.label} />;
          default:
            return null;
        }
      })}
    </Box>
  );
}

export default React.memo(FormGroup);
