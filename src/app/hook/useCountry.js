import { useQuery } from "@tanstack/react-query";
import { getCountry } from "../api/country";

const useCountry = (params) => {
    return useQuery({
        queryKey: ["country", params],
        queryFn: () => getCountry(params).then(res => res.data),
        select: (cities = []) =>
            cities.map((city) => ({
                label: city,
                value: city,
            })),
        refetchOnWindowFocus: false,
    });
};

export default useCountry;