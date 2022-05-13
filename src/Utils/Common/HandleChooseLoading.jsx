import { store } from '@Redux/store';
import { localService } from '@Services/LocalStorageService';
import { loadingReducerAction } from '@Redux/Reducers/LoadingSlice';

const {
  setRequestSpinnerEnded,
  setRequestSpinnerEndedPopup,
  setRequestSpinnerStarted,
  setRequestSpinnerStartedPopup,
} = loadingReducerAction;

export const handleChooseStartLoading = (headers) => {
  if (!headers) return;

  if (headers.isLoading) {
    store.dispatch(setRequestSpinnerStarted());
    const userInfo = localService.getUserInfo();
    if (userInfo) headers.token = userInfo.token;
    return;
  }

  if (headers.isLoadingPopup) {
    store.dispatch(setRequestSpinnerStartedPopup());
    const userInfo = localService.getUserInfo();
    if (userInfo) headers.token = userInfo.token;
    return;
  }
};

export const handleChooseEndLoading = (headers) => {
  if (!headers) return;

  if (headers.isLoading) {
    store.dispatch(setRequestSpinnerEnded());
    return;
  }

  if (headers.isLoadingPopup) {
    store.dispatch(setRequestSpinnerEndedPopup());
    return;
  }
};
