/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import UIProvider from './context/ui/UIProvider';
import App from './App';
import theme from './themes/theme';
import FormProvider from './context/form/FormProvider';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <UIProvider>
      <FormProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </FormProvider>
    </UIProvider>
  </React.StrictMode>,
);
