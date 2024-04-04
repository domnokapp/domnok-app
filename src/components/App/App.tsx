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
  Avatar,
  Card,
  CardHeader,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { routes } from '../../navigation/routes.ts';

const Inner: FC = () => {
  return (
    <Routes>
      {routes.map((route) => <Route key={route.path} {...route} />)}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

const MainMenu: FC = () => {
  return (
    <>
    <Grid container bgcolor={'white'} height={150} alignItems={'center'} alignContent={'center'}>
      <Grid flexDirection={'row'}>
        <Typography variant="h1" component="h3" color={'gray'}>
          $
        </Typography>
        <Typography variant="h1" component="h3" color={'white'}>
          0.00
        </Typography>
      </Grid>
    </Grid>
    <Grid container rowSpacing={1.5} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Card>DDD</Card>
        </Grid>
      ))}
    </Grid>
    <Grid container rowSpacing={1.5} columnSpacing={2.75}>
      <Grid item xs={12} marginBottom={0.5}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
            <CardHeader
            avatar={
              <img
                srcSet={`https://cdn-icons-png.flaticon.com/512/465/465601.png`}
                src={`https://cdn-icons-png.flaticon.com/512/465/465601.png`}
                alt={`Good Job`}
                width={`45px`}
                height={`45px`}
                loading="lazy"
              />
            }
            action={
              <IconButton aria-label="settings">
                <KeyboardArrowRightIcon />
              </IconButton>
            }
            title="Managing Product, Category, Unit"
            subheader="setting up your products"
          />
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
            <CardHeader
            avatar={
              <img
                srcSet={`https://cdn-icons-png.flaticon.com/512/465/465598.png`}
                src={`https://cdn-icons-png.flaticon.com/512/465/465598.png`}
                alt={`Good Job`}
                width={`45px`}
                height={`45px`}
                loading="lazy"
              />
            }
            action={
              <IconButton aria-label="settings">
                <KeyboardArrowRightIcon />
              </IconButton>
            }
            title="Managing Product, Category, Unit"
            subheader="setting up your products"
          />
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
            <CardHeader
            avatar={
              <img
                srcSet={`https://cdn-icons-png.flaticon.com/512/465/465606.png`}
                src={`https://cdn-icons-png.flaticon.com/512/465/465606.png`}
                alt={`Good Job`}
                width={`45px`}
                height={`45px`}
                loading="lazy"
              />
            }
            action={
              <IconButton aria-label="settings">
                <KeyboardArrowRightIcon />
              </IconButton>
            }
            title="Managing Product, Category, Unit"
            subheader="setting up your products"
          />
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
            <CardHeader
            avatar={
              <img
                srcSet={`https://cdn-icons-png.flaticon.com/512/465/465583.png`}
                src={`https://cdn-icons-png.flaticon.com/512/465/465583.png`}
                alt={`Good Job`}
                width={`45px`}
                height={`45px`}
                loading="lazy"
              />
            }
            action={
              <IconButton aria-label="settings">
                <KeyboardArrowRightIcon />
              </IconButton>
            }
            title="Managing Product, Category, Unit"
            subheader="setting up your products"
          />
        </Card>
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
    </Grid>
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
