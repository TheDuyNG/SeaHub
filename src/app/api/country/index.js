import apiClient from "../apiClient";

export const getCountry = (params) => {
    return apiClient.post("https://countriesnow.space/api/v0.1/countries/cities", params);
};