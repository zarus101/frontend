import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import CountryService from "../services/countryService";

const initialState = {
  countries: [],
  country: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

///////creating new country
export const createCountry = createAsyncThunk("country/create", async (formData, thunkAPI) => {
  try {
    return await CountryService.createCountry(formData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});



//getting all country
export const getAllCountry = createAsyncThunk("country/getAll", async (_, thunkAPI) => {
  try {
    return await CountryService.getAllCountry();
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

///gettting country by slug
export const getCountryBySlug = createAsyncThunk("country/getBySlug", async (slug, thunkAPI) => {
  try {
    return await CountryService.getCountryBySlug(slug);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

///gettting country by id
export const getCountryById = createAsyncThunk("country/getById", async (id, thunkAPI) => {
  try {
    return await CountryService.getCountryById(id);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

//updating the country
export const updateCountry = createAsyncThunk("country/update", async ({ id, formData }, thunkAPI) => {
  try {
    return await CountryService.updateCountry(id, formData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

//deleting the country
export const deleteCountry = createAsyncThunk("country/delete", async (id, thunkAPI) => {
  try {
    return await CountryService.deleteCountry(id);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const CountrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    CALC_STORE_VALUE(state, action) {
      console.log("store Value");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCountry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCountry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.countries.push(action.payload);
        toast.success("Country added successfully.");
      })
      .addCase(createCountry.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getAllCountry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCountry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.countries = action.payload;
      })
      .addCase(getAllCountry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getCountryBySlug.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCountryBySlug.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.country = action.payload;
      })
      .addCase(getCountryBySlug.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      }).addCase(deleteCountry.pending, (state)=>{
        state.isLoading= true
      }).addCase(deleteCountry.fulfilled, (state)=>{
        state.isLoading= false
        state.isError= false
        state.isSuccess= true
        toast.success("deleted successfully")
      }).addCase(deleteCountry.rejected, (state, action)=>{
        state.isLoading= false
        state.isError= true
        state.message= action.payload
        toast.error(action.payload)
      })
  },
});

export const { CALC_STORE_VALUE } = CountrySlice.actions;

export const selectIsLoading = (state) => state.country.isLoading;
export const selectCountry = (state) => state.country.country;

const CountryReducer = CountrySlice.reducer;
export default CountryReducer;
