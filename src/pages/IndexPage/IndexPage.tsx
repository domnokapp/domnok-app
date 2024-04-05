import './IndexPage.css';

import { useMemo, type FC } from 'react';
import { Page } from "../../components/Page";
import { ActionsGrid } from '../../components/Cards/ActionsGrid.tsx';
import { User } from '@tma.js/sdk';
import { useBackButton, useInitData } from '@tma.js/sdk-react';
import { UserCard } from '../../components/Cards/UserCard.tsx';
import { SetupTeam } from '../../components/Cards/SetupTeam.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNavigator, useNavigatorIntegration, useBackButtonIntegration } from '@tma.js/react-router-integration';

export const IndexPage: FC = () => {
  const tmaNavigator = useMemo(createNavigator, []);
  const [ location, navigator] = useNavigatorIntegration(tmaNavigator);
  const backButton = useBackButton();
  useBackButtonIntegration(tmaNavigator, backButton);

  const initData = useInitData();
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
    <Page title="">
      { userObj && constact.length != undefined
          ? (
            <>
              <UserCard
                firstName={userObj.firstName}
                lastName={userObj.lastName}
                photoUrl={userObj.photoUrl} 
                username={userObj.username}
                navigator={navigator}
              />
              <SetupTeam />
            {/* <ActionsGrid /> */}
            </>
          ) 
          : <i>Application was launched with missing init data</i> }
      <ActionsGrid />
      {/* <ul className="index-page__links">
        {routes.map(
          ({ path, title }) =>
            title && (
              <li className="index-page__link" key={path}>
                <Link to={path}>{title}</Link>
              </li>
            ),
        )}
      </ul> */}
    </Page>
  );
};
