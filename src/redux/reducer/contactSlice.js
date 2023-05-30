import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import FaqService from "../services/faqService";
import ContactService from "../services/contactService";

const initialState = {
  contacts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

///////creating new faq
export const createContact = createAsyncThunk("contact/create", async (contactData, thunkAPI) => {
  try {
    return await ContactService.createContact(contactData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

//getting all faqs
export const getAllContact = createAsyncThunk("contact/getAll", async (_, thunkAPI) => {
  try {
    return await ContactService.getAllContact();
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

//deleting the country
export const deleteContact = createAsyncThunk("contact/delete", async (id, thunkAPI) => {
  try {
    return await ContactService.deleteContact(id);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const ContactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    CALC_STORE_VALUE(state, action) {
      console.log("store Value");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.contacts.push(action.payload);
        toast.success("Contact added successfully.");
      })
      .addCase(createContact.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getAllContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.contacts = action.payload;
      })
      .addCase(getAllContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        toast.success("deleted successfully");
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});

export const { CALC_STORE_VALUE } = ContactSlice.actions;

const ContactReducer = ContactSlice.reducer;
export default ContactReducer;
