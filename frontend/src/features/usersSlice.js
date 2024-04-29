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

const initialState= {
  teachers: [],
  students: [],
  loading: false,
  error: null,
}

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
  },
});

export default usersSlice.reducer;
