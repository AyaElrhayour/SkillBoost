import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../utils/API';

export const selectChapter = createAsyncThunk(
  'chapters/selectChapter',
  async (id) => {
    const response = await API.get(`chapters/${id}`);
    console.log(response.data.data);
    return response.data.data; 
  }
);

const initialState= {
  chapters: [],
  loading: false,
  selectedChapter: null, 
  error: null,
}

const chaptersSlice = createSlice({
  name: 'chapters',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(selectChapter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(selectChapter.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedChapter = action.payload;
      })
      .addCase(selectChapter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default chaptersSlice.reducer;
