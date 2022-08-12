import React, { useContext } from 'react';
import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import FormContext from '../context/form/FormContext';
import FormGroup from './FormGroup';

function StepComponent() {
  const { activeForm } = useContext(FormContext);
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = activeForm?.fields ?? [];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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
            <Button onClick={handleReset}>Close</Button>
          </Box>
        </>
      ) : (
        <>
          <Box>
            <FormGroup fields={steps[activeStep].fields} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default StepComponent;
