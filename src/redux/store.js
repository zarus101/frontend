import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducer/auth/authSlice";
import CourseReducer from "./reducer/courseSlice";
import CountryReducer from "./reducer/countrySlice";
import ServiceReducer from "./reducer/serviceSlice";
import BlogReducer from "./reducer/blogSlice";
import TeamReducer from "./reducer/teamSlice";

export const store= configureStore({
    reducer: {
       auth: AuthReducer ,
       course: CourseReducer,
       country: CountryReducer,
       service: ServiceReducer,
       blog: BlogReducer,
       team: TeamReducer

    }
})