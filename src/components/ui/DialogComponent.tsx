import React, { useContext, ReactNode } from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import UIContext from '../../context/ui/UIContext';
import FormContext from '../../context/form/FormContext';

interface Props {
  children: ReactNode;
}

function DialogComponent({ children }: Props) {
  const { isDialogOpen, toggleDialog } = useContext(UIContext);
  const { activeForm } = useContext(FormContext);

  return (
    <Dialog open={isDialogOpen}>
      <DialogTitle sx={{ mt: 4, p: 2 }}>
        {activeForm && activeForm.name}
        {isDialogOpen ? (
          <IconButton
            aria-label="close"
            onClick={toggleDialog}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[700],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default DialogComponent;
