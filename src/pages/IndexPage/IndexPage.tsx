import './IndexPage.css';

import { useMemo, type FC } from 'react';
import { Page } from "../../components/Page";
import { ActionsGrid } from '../../components/Cards/ActionsGrid.tsx';
import { User } from '@tma.js/sdk';
import { useInitData } from '@tma.js/sdk-react';
import { UserCard } from '../../components/Cards/UserCard.tsx';
import { SetupTeam } from '../../components/Cards/SetupTeam.tsx';
import { UserContact } from '../../components/Type/type.tsx';

export const IndexPage: FC = () => {

  const initData = useInitData();
  const userObj = useMemo<User | undefined>(() => {

    if (!initData) {
      return;
    }

    const { user } = initData;
    return user;

  }, [initData]);

  const userContact = useMemo<{}|null>(async () => {
    return await JSON.parse(localStorage.getItem("UserContact") || '');
  }, []);

  return (
    <Page title="Dashboard">
      { userObj && userContact != undefined
          ? (
            <>
              <UserCard
                firstName={userObj.firstName}
                lastName={userObj.lastName}
                photoUrl={userObj.photoUrl} 
                username={userObj.username}
                phoneNumber={JSON.stringify(userContact)}
              />
              <SetupTeam />
              <ActionsGrid />
            </>
          ) 
          : <i>Application was launched with missing init data</i> }
    </Page>
  );
};
