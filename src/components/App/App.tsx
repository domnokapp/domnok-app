import {
  createNavigator,
  useBackButtonIntegration,
  useNavigatorIntegration,
} from '@tma.js/react-router-integration';
import { useBackButton } from '@tma.js/sdk-react';
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
  AvatarGroup,
  Box,
  Button,
  Card,
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

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
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid item xs={3} sm={2} md={1} lg={1}>
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
      <Grid item xs={3} sm={2} md={1} lg={1}>
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
      <Grid item xs={3} sm={2} md={1} lg={1}>
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
      <Grid item xs={3} sm={2} md={1} lg={1}>
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

  return (
    <Router location={location} navigator={navigator}>
      <>
        <MainMenu />
      </>
    </Router>
  );
};
