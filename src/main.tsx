import './index.css';
import '@xelene/tgui/dist/styles.css';
// core styles are required for all packages
import '@mantine/core/styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoot } from '@xelene/tgui';

import { Root } from './components/Root';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppRoot>
    <MantineProvider theme={theme}>
      <Root />
    </MantineProvider>
  </AppRoot>,
  document.getElementById('root')
);
