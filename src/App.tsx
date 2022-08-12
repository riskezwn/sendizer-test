import { useContext, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import OperatorSelectorComponent from './components/form/OperatorSelectorComponent';
import StepComponent from './components/StepComponent';
import DialogComponent from './components/ui/DialogComponent';
import FormContext from './context/form/FormContext';
import FormGridItem from './components/ui/FormGridItem';

function App() {
  const { loadForms, forms } = useContext(FormContext);

  useEffect(() => {
    loadForms();
  }, [loadForms]);

  return (
    <div className="App">
      <Box sx={{ p: 5 }}>
        <Typography variant="h1">Form list</Typography>

        <Grid container spacing={2}>
          {forms.map(({ id_form, name }) => (
            <Grid item xs={4} key={id_form}>
              <FormGridItem id={id_form} name={name} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <DialogComponent>
        <StepComponent />
        <OperatorSelectorComponent label="Operator" name="operator" placeholder="Select one..." />
      </DialogComponent>
    </div>
  );
}

export default App;
