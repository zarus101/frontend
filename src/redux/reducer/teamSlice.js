import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import TeamService from "../services/teamService";

const initialState = {
  teams: [],
  team: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

///////creating new country
export const createTeam = createAsyncThunk("team/create", async (formData, thunkAPI) => {
  try {
    return await TeamService.createTeam(formData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});



//getting all country
export const getAllTeam = createAsyncThunk("team/getAll", async (_, thunkAPI) => {
  try {
    return await TeamService.getAllTeam();
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

///gettting country by slug
export const getTeamBySlug = createAsyncThunk("team/getBySlug", async (slug, thunkAPI) => {
  try {
    return await TeamService.getTeamBySlug(slug);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

///gettting country by id
export const getTeamById = createAsyncThunk("team/getById", async (id, thunkAPI) => {
  try {
    return await TeamService.getTeamById(id);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

//updating the country
export const updateTeam = createAsyncThunk("team/update", async ({ id, formData }, thunkAPI) => {
  try {
    return await TeamService.updateTeam(id, formData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

//deleting the country
export const deleteTeam = createAsyncThunk("team/delete", async (id, thunkAPI) => {
  try {
    return await TeamService.deleteTeam(id);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.data || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const TeamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    CALC_STORE_VALUE(state, action) {
      console.log("store Value");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTeam.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTeam.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.teams.push(action.payload);
        toast.success("Team added successfully.");
      })
      .addCase(createTeam.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getAllTeam.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTeam.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.teams = action.payload;
      })
      .addCase(getAllTeam.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getTeamBySlug.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getTeamBySlug.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.team = action.payload;
      })
      .addCase(getTeamBySlug.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      }).addCase(deleteTeam.pending, (state)=>{
        state.isLoading= true
      }).addCase(deleteTeam.fulfilled, (state)=>{
        state.isLoading= false
        state.isError= false
        state.isSuccess= true
        toast.success("deleted successfully")
      }).addCase(deleteTeam.rejected, (state, action)=>{
        state.isLoading= false
        state.isError= true
        state.message= action.payload
        toast.error(action.payload)
      })
  },
});

export const { CALC_STORE_VALUE } = TeamSlice.actions;

export const selectIsLoading = (state) => state.team.isLoading;
export const selectTeam = (state) => state.team.team;

const TeamReducer = TeamSlice.reducer;
export default TeamReducer;
