import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_WEATHER_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

// request interceptor
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// response interceptor
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const status = error.response?.status;

    return Promise.reject({
      status,
      message: error.response?.data?.message || "Something went wrong",
      data: error.response?.data,
    });
  }
);

export default axiosInstance;