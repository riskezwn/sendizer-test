import React, { useContext, ReactNode } from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import UIContext from '../../context/ui/UIContext';

interface Props {
  children: ReactNode;
}

function DialogComponent({ children }: Props) {
  const { isDialogOpen, toggleDialog } = useContext(UIContext);

  return (
    <Dialog open={isDialogOpen}>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Title
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
