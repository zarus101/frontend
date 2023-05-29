import axios from "axios";

export const BACKEND_URL="http://localhost:5000/vedu";
export const myAxios= axios.create({
    baseURL:BACKEND_URL
})