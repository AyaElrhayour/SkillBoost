import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../utils/API';
import Description from '../components/Description';

export const fetchTopics = createAsyncThunk(
  'topics/fetchTopics',
  async () => {
    const response = await API.get('topics');
    console.log(response.data.data);
    return response.data.data;
  }
);

export const createTopic = createAsyncThunk(
  'topics/createTopic',
  async (topic) => {
    const response = await API.post(`topics`, topic);
    return response.data; 
  }
);

export const updateTopic = createAsyncThunk(
  'topics/updateTopic',
  async ({ id, data }) => {
    const response = await API.put(`topics/${id}`, data);
    return response.data.data; 
  }
);

export const deleteTopic = createAsyncThunk(
  'topics/deleteTopic',
  async (id) => {
    await API.delete(`topics/${id}`);
    return id;
  }
);

const initialState= {
  topics: [],
  loading: false,
  error: null,
}

const topicSlice = createSlice({
  name: 'topics',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopics.fulfilled, (state, action) => {
        state.loading = false;
        state.topics = action.payload;
      })
      .addCase(fetchTopics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteTopic.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTopic.fulfilled, (state, action) => {
        state.loading = false;
        state.topics.push(action.payload);
      })
      .addCase(updateTopic.fulfilled, (state, action) => {
        state.loading = false;
        const {id, name, description} = action.payload;
        console.log(action.payload);
        // console.log("name", name, "description", description);
        state.topics = state.topics.map(topic => {
          if(topic.id !== id){
            return topic;
          }else{
            console.log("in else")
            return {
              ...topic,
              name: name,
              description: description 

            }
          }
          console.log("end")
        })
        
      })
      .addCase(deleteTopic.fulfilled, (state, action) => {
        state.loading = false;
        state.topics = state.topics.filter(topic => topic.id !== action.payload);
      })
      .addCase(deleteTopic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default topicSlice.reducer;
