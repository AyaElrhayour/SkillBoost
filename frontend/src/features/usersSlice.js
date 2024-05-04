import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../utils/API';

export const fetchTeachers = createAsyncThunk(
  'users/fetchTeachers',
  async () => {
    const response = await API.get('teachers');
    console.log(response.data.data);
    return response.data.data;
  }
);

export const fetchStudents = createAsyncThunk(
  'users/fetchStudents',
  async () => {
    const response = await API.get('students');
    console.log(response.data.data);
    return response.data.data;
  }
);

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await API.get('users');
    return response.data.data;
  }
);

export const updateUserBanStatus = createAsyncThunk(
  'users/updateUserBanStatus',
  async ({ userId, isBanned }) => {
    const response = await API.put(`users/${userId}/ban`, { is_banned: isBanned });
    return { userId, isBanned };
  }
);



const initialState = {
  teachers: [],
  students: [],
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.loading = false;
        state.teachers = action.payload;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(updateUserBanStatus.fulfilled, (state, action) => {
        const { userId, isBanned } = action.payload;
        const userIndex = state.users.findIndex((user) => user.id === userId);
        if (userIndex !== -1) {
          state.users[userIndex].is_banned = isBanned;
        }
      });

  },
});

export default usersSlice.reducer;