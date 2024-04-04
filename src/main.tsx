import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoot } from '@xelene/tgui';

import { Root } from './components/Root';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppRoot>
    <Root />
  </AppRoot>,
  document.getElementById('root')
);
