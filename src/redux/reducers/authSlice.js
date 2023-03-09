import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  userInfo: {token: null},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    userData: (state, action) => {
      console.log('ACTION', action);
      state.userInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {updateUser, userData} = authSlice.actions;

export default authSlice.reducer;
