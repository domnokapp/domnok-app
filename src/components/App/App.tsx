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

import MoreVertIcon from '@mui/icons-material/MoreVert';

import { routes } from '../../navigation/routes.ts';
import { red } from '@mui/material/colors';

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
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid item xs={4} sm={3} md={2} lg={1}>
        <Card>
            <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <Stack>
            <Typography variant="h6" color="textSecondary">
              First Card
            </Typography>
            <Grid container alignItems="center">
              <Grid item>
                <Typography variant="h4" color="inherit">
                  1111
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </Card>
      </Grid>
      <Grid item xs={4} sm={3} md={2} lg={1}>
      <Card>
          <Stack>
            <Typography variant="h6" color="textSecondary">
              First Card
            </Typography>
            <Grid container alignItems="center">
              <Grid item>
                <Typography variant="h4" color="inherit">
                  1111
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </Card>
      </Grid>
      <Grid item xs={4} sm={3} md={2} lg={1}>
      <Card>
          <Stack>
            <Typography variant="h6" color="textSecondary">
              First Card
            </Typography>
            <Grid container alignItems="center">
              <Grid item>
                <Typography variant="h4" color="inherit">
                  1111
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </Card>
      </Grid>
      <Grid item xs={4} sm={3} md={2} lg={1}>
      <Card>
          <Stack>
            <Typography variant="h6" color="textSecondary">
              First Card
            </Typography>
            <Grid container alignItems="center">
              <Grid item>
                <Typography variant="h4" color="inherit">
                  1111
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </Card>
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
    </Grid>
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
