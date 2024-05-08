import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { AppLoadingProps, ShowLoadingProps } from './appLoadingSlice.d';
import { RootState } from '../../store';

const initialState: AppLoadingProps = {
  isLoading: false,
  title: 'Please Wait',
  description: 'Loading is in progress',
};

export const appLoadingSlice = createSlice({
  name: 'appLoading',
  initialState,
  reducers: {
    showLoading: (state, action: PayloadAction<ShowLoadingProps>) => {
      return {
        ...state,
        title: action.payload.title || 'Please Wait',
        description: action.payload.description || 'Loading is in progress',
        isLoading: true,
      };
    },
    hideLoading: (state) => {
      return {
        ...state,
        isLoading: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { showLoading, hideLoading } = appLoadingSlice.actions;

export const appLoadingSelector = (state: RootState) => state.appLoading;

export default appLoadingSlice.reducer;