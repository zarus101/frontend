import { toast } from "react-toastify";
import { BACKEND_URL, myAxios } from "./Helper";

export const loginUser = async (userData) => {
  try {
    const response = await myAxios.post(`${BACKEND_URL}/login`, userData, {
      withCredentials: true,
    });
    if (response.statusText === "OK") {
      toast.success("Loggged In successfully");
    }
    return response.data;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
  }
};

export const getLoginStatus = async () => {
  try {
    const response = await myAxios.get("/loginstatus", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
  }
};

export const logoutUser = async () => {
  try {
    await myAxios.get("/logout", {
      withCredentials: true,
    });
    // localStorage.removeItem("name")
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
  }
};
