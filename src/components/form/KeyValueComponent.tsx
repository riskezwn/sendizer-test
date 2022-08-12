import React from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';

interface Props {
  label: string;
  name: string;
  placeholderKey: string;
  placeholderValue: string;
}

function KeyValueComponent({ label, name, placeholderKey, placeholderValue }: Props) {
  return (
    <Box sx={{ my: 2 }}>
      <Typography color="GrayText">{label}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id={name}
            label={placeholderKey}
            variant="outlined"
            placeholder={placeholderKey}
            multiline
            maxRows={4}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id={name}
            label={placeholderValue}
            variant="outlined"
            placeholder={placeholderValue}
            multiline
            maxRows={4}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default KeyValueComponent;
