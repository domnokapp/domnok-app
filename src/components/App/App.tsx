import styles from './FormSection.module.css';

import {
  createNavigator,
  useBackButtonIntegration,
  useNavigatorIntegration,
} from '@tma.js/react-router-integration';
import { useInitData, useBackButton } from '@tma.js/sdk-react';
import { User, init } from '@tma.js/sdk';
import type { FC } from 'react';
import { useMemo } from 'react';
import {
  Navigate,
  Route,
  Router,
  Routes,
} from 'react-router-dom';

import { routes } from '../../navigation/routes.ts';

import '@xelene/tgui/dist/styles.css';
import { ReactNode, ComponentType } from 'react';
import { Cell, Section, ColorInput, IconContainer, Input, Slider, FileInput } from '@xelene/tgui';

import { Icon28Chat } from '@xelene/tgui/dist/icons/28/chat';
import { Icon28Devices } from '@xelene/tgui/dist/icons/28/devices';
import { Icon28Stats } from '@xelene/tgui/dist/icons/28/stats';
import { ProductFormPage } from '../../pages/ProductPage/ProductFormPage.tsx';
import { Icon24SunLow } from '@xelene/tgui/dist/icons/24/sun_low';
import { ActionsGrid } from '../Cards/ActionsGrid.tsx';
import { SetupTeam } from '../Cards/SetupTeam.tsx';
import { Paper, Text } from '@mantine/core';

const Inner: FC = () => {
  return (
    <Routes>
      {routes.map((route) => <Route key={route.path} {...route} />)}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

type RouteProps = {
  path: string;
  Component: ComponentType;
  title: string;
}

type CellProps = {
  id: number;
  icon: ReactNode;
  text: string;
  route: RouteProps;
}

const catalogs: CellProps[] = [
  {
    id: 1,
    icon: <Icon28Chat />,
    text: 'Products',
    route: { path: '/manage-product', Component: ProductFormPage, title: 'Manage Product' },
  },
  {
    id: 2,
    icon: <Icon28Devices />,
    text: 'Categories',
    route: { path: '/manage-product', Component: ProductFormPage, title: 'Manage Product' },
  },
  {
    id: 3,
    icon: <Icon28Stats />,
    text: 'Units',
    route: { path: '/manage-product', Component: ProductFormPage, title: 'Manage Product' },
  },
];

const MainMenu: FC = () => {
  return (
    <>
    
    <Section header="Catalog" footer="">
      {catalogs.map((catalog) => (
          <Cell
            key={catalog.id}
            before={<IconContainer>{catalog.icon}</IconContainer>}
          >
            {catalog.text}
          </Cell>
      ))}
    </Section>

    </>
  );
};

const TestForm: FC = () => (
  <Section header="Form Section">
    <Input header="Name" placeholder="Your product's name" />
    <ColorInput header="Color" />
    <FileInput label="Photo" />
    <Slider
      step={25}
      before={(
        <IconContainer className={styles.sliderIcon}>
          <Icon24SunLow />
        </IconContainer>
      )}
      after={<IconContainer><Icon24SunLow /></IconContainer>}
    />
  </Section>
);

function getUser(user: User) {
  return [
    { title: 'ID', value: user.id.toString() },
    { title: 'Last name', value: user.lastName },
    { title: 'First name', value: user.firstName },
    { title: 'Is bot', value: user.isBot ? 'yes' : 'no' },
    { title: 'Is premium', value: user.isPremium ? 'yes' : 'no' },
    { title: 'Language code', value: user.languageCode },
    { title: 'Username', value: user.username },
  ];
}

function UserInfo(user: User) {
  return (
    <>
    <Paper>
      <Text fz="lg">{user.id}</Text>
      <Text fz="sm">{user.username}</Text>
    </Paper>
    </>
  );
};

export const App: FC = () => {
  const initData = useInitData();
  const tmaNavigator = useMemo(createNavigator, []);
  const [location, navigator] = useNavigatorIntegration(tmaNavigator);
  const backButton = useBackButton();

  useBackButtonIntegration(tmaNavigator, backButton);

  const { mainButton, viewport } = init();
  mainButton.on('click', () => viewport.expand());

  mainButton
    .setBackgroundColor('#ff0000')
    .setTextColor('#ffffff')
    .setText('Quick Scan')
    .enable()
    .show();

    const user = useMemo<User | undefined>(() => {

      if (!initData) {
        return;
      }

      const {
        user,
      } = initData;
      return user;

    }, [initData]);

  return (
    <Router location={location} navigator={navigator}>
      <>
        <SetupTeam />
        <UserInfo user={user} />
        <ActionsGrid />
        {/* <MainMenu />
        <TestForm /> */}
      </>
    </Router>
  );
};
