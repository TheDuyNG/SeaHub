import apiClient from "../apiClient";

export const getWeather = (params) => {
    return apiClient.get("/marine.json", {
        params: {
            ...params,
            key: import.meta.env.VITE_WEATHER_API_KEY,
        },
    });
};