// core styles are required for all packages
import '@mantine/core/styles.css';
import '@xelene/tgui/dist/styles.css';
import '@mantine/core/styles/Input.css';
import '@mantine/core/styles/Card.css';
import '@mantine/core/styles/Card.css';
import { setDebug, ClosingBehavior, MiniApp, postEvent, SettingsButton } from '@tma.js/sdk';
import { DisplayGate, SDKProvider } from '@tma.js/sdk-react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { type FC } from 'react';
import { useEffect, useMemo } from 'react';
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { App } from '../App';

const queryClient = new QueryClient();

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

  const [opened, { toggle }] = useDisclosure();
  
  const manifestUrl = useMemo(() => {
    return new URL('tonconnect-manifest.json', window.location.href).toString();
  }, []);

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
          <QueryClientProvider client={queryClient}>
            <AppShell
              header={{ height: 60 }}
              navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
              padding="md"
            >
              <AppShell.Header>
                <Group h="100%" px="md">
                  <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                </Group>
              </AppShell.Header>
              <AppShell.Navbar p="md">
                Navbar
                {Array(15)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton key={index} h={28} mt="sm" animate={false} />
                  ))}
              </AppShell.Navbar>
              <AppShell.Main>
                <App />
              </AppShell.Main>
            </AppShell>
          </QueryClientProvider>
        </DisplayGate>
      </SDKProvider>
    </TonConnectUIProvider>
  );
};
