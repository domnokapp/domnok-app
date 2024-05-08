import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState: any = {
  accessToken: '',
  isPending: false,
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    saveToken: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        accessToken: action.payload,
      };
    },
    saveUserInfo: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    setPending: (state, action: PayloadAction<boolean>) => {
      state.isPending = action.payload;
    },
    logout: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveToken, saveUserInfo, logout, setPending } = userInfoSlice.actions;

export const userInfoSelector = (state: RootState) => state.userInfo;

export default userInfoSlice.reducer;