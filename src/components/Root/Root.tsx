import { setDebug, init, ClosingBehavior, MiniApp, postEvent, SettingsButton } from '@tma.js/sdk';
import { DisplayGate, SDKProvider } from '@tma.js/sdk-react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { type FC, useState } from 'react';
import { useEffect, useMemo } from 'react';

import { App } from '../App';

const Err: FC<{ error: unknown }> = ({ error }) => {
  return (
    <div>
      <p>An error occurred while initializing the SDK</p>
      <blockquote>
        <code>
          {error instanceof Error ? error.message : JSON.stringify(error)}
        </code>
      </blockquote>
    </div>
  );
};

const Loading: FC = () => {
  return <div>Application is loading</div>;
};

export const Root: FC = () => {
  const manifestUrl = useMemo(() => {
    return new URL('tonconnect-manifest.json', window.location.href).toString();
  }, []);

  const [userPhone, setUserPhone] = useState('');

  const miniApp = new MiniApp({
    headerColor: 'bg_color',
    backgroundColor: '#ffffff',
    version: '6.4',
    botInline: false,
    postEvent,
  });
  // miniApp.setBackgroundColor('#ffffff');
  miniApp.requestPhoneAccess().then(() => {
  });

  // const { mainButton, viewport } = init();
  // mainButton.on('click', () => viewport.expand());

  // mainButton
  //   .setBackgroundColor('#ff0000')
  //   .setTextColor('#ffffff')
  //   .setText('Expand')
  //   .enable()
  //   .show();
  const closingBehaviour = new ClosingBehavior(false, postEvent);
  closingBehaviour.enableConfirmation();

  const settingsButton = new SettingsButton(false, '6.3', postEvent);
  settingsButton.hide();

  // Enable debug mode to see all the methods sent and events received.
  useEffect(() => {
    setDebug(true);
  }, []);

  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <SDKProvider
        options={{ acceptCustomStyles: true, cssVars: true, complete: true }}
      >
        <DisplayGate error={Err} loading={Loading} initial={Loading}>
          <App />
        </DisplayGate>
      </SDKProvider>
    </TonConnectUIProvider>
  );
};
