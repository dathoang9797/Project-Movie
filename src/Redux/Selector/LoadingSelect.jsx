//Write like this will rerender multile time can console.log to check in HomePage.tsx
//export const selectIsLoadingState = (state: RootState) => state.LoadingReducer;

const selectIsLoadingState = (state) => state.LoadingReducer.isLoading;

const selectIsLoadingPopupState = (state) => state.LoadingReducer.isLoadingPopUp;

const selectCountState = (state) => state.LoadingReducer.count;

export const loadingSelector = {
  selectIsLoadingState,
  selectIsLoadingPopupState,
  selectCountState,
};
