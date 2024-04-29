import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../utils/API';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await API.get('posts');
    return response.data.data;
  }
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (post) => {
    const response = await API.post(`posts`, post);
    return response.data; 
  }
);

export const createComment = createAsyncThunk(
  'comments/createComment',
  async (comment) => {
    const response = await API.post(`comments`, comment);
    return response.data; 
  }
);

export const selectPost = createAsyncThunk(
  'posts/selectPost',
  async (id) => {
    const response = await API.get(`posts/${id}`);
    console.log(response.data.data);
    return response.data.data; 
  }
);

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async ({ id, data }) => {
    const response = await API.put(`posts/${id}`, data);
    return response.data.data; 
  }
);

export const approvePost = createAsyncThunk(
  'posts/approvePost',
  async (id) => {
    const response = await API.put(`posts/${id}/approve`);
    console.log(response);
    return response.data;
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id) => {
    const response = await API.delete(`posts/${id}`);
    console.log(response);
    return id;
  }
);

export const deleteComment = createAsyncThunk(
  'comments/deleteComment',
  async (id) => {
    const response = await API.delete(`comments/${id}`);
    console.log(response);
    return id;
  }
);

const initialState= {
  posts: [],
  loading: false,
  selectedPost: null,
  error: null,
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedPost = null;
        state.posts = action.payload;
      })
      .addCase(selectPost.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedPost = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload);
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.comments.push(action.payload);
      })
      .addCase(approvePost.fulfilled, (state, action) => {
        state.loading = false;
        const {id, title, content, img, approved, topic_id} = action.payload;
        console.log(action.payload);
        state.posts = state.posts.map(post => {
          if(post.id !== id){
            return post;
          }else{
            return {
              ...post,
              img: img,
              title: title,
              content: content,
              approved: approved,
              topic_id: topic_id,
            }
          }
          console.log("end")
        })
        
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = state.posts.filter(post => post.id !== action.payload);
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.comments = state.posts.comments.filter(comment => comment.id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
