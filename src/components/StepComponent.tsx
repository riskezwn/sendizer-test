import React, { useContext } from 'react';
import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import FormContext from '../context/form/FormContext';
import FormGroup from './FormGroup';
import { Field } from '../interfaces/form';
import { saveFormData } from '../helpers/forms';
import UIContext from '../context/ui/UIContext';

function StepComponent() {
  const { activeForm, formValues } = useContext(FormContext);
  const { toggleDialog } = useContext(UIContext);
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = activeForm?.fields ?? [];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleSaveForm = (finish = false) => {
    if (activeForm && formValues.length > 0) {
      saveFormData(activeForm?.id_form, formValues);
      if (finish) {
        toggleDialog();
      } else {
        handleNext();
      }
    }
  };

  // check if the form does not have a step component and return a form group
  if (steps[0].type !== 'StepComponent') {
    return (
      <Box justifyContent="end" alignItems="end">
        <FormGroup fields={steps as Field[]} />
        <Button onClick={() => handleSaveForm(true)}>Finish</Button>
      </Box>
    );
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps &&
          steps.map((step) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          ))}
      </Stepper>
      {steps && activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>Form submitted</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={toggleDialog}>Close</Button>
          </Box>
        </>
      ) : (
        <>
          <Box>
            <FormGroup fields={steps[activeStep].fields} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            {activeStep === steps.length - 1 ? (
              <Button onClick={() => handleSaveForm()}>Finish</Button>
            ) : (
              <Button onClick={handleNext}>Next</Button>
            )}
            {/* <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button> */}
          </Box>
        </>
      )}
    </Box>
  );
}

export default StepComponent;
