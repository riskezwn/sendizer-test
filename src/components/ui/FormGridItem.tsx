import React, { useContext } from 'react';
import { Button, Card, CardActions, CardHeader } from '@mui/material';
import UIContext from '../../context/ui/UIContext';
import FormContext from '../../context/form/FormContext';

interface Props {
  name: string;
  id: number;
}

function FormGridItem({ name, id }: Props) {
  const { toggleDialog } = useContext(UIContext);
  const { setActiveForm } = useContext(FormContext);

  const handleStartForm = () => {
    setActiveForm(id);
    toggleDialog();
  };

  return (
    <Card elevation={4} sx={{ minWidth: 275, p: 2 }}>
      <CardHeader title={name} />
      <CardActions>
        <Button variant="contained" size="small" onClick={handleStartForm}>
          Fill out form
        </Button>
      </CardActions>
    </Card>
  );
}

export default FormGridItem;
