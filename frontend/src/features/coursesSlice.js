import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../utils/API';

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async () => {
    const response = await API.get('courses');
    console.log(response.data.data);
    return response.data.data;
  }
);

export const createCourse = createAsyncThunk(
  'courses/createCourse',
  async (topic) => {
    const response = await API.post(`courses`, topic);
    return response.data; 
  }
);

export const selectCourse = createAsyncThunk(
  'courses/selectCourse',
  async (id) => {
    const response = await API.get(`courses/${id}`);
    console.log(response.data.data);
    return response.data.data; 
  }
);

export const updateCourse = createAsyncThunk(
  'courses/updateCourse',
  async ({ id, data }) => {
    const response = await API.put(`courses/${id}`, data);
    return response.data.data; 
  }
);
export const getByLevel = createAsyncThunk('courses/level',
async(level) => {
  const response = await API.get(`courses/level/${level}`);
  console.log(response);
  return response.data.data;
}
)

export const deleteCourse = createAsyncThunk(
  'courses/deleteCourse',
  async (id) => {
    await API.delete(`courses/${id}`);
    return id;
  }
);

export const deleteChapter = createAsyncThunk(
  'chapters/deleteChapter',
  async (id) => {
    await API.delete(`chapters/${id}`);
    return id;
  }
);

export const createChapter = createAsyncThunk(
  'chapters/createChapter',
  async (chapter) => {
    await API.post(`chapters`, chapter);
    return id;
  }
);

const initialState= {
  courses: [],
  loading: false,
  selectedCourse: null,
  error: null,
}

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCourse = null;
        state.courses = action.payload;
      })
      .addCase(getByLevel.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCourse = null;
        state.courses = action.payload;
      })
      .addCase(selectCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCourse = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courses.push(action.payload);
      })
      .addCase(createChapter.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCourse.chapters.push(action.payload);
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        state.loading = false;
        const {id, cover , title, description,  level ,topic_id} = action.payload;
        console.log(action.payload);
        state.courses = state.courses.map(course => {
          if(course.id !== id){
            return course;
          }else{
            // console.log("in else")
            return {
              ...course,
              cover: cover,
              title: title,
              description: description,
              level: level,
              topic_id: topic_id,


            }
          }
          console.log("end")
        })
        
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = state.courses.filter(course => course.id !== action.payload);
      })
      .addCase(deleteChapter.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCourse.chapters = state.selectedCourse.chapters.filter(chapter => chapter.id !== action.payload);
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default coursesSlice.reducer;
