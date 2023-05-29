import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import ServiceService from "../services/serviceService";

const initialState = {
  services: [],
  service: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

///////creating new country
export const createService = createAsyncThunk("service/create", async (formData, thunkAPI) => {
  try {
    return await ServiceService.createService(formData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});



//getting all country
export const getAllService = createAsyncThunk("service/getAll", async (_, thunkAPI) => {
  try {
    return await ServiceService.getAllService();
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

///gettting country by slug
export const getServiceBySlug = createAsyncThunk("service/getBySlug", async (slug, thunkAPI) => {
  try {
    return await ServiceService.getServiceBySlug(slug);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

///gettting country by id
export const getServiceById = createAsyncThunk("service/getById", async (id, thunkAPI) => {
  try {
    return await ServiceService.getServiceById(id);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

//updating the country
export const updateService = createAsyncThunk("service/update", async ({ id, formData }, thunkAPI) => {
  try {
    return await ServiceService.updateService(id, formData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

//deleting the country
export const deleteService = createAsyncThunk("service/delete", async (id, thunkAPI) => {
  try {
    return await ServiceService.deleteService(id);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    CALC_STORE_VALUE(state, action) {
      console.log("store Value");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.services.push(action.payload);
        toast.success("Service added successfully.");
      })
      .addCase(createService.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getAllService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.services = action.payload;
      })
      .addCase(getAllService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getServiceBySlug.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getServiceBySlug.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.service = action.payload;
      })
      .addCase(getServiceBySlug.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      }).addCase(deleteService.pending, (state)=>{
        state.isLoading= true
      }).addCase(deleteService.fulfilled, (state)=>{
        state.isLoading= false
        state.isError= false
        state.isSuccess= true
        toast.success("deleted successfully")
      }).addCase(deleteService.rejected, (state, action)=>{
        state.isLoading= false
        state.isError= true
        state.message= action.payload
        toast.error(action.payload)
      })
  },
});

export const { CALC_STORE_VALUE } = serviceSlice.actions;

export const selectIsLoading = (state) => state.service.isLoading;
export const selectService = (state) => state.service.country;

const ServiceReducer = serviceSlice.reducer;
export default ServiceReducer;
