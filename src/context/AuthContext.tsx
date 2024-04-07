import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../constants/constant';
import { apiRoutes } from '../api/apiRoutes';
import { AuthProviderProps } from '../components/Type/type';
export const AuthContext = createContext({});


export const AuthProvider = ({ children = null }) => {

  const [userInfo, setUserInfo] = useState<AuthProviderProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [formError, setFormError] = useState({});

  const connectID = (params: any) => {
    /**
     *
     */
    setIsLoading(true);

    /**
     *
     */
    fetch(`${BASE_URL}${apiRoutes.useTelegramIDConnect}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Server-Version': '1.0.0',
        'X-Device-Name': `Telegram-Mini-App`,
      },
      body: JSON.stringify(params),
    }).then((data) => {
        console.log("Data", data);
      /**
       *
       */
      if (data.status == 422) {
        /**
         *
         */
        setIsLoading(false);

        data.json().then((res) => setFormError(res.data));
      } else {
        /**
         *
         */
        data.json().then((res) => {
          /**
           *
           */
          setUserInfo(res);

          /**
           *
           */
          AsyncStorage.setItem('UserLogin', JSON.stringify(res));

          /**
           *
           */
          setFormError({});

          /**
           *
           */
          setIsLoading(false);
        });
      }
    }).catch((err) => {
        console.log("Error", err);
    });
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem("UserLogin");

      userInfo = JSON.parse(userInfo);

    //   console.log('accessToken', userInfo?.data?.access_token);
    //   console.log('teamId', userInfo?.data?.user?.team_id);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        connectID,
        userInfo,
        isLoading,
        splashLoading,
        error: formError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
