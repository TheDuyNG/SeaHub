import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api/weather";

const useWeather = (params) => {
    return useQuery({
        queryKey: ["weather", params],
        queryFn: () => getWeather(params),
    });
};

export default useWeather;