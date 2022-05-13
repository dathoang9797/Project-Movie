import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isLoadingPopUp: false,
  countIsLoading: 0,
  countIsLoadingPopup: 0,
};

const loadingSlice = createSlice({
  name: 'loadingReducer',
  initialState,
  reducers: {
    setRequestSpinnerStarted: (state) => {
      state.countIsLoading++;
      state.isLoading = true;
    },
    setRequestSpinnerEnded: (state) => {
      state.countIsLoading--;
      if (state.countIsLoading <= 0) {
        state.isLoading = false;
      }
    },
    setRequestSpinnerStartedPopup: (state) => {
      state.countIsLoadingPopup++;
      state.isLoadingPopUp = true;
    },
    setRequestSpinnerEndedPopup: (state) => {
      state.countIsLoadingPopup--;
      if (state.countIsLoadingPopup <= 0) {
        state.isLoadingPopUp = false;
      }
    },
  },
});

const {
  setRequestSpinnerEnded,
  setRequestSpinnerStarted,
  setRequestSpinnerEndedPopup,
  setRequestSpinnerStartedPopup,
} = loadingSlice.actions;

export const loadingReducerAction = {
  setRequestSpinnerEnded,
  setRequestSpinnerStarted,
  setRequestSpinnerEndedPopup,
  setRequestSpinnerStartedPopup,
};
export default loadingSlice.reducer;
