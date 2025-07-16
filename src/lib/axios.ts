import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// error handling for axios requests
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Log errors for debugging
    console.error("Axios Error:", {
      message: error.message,
      response: error.response,
      request: error.request,
    });
    return Promise.reject(error);
  }
);

export default axiosInstance;