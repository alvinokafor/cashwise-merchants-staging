import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const apiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_API_URL as string}`,
  timeout: 5000, // 5 seconds timeout
});

// const baseURL = 'http://165.227.77.33:8105/api//auth/merchant';

// Function to sign up a user
export const signUpUser = async (
  userData: any,
  navigate: ReturnType<typeof useNavigate>
) => {
  try {
    const response = await apiInstance.post("/register/", userData);
    // console.log(response)
    if (response.status === 200) {
      localStorage.setItem("email", userData.email);
      toast(`${response.data.message} Successful`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setTimeout(() => {
        navigate("/auth/otp/");
      }, 3000);
    } else {
      // Handle non-200 status code
      toast("Error creating account!");
      console.error("Signup error:", response.statusText);
    }
  } catch (error: any) {
    if (error.response) {
      const errorMessage =
        error.response.data.message || "Error creating account!";
      toast(errorMessage);
      console.error("Signup error:", error);
    } else if (error.request) {
      // No response received from the server
      toast("No response from server");
      console.error("Request error:", error);
    } else {
      // Something else happened
      toast("Request failed");
      console.error("Generic error:", error);
    }

    throw error; // Rethrow the error if needed
  }
};

// Function to log in a user
export const loginUser = async (
  userData: any,
  navigate: ReturnType<typeof useNavigate>
) => {
  try {
    const response = await apiInstance.post("/login", userData);
    if (response.status === 200) {
      console.log(response.data, "login details");
      localStorage.setItem("token", response.data.data.token);
      toast(`${response.data.message} Successful`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      toast("Error login into account!");
      console.error("login error:", response.statusText);
    }
  } catch (error: any) {
    if (error.response) {
      // Server responded with an error status code
      const errorMessage =
        error.response.data.message || "Error login into account!";
      toast(errorMessage);
      console.error("Login error:", error);
    } else if (error.request) {
      // No response received from the server
      toast("No response from server");
      console.error("Request error:", error);
    } else {
      // Something else happened
      toast("Request failed");
      console.error("Generic error:", error);
    }
    throw error; // Rethrow the error if needed
  }
};

// Function to verify OTP
export const verifyOTP = async (
  otpData: any,
  navigate: ReturnType<typeof useNavigate>
) => {
  try {
    console.log(otpData, "otp");
    const response = await apiInstance.post("/activate", otpData);
    console.log(otpData, "otp");
    toast(`${response.data.message} Successful`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    setTimeout(() => {
      navigate("/auth/login/");
    }, 3000);

    return response.data; // Return response data if needed
  } catch (error: any) {
    if (error.response) {
      // Server responded with an error status code
      const errorMessage =
        error.response.data.message || "Error varifing account!";
      toast(errorMessage);
      console.error("otp error:", error);
    } else if (error.request) {
      // No response received from the server
      toast("No response from server");
      console.error("Request error:", error);
    } else {
      // Something else happened
      toast("Request failed");
      console.error("Generic error:", error);
    }

    throw error; // Rethrow the error if needed
  }
};

// Function to reset password
export const resetPassword = async (email: string) => {
  try {
    const response = await apiInstance.post("/reset-password", { email });
    return response.data; // Return response data if needed
  } catch (error: any) {
    throw error.response.data; // Throw error if request fails
  }
};
