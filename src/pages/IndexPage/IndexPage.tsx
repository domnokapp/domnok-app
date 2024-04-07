import './IndexPage.css';
import axios from "axios";
import { useMemo, type FC, useEffect, useContext, useState } from 'react';
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

type UserProps = {
  id: number;
  name: string;
  email?: string;
  team_id: number;
  created_at: string;
  updated_at: string;
};

type ResponseProps = {
  access_token: string;
  user: UserProps;
};

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
    const [accessToken, setAccessToken] = useState('');
    const [id, setId] = useState<number|undefined>();
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [teamName, setTeamName] = useState('');
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
          return JSON.parse(user).data;
        }

        return null;
    }, []);

    /**
     * Assign data
     */
    apiUser.then((res: any) => {
      setAccessToken(res.access_token);
      setTeamName(res.user.team_name);
      setName(res.user.name);
      setCode(res.user.code);
      setId(res.user.id);
    });

    console.log("access_token", accessToken);

    useEffect(() => {
      if(apiUser != null) {
        /**
         * Runnign to connect ID 
         * and just first time
         */
        connectAPI({
          name: `${userObj?.lastName} ${userObj?.firstName}`,
          email: null,
          phone: null,
          tg_connect_id: userObj?.id,
        });
      }
    }, []);

  return (
    <Page title="Dashboard">
      { apiUser != undefined
          ? (
            <>
              <BannerInformationCard
                id={id}
                code={code}
                name={name}
                teamName={teamName}
                photoUrl=""
              />
              <SetupTeam />
              <ActionsGrid />
            </>
          ) 
          : <i>Application was launched with missing init data</i> }
    </Page>
  );
};
