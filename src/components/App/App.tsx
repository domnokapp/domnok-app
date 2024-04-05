import {
  createNavigator,
  useBackButtonIntegration,
  useNavigatorIntegration,
} from '@tma.js/react-router-integration';
import { useInitData, useBackButton } from '@tma.js/sdk-react';
import { User } from '@tma.js/sdk';
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
import { ActionsGrid } from '../Cards/ActionsGrid.tsx';
import { SetupTeam } from '../Cards/SetupTeam.tsx';
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
