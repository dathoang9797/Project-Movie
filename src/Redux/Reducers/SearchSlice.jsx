import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
};

const searchSlice = createSlice({
  name: 'searchReducer',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

const { setSearchValue } = searchSlice.actions;

export const searchReducerAction = {
  setSearchValue,
};
export default searchSlice.reducer;
