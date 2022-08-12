import { useContext, useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import UIContext from './context/ui/UIContext';
import OperatorSelectorComponent from './components/form/OperatorSelectorComponent';
import StepComponent from './components/StepComponent';
import DialogComponent from './components/ui/DialogComponent';

function App() {
  const [testData, setTestData] = useState([]);
  const { toggleDialog } = useContext(UIContext);

  useEffect(() => {
    fetch('/data/logistics-operators.json')
      .then((response) => response.json())
      .then((data) => setTestData(data));
  }, []);

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
