import styles from './FormSection.module.css';

import {
  createNavigator,
  useBackButtonIntegration,
  useNavigatorIntegration,
} from '@tma.js/react-router-integration';
import { useInitData, useBackButton } from '@tma.js/sdk-react';
import { User } from '@tma.js/sdk';
import type { FC } from 'react';
import { useMemo, useState } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserCard } from '../Cards/UserCard.tsx';

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

export const App: FC = () => {
  const initData = useInitData();
  const tmaNavigator = useMemo(createNavigator, []);
  const [location, navigator] = useNavigatorIntegration(tmaNavigator);
  const backButton = useBackButton();
  useBackButtonIntegration(tmaNavigator, backButton);

    const userObj = useMemo<User | undefined>(() => {

      if (!initData) {
        return;
      }

      const { user } = initData;
      return user;

    }, [initData]);

    const constact = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('contact');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        // error reading value
      }
    };

  return (
    <Router location={location} navigator={navigator}>
        { userObj && constact.length != undefined
          ? (
            <>
            <UserCard
              firstName={userObj.firstName}
              lastName={userObj.lastName}
              photoUrl={userObj.photoUrl} 
              username={userObj.username}
            />
            <SetupTeam />
            <ActionsGrid />
            </>
          ) 
          : <i>Application was launched with missing init data</i> }
    </Router>
  );
};
