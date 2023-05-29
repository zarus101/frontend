import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import BlogService from "../services/blogService";

const initialState = {
  blogs: [],
  blog: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

///////creating new country
export const createBlog = createAsyncThunk("blog/create", async (formData, thunkAPI) => {
  try {
    return await BlogService.createBlog(formData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});



//getting all country
export const getAllBlog = createAsyncThunk("blog/getAll", async (_, thunkAPI) => {
  try {
    return await BlogService.getAllBlog();
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

///gettting country by slug
export const getBlogBySlug = createAsyncThunk("blog/getBySlug", async (slug, thunkAPI) => {
  try {
    return await BlogService.getBlogBySlug(slug);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

///gettting country by id
export const getBlogById = createAsyncThunk("blog/getById", async (id, thunkAPI) => {
  try {
    return await BlogService.getBlogById(id);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

//updating the country
export const updateBlog = createAsyncThunk("blog/update", async ({ id, formData }, thunkAPI) => {
  try {
    return await BlogService.updateBlog(id, formData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

//deleting the country
export const deleteBlog = createAsyncThunk("blog/delete", async (id, thunkAPI) => {
  try {
    return await BlogService.deleteBlog(id);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const BlogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    CALC_STORE_VALUE(state, action) {
      console.log("store Value");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.blogs.push(action.payload);
        toast.success("Blog added successfully.");
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getAllBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.blogs = action.payload;
      })
      .addCase(getAllBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getBlogBySlug.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getBlogBySlug.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blog = action.payload;
      })
      .addCase(getBlogBySlug.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      }).addCase(deleteBlog.pending, (state)=>{
        state.isLoading= true
      }).addCase(deleteBlog.fulfilled, (state)=>{
        state.isLoading= false
        state.isError= false
        state.isSuccess= true
        toast.success("deleted successfully")
      }).addCase(deleteBlog.rejected, (state, action)=>{
        state.isLoading= false
        state.isError= true
        state.message= action.payload
        toast.error(action.payload)
      })
  },
});

export const { CALC_STORE_VALUE } = BlogSlice.actions;

export const selectIsLoading = (state) => state.blog.isLoading;
export const selectBlog = (state) => state.blog.blog;

const BlogReducer = BlogSlice.reducer;
export default BlogReducer;
