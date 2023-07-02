import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import CategoryService from "../services/categoryService";

const initialState = {
  categories: [],
  category: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

///////creating new country
export const createCategory = createAsyncThunk("category/create", async (formData, thunkAPI) => {
  try {
    return await CategoryService.createCategory(formData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});



//getting all country
export const getAllCategory = createAsyncThunk("category/getAll", async (_, thunkAPI) => {
  try {
    return await CategoryService.getAllCategory();
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});




//deleting the country
export const deleteCategory = createAsyncThunk("category/delete", async (id, thunkAPI) => {
  try {
    return await CategoryService.deleteCategory(id);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    CALC_STORE_VALUE(state, action) {
      console.log("store Value");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.categories.push(action.payload);
        toast.success("Category added successfully.");
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getAllCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.categories = action.payload;
      })
      .addCase(getAllCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(deleteCategory.pending, (state)=>{
        state.isLoading= true
      }).addCase(deleteCategory.fulfilled, (state)=>{
        state.isLoading= false
        state.isError= false
        state.isSuccess= true
        toast.success("deleted successfully")
      }).addCase(deleteCategory.rejected, (state, action)=>{
        state.isLoading= false
        state.isError= true
        state.message= action.payload
        toast.error(action.payload)
      })
  },
});

export const { CALC_STORE_VALUE } = CategorySlice.actions;

export const selectIsLoading = (state) => state.blog.isLoading;

const CategoryReducer = CategorySlice.reducer;
export default CategoryReducer;
