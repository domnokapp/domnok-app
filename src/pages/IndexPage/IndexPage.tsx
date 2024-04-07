import './IndexPage.css';
import axios from "axios";
import { useMemo, type FC, useEffect, useContext } from 'react';
import { Page } from "../../components/Page";
import { ActionsGrid } from '../../components/Cards/ActionsGrid.tsx';
import { User } from '@tma.js/sdk';
import { useInitData } from '@tma.js/sdk-react';
import { SetupTeam } from '../../components/Cards/SetupTeam.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BannerInformationCard } from '../../components/Cards/BannerInformationCard.tsx';
import { apiRoutes } from '../../api/apiRoutes.tsx';
import { BASE_URL } from '../../constants/constant.tsx';
import { AuthContext } from '../../context/AuthContext.tsx';

async function connectAPI(params: any) {
  const connect = await axios.post(
      `${BASE_URL}${apiRoutes.useTelegramIDConnect}`,
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

    const apiUser = useMemo<any>(async() => {
        const user = await AsyncStorage.getItem("UserLogin");
        if ( user != null ) {
          return JSON.parse(user).data.user;
        }

        return null;
    }, []);

    console.log("apiUser", apiUser);

    const { userInfo, connectID } = useContext<any>(AuthContext);

    useEffect(() => {
      /**
       * Runnign to connect ID 
       * and just first time
       */
      connectID({
        name: `${userObj?.lastName} ${userObj?.firstName}`,
        email: null,
        phone: null,
        tg_connect_id: userObj?.id,
      });
    }, []);

    console.log("userInfo", userInfo);

  return (
    <Page title="Dashboard">
      { userInfo != undefined
          ? (
            <>
              <BannerInformationCard
                id={userObj?.id}
                code={userObj?.firstName}
                name={userObj?.firstName}
                teamName={userObj?.firstName}
                photoUrl={userObj?.firstName}
              />
              <SetupTeam />
              <ActionsGrid />
            </>
          ) 
          : <i>Application was launched with missing init data</i> }
    </Page>
  );
};
