

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../utils/API';
import Cookies from 'js-cookie';


export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData) => {
    const response = await API.post(`auth/register`, userData);
    return response.data;
  }
);

export const findAuthUser = createAsyncThunk(
  'auth/getUser',
  async () => {
    const response = await API.get(`user`);
    console.log(response.data);
    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }) => {
    const response = await API.post(`auth/login`, { email, password });
    return response.data;
  }
);




const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(findAuthUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
      
  },
});

export default authSlice.reducer;
