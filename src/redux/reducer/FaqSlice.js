import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import FaqService from "../services/faqService";

const initialState = {
  faqs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

///////creating new faq
export const createFaq = createAsyncThunk("faq/create", async (faqData, thunkAPI) => {
  try {
    return await FaqService.createFaq(faqData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

//getting all faqs
export const getAllFaq = createAsyncThunk("faq/getAll", async (_, thunkAPI) => {
  try {
    return await FaqService.getAllFaq();
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

//deleting the country
export const deleteFaq = createAsyncThunk("faq/delete", async (id, thunkAPI) => {
  try {
    return await FaqService.deleteFaq(id);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const FaqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    CALC_STORE_VALUE(state, action) {
      console.log("store Value");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createFaq.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createFaq.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.faqs.push(action.payload);
        toast.success("Faq added successfully.");
      })
      .addCase(createFaq.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getAllFaq.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllFaq.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.faqs = action.payload;
      })
      .addCase(getAllFaq.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(deleteFaq.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteFaq.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        toast.success("deleted successfully");
      })
      .addCase(deleteFaq.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});

export const { CALC_STORE_VALUE } = FaqSlice.actions;

export const selectIsLoading = (state) => state.blog.isLoading;

const FaqReducer = FaqSlice.reducer;
export default FaqReducer;
