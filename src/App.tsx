import { useContext, useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import UIContext from './context/ui/UIContext';

function App() {
  const [testData, setTestData] = useState([]);
  const { isDialogOpen, toggleDialog } = useContext(UIContext);

  useEffect(() => {
    fetch('/data/logistics-operators.json')
      .then((response) => response.json())
      .then((data) => setTestData(data));
  }, []);

  return (
    <div className="App">
      <Typography variant="h1">Hello world</Typography>
      <Button onClick={toggleDialog}>Open dialog</Button>

      <Dialog open={isDialogOpen}>
        <DialogTitle sx={{ m: 0, p: 2 }}>
          Hola
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
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
