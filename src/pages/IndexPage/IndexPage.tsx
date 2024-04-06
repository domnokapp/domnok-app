import './IndexPage.css';
import axios from "axios";
import { useMemo, type FC, useEffect, useState } from 'react';
import { Page } from "../../components/Page";
import { ActionsGrid } from '../../components/Cards/ActionsGrid.tsx';
import { User } from '@tma.js/sdk';
import { useInitData } from '@tma.js/sdk-react';
import { UserCard } from '../../components/Cards/UserCard.tsx';
import { SetupTeam } from '../../components/Cards/SetupTeam.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BannerInformationCard } from '../../components/Cards/BannerInformationCard.tsx';
const BASE_URL = "https://app.domnok.com/api/v1";
const ROUT_CONNECT_TELEGRAM_API = "/user/connect-tg-id";

type apiRequest = {
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  tg_connect_id: number | undefined;
};

async function connectAPI(params: any) {
  const connect = await axios.post(
      `${BASE_URL}${ROUT_CONNECT_TELEGRAM_API}`,
      params,
      {
        headers: {
            'Content-Type': 'application/json',
        },
      }
  )
  .then(async (res) => {
    await AsyncStorage.setItem("UserLogin", JSON.stringify(res.data));
  });

  return await connect;
}

export const IndexPage: FC = () => {
    const initData = useInitData();
    const userObj = useMemo<User | undefined>(() => {

      if (!initData) {
        return;
      }

      const { user } = initData;
      return user;
    }, [initData]);

    const apiUser = useMemo(async() => {
        const user = await AsyncStorage.getItem("UserLogin");
        if ( user != null ) {
          return JSON.parse(user).data;
        }
    }, []);

    useEffect(() => {
      if (apiUser != null) {
        connectAPI({
          name: `${userObj?.lastName} ${userObj?.firstName}`,
          email: null,
          phone: null,
          tg_connect_id: userObj?.id,
        });
      }
    }, []);

    console.log("User", apiUser?.user);

  return (
    <Page title="Dashboard">
      { apiUser
          ? (
            <>
              {/* <UserCard
                id={userObj.id}
                firstName={userObj.firstName}
                lastName={userObj.lastName}
                photoUrl={userObj.photoUrl} 
                username={userObj.username}
                phoneNumber=""
              /> */}
              <BannerInformationCard
                id={apiUser?.user?.id}
                code={apiUser?.user?.code}
                name={apiUser?.user?.name}
                teamName={apiUser?.user?.name}
                photoUrl={apiUser?.user?.name}
              />
              <SetupTeam />
              <ActionsGrid />
            </>
          ) 
          : <i>Application was launched with missing init data</i> }
    </Page>
  );
};
