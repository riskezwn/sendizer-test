import { useContext, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import UIContext from './context/ui/UIContext';
import OperatorSelectorComponent from './components/form/OperatorSelectorComponent';
import StepComponent from './components/StepComponent';
import DialogComponent from './components/ui/DialogComponent';
import FormContext from './context/form/FormContext';

function App() {
  const { toggleDialog } = useContext(UIContext);
  const { loadForms } = useContext(FormContext);

  useEffect(() => {
    loadForms();
  }, [loadForms]);

  return (
    <div className="App">
      <Typography variant="h1">Hello world</Typography>
      <Button onClick={toggleDialog}>Open dialog</Button>

      <DialogComponent>
        <StepComponent />
        <OperatorSelectorComponent label="Operator" name="operator" placeholder="Select one..." />
      </DialogComponent>
    </div>
  );
}

export default App;
