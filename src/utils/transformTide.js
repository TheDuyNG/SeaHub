export const transformTideData = (data) => {
    const tides = data?.forecast?.forecastday?.[0]?.day?.tides?.[0]?.tide || [];

    console.log("tides raw:", tides);

    return tides.map((item) => ({
        hour: item.tide_time?.split(" ")[1],
        value: Number(item.tide_height_mt),
        type: item.tide_type,
    }));
};