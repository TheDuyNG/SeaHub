import { useState, useEffect } from "react";

import TideChart from "./TideChart";
import WindCard from "./WindCard";
import WeatherCard from "./WeatherCard";
import VerticalComposedChart from "./VerticalComposedChart";

import { formatChartData } from "../utils/FormatChartData";

export const fetchTideByDate = async (date) => {
    console.log("Fetching data for:", date);

    // demo: random data
    return Array.from({ length: 24 }, (_, i) => ({
        hour: `${i}h`,
        value: Number((Math.random() * 1.2).toFixed(2)),
    }));
};

export default function Dashboard() {
    const [data, setData] = useState([]);
    const [date, setDate] = useState("");

    const loadData = async (selectedDate) => {
        const res = await fetchTideByDate(selectedDate);
        setData(res);
    };

    useEffect(() => {
        // load default (today)
        const today = new Date().toISOString().split("T")[0];
        setDate(today);
        loadData(today);
    }, []);

    return (
        <div className="min-h-screen bg-sky-50 p-4 space-y-4">
            <div className="bg-white p-3 rounded-2xl shadow flex items-center gap-3">
                <label className="font-semibold">📅 Ngày:</label>

                <input
                    type="date"
                    value={date}
                    max={new Date().toISOString().split("T")[0]}
                    onChange={(e) => {
                        const selected = e.target.value;
                        setDate(selected);
                        loadData(selected);
                    }}
                    className="border px-2 py-1 rounded"
                />
            </div>

            {/* Tide */}
            <div className="bg-white p-4 rounded-2xl shadow">
                <h2 className="font-bold text-lg mb-2">🌊 Thủy triều</h2>
                <TideChart data={data} />
            </div>
            <div className="bg-white p-4 rounded-2xl shadow">
                <h2 className="font-bold text-lg mb-2">🌊 Thủy triều</h2>
                <VerticalComposedChart data={formatChartData(data)} />
            </div>
            {/* Grid */}
            <div className="grid grid-cols-2 gap-4">
                <WindCard />
                <WeatherCard />
            </div>

            {/* Suggest */}
            <div className="bg-white p-4 rounded-2xl shadow">
                <h2 className="font-bold">📊 Gợi ý</h2>
                <p className="text-sm mt-2">
                    Buổi sáng nước đang lên + gió nhẹ → phù hợp ra khơi
                </p>
            </div>

        </div>
    );
}