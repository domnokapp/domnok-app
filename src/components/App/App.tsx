import styles from './FormSection.module.css';

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

import { routes } from '../../navigation/routes.ts';

import '@xelene/tgui/dist/styles.css';
import { ReactNode, ComponentType } from 'react';
import { Cell, Section, ColorInput, IconContainer, Input, Slider, FileInput } from '@xelene/tgui';

import { Icon28Chat } from '@xelene/tgui/dist/icons/28/chat';
import { Icon28Devices } from '@xelene/tgui/dist/icons/28/devices';
import { Icon28Stats } from '@xelene/tgui/dist/icons/28/stats';
import { ProductFormPage } from '../../pages/ProductPage/ProductFormPage.tsx';
import { Icon24SunLow } from '@xelene/tgui/dist/icons/24/sun_low';

import {
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
  useMantineTheme,
} from '@mantine/core';
import {
  IconCreditCard,
  IconBuildingBank,
  IconRepeat,
  IconReceiptRefund,
  IconReceipt,
  IconReceiptTax,
  IconReport,
  IconCashBanknote,
  IconCoin,
} from '@tabler/icons-react';
import classes from './ActionsGrid.module.css';

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

const mockdata = [
  { title: 'Credit cards', icon: IconCreditCard, color: 'violet' },
  { title: 'Banks nearby', icon: IconBuildingBank, color: 'indigo' },
  { title: 'Transfers', icon: IconRepeat, color: 'blue' },
  { title: 'Refunds', icon: IconReceiptRefund, color: 'green' },
  { title: 'Receipts', icon: IconReceipt, color: 'teal' },
  { title: 'Taxes', icon: IconReceiptTax, color: 'cyan' },
  { title: 'Reports', icon: IconReport, color: 'pink' },
  { title: 'Payments', icon: IconCoin, color: 'red' },
  { title: 'Cashback', icon: IconCashBanknote, color: 'orange' },
];

const MainMenuItems: FC = () => {
  const theme = useMantineTheme();

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size="2rem" />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group justify="space-between">
        <Text className={classes.title}>Services</Text>
        <Anchor size="xs" c="dimmed" style={{ lineHeight: 1 }}>
          + 21 other services
        </Anchor>
      </Group>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
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
        <MainMenuItems />
        <MainMenu />
        <TestForm />
      </>
    </Router>
  );
};
