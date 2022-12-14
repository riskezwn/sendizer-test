import React, { useContext, useState, useEffect } from 'react';
import { Box, Button, Card, CardActions, CardHeader, Divider, Modal, Typography } from '@mui/material';
import UIContext from '../../context/ui/UIContext';
import FormContext from '../../context/form/FormContext';
import { FormHistory } from '../../interfaces/form';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface Props {
  name: string;
  id: number;
}

function FormGridItem({ name, id }: Props) {
  const { toggleDialog } = useContext(UIContext);
  const { setActiveForm } = useContext(FormContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [formHistory, setFormHistory] = useState<FormHistory[]>([]);

  useEffect(() => {
    const history: FormHistory[] = JSON.parse(localStorage.getItem('formHistory') ?? '[]');
    const filteredFormValues = history.filter((value: { formId: number }) => value.formId === id);
    setFormHistory(filteredFormValues);
  }, [id, toggleDialog]);

  const handleStartForm = () => {
    setActiveForm(id);
    toggleDialog();
  };

  const handleToggleModal = () => {
    setModalOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <Card elevation={4} sx={{ minWidth: 275, p: 2 }}>
        <CardHeader title={name} />
        <CardActions>
          <Button variant="contained" size="small" onClick={handleStartForm}>
            Fill out form
          </Button>
          <Button variant="text" size="small" onClick={handleToggleModal}>
            History
          </Button>
        </CardActions>
      </Card>

      {/* History */}
      <Modal
        open={modalOpen}
        onClose={handleToggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            History
          </Typography>
          {formHistory.map((form) => (
            <Box key={form.date}>
              <Typography>{JSON.stringify(form)}</Typography>
              <Divider />
            </Box>
          ))}
        </Box>
      </Modal>
    </>
  );
}

export default FormGridItem;
