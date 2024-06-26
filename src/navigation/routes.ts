import type { ComponentType } from 'react';

import { IndexPage } from '../pages/IndexPage';
import { InitDataPage } from '../pages/InitDataPage';
import { LaunchParamsPage } from '../pages/LaunchParamsPage';
import { ProductFormPage } from '../pages/ProductPage';
import { QuickScanPage } from '../pages/QuickScanPage';
import { ScanQrPopup } from '../pages/ScanQrPopup';
import { ThemeParamsPage } from '../pages/ThemeParamsPage';
import { TONConnectPage } from '../pages/TONConnectPage';
import { ProfilePage, TeamPage } from '../pages/UserPage';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
}

export const routes: Route[] = [
  { path: '/', Component: IndexPage },
  { path: '/init-data', Component: InitDataPage, title: 'Init Data' },
  { path: '/theme-params', Component: ThemeParamsPage, title: 'Theme Params' },
  {
    path: '/launch-params',
    Component: LaunchParamsPage,
    title: 'Launch Params',
  },
  { path: '/ton-connect', Component: TONConnectPage, title: 'TON Connect' },
  { path: '/quick-scan', Component: QuickScanPage, title: 'Quick Scan' },
  { path: '/scan-qr-popup', Component: ScanQrPopup, title: 'Scan QR Popup' },
  { path: '/manage-product', Component: ProductFormPage, title: 'Manage Product' },
  { path: '/profile-page', Component: ProfilePage, title: 'Profile Setting' },
  { path: '/team-page', Component: TeamPage, title: 'Team Setting' },
];
