import './index.css';
import '@xelene/tgui/dist/styles.css';
// core styles are required for all packages
import '@mantine/core/styles.css';

import ReactDOM from 'react-dom/client';
import { AppRoot } from '@xelene/tgui';

import { Root } from './components/Root';
import { createTheme, MantineProvider } from '@mantine/core';
import { persistor, store } from './common/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const theme = createTheme({
  /** Put your mantine theme override here */
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppRoot>
    <MantineProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root />
        </PersistGate>
      </Provider>
    </MantineProvider>
  </AppRoot>,
);
