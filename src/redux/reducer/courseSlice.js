import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CourseService from "../services/courseService";
import { toast } from "react-toastify";

const initialState = {
  courses: [],
  course: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

///////creating new Course
export const createCourse = createAsyncThunk("course/create", async (formData, thunkAPI) => {
  try {
    return await CourseService.createCourse(formData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

export const getAllCourse = createAsyncThunk("course/getAll", async (_, thunkAPI) => {
  try {
    return await CourseService.getAllCourse();
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

///gettting course by slug
export const getCourseBySlug = createAsyncThunk("course/getBySlug", async (slug, thunkAPI) => {
  try {
    return await CourseService.getCourseBySlug(slug);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

///gettting course by id
export const getCourseById = createAsyncThunk("course/getById", async (id, thunkAPI) => {
  try {
    return await CourseService.getCourseById(id);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

//updating the course
export const updateCourse = createAsyncThunk("course/update", async ({ id, formData }, thunkAPI) => {
  try {
    return await CourseService.updateCourse(id, formData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

//deleting the course
export const deleteCourse = createAsyncThunk("course/delete", async (id, thunkAPI) => {
  try {
    return await CourseService.deleteCourse(id);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const CourseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    CALC_STORE_VALUE(state, action) {
      console.log("store Value");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.courses.push(action.payload);
        toast.success("Course createed successfully.");
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getAllCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.courses = action.payload;
      })
      .addCase(getAllCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getCourseBySlug.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCourseBySlug.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.course = action.payload;
      })
      .addCase(getCourseBySlug.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      }).addCase(deleteCourse.pending, (state)=>{
        state.isLoading= true
      }).addCase(deleteCourse.fulfilled, (state)=>{
        state.isLoading= false
        state.isError= false
        state.isSuccess= true
        toast.success("deleted successfully")
      }).addCase(deleteCourse.rejected, (state, action)=>{
        state.isLoading= false
        state.isError= true
        state.message= action.payload
        toast.error(action.payload)
      })
  },
});

export const { CALC_STORE_VALUE } = CourseSlice.actions;

export const selectIsLoading = (state) => state.course.isLoading;
export const selectCourse = (state) => state.course.course;

const CourseReducer = CourseSlice.reducer;
export default CourseReducer;
