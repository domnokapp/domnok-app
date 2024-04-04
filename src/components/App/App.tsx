import {
  createNavigator,
  useBackButtonIntegration,
  useNavigatorIntegration,
} from '@tma.js/react-router-integration';
import { useBackButton } from '@tma.js/sdk-react';
import { init } from '@tma.js/sdk';
import type { FC } from 'react';
import { useMemo } from 'react';
import {
  Navigate,
  Route,
  Router,
  Routes,
} from 'react-router-dom';

import {
  Card,
  CardHeader,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { routes } from '../../navigation/routes.ts';

import '@xelene/tgui/dist/styles.css';
import { ReactNode, ComponentType } from 'react';
import { Cell, IconContainer, Section } from '@xelene/tgui';

import { Icon28Chat } from '@xelene/tgui/dist/icons/28/chat';
import { Icon28Devices } from '@xelene/tgui/dist/icons/28/devices';
import { Icon28Stats } from '@xelene/tgui/dist/icons/28/stats';
import { ProductFormPage } from '../../pages/ProductPage/ProductFormPage.tsx';

const TON_SITE_LINK = 'https://ton.space/';

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
        <Route key={catalog.route.path} {...catalog.route}>
          <Cell
            key={catalog.id}
            before={<IconContainer>{catalog.icon}</IconContainer>}
          >
            {catalog.text}
          </Cell>
        </Route>
      ))}
    </Section>

    </>
  );
};

export const App: FC = () => {
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

  return (
    <Router location={location} navigator={navigator}>
      <>
        <MainMenu />
      </>
    </Router>
  );
};
