import React from "react";

const tideData = [
    { hour: "0h", value: 0.45 },
    { hour: "1h", value: 0.58 },
    { hour: "2h", value: 0.69 },
    { hour: "3h", value: 0.77 },
    { hour: "4h", value: 0.81 },
    { hour: "5h", value: 0.84 },
    { hour: "6h", value: 0.85 },
    { hour: "7h", value: 0.87 },
    { hour: "8h", value: 0.89 },
    { hour: "9h", value: 0.92 },
    { hour: "10h", value: 0.97 },
    { hour: "11h", value: 1.03 },
    { hour: "12h", value: 1.09 },
    { hour: "13h", value: 1.12 },
    { hour: "14h", value: 1.11 },
    { hour: "15h", value: 1.05 },
    { hour: "16h", value: 0.93 },
    { hour: "17h", value: 0.79 },
    { hour: "18h", value: 0.64 },
    { hour: "19h", value: 0.49 },
    { hour: "20h", value: 0.36 },
    { hour: "21h", value: 0.27 },
    { hour: "22h", value: 0.24 },
    { hour: "23h", value: 0.27 },
];

const Demo = () => {
    const maxValue = Math.max(...tideData.map((d) => d.value));
    return (
        <>
            <div className="w-[350px] bg-gray-200 border p-2">

                {/* Header */}
                <div className="bg-orange-400 text-white text-center py-2 font-semibold">
                    Lịch thủy triều Đà Nẵng
                </div>

                <div className="bg-blue-800 text-white text-center py-1 text-sm">
                    Thời gian (h là giờ)
                </div>

                {/* Chart */}
                <div className="space-y-[2px] mt-2">
                    {tideData.map((item, index) => {
                        const widthPercent = (item.value / maxValue) * 100;

                        return (
                            <div key={index} className="flex items-center text-xs">

                                {/* Hour */}
                                <div className="w-8 text-right pr-1 text-black">
                                    {item.hour}
                                </div>

                                {/* Bar */}
                                <div className="flex-1 bg-gray-300 relative h-5">
                                    <div
                                        className="bg-cyan-600 h-full text-white flex items-center pl-2"
                                        style={{ width: `${widthPercent}%` }}
                                    >
                                        {item.value.toFixed(2)}m
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="bg-blue-800 text-white text-center py-1 mt-2 text-sm">
                    Mực nước (m là mét)
                </div>

                <div className="bg-orange-400 text-white text-center py-1 text-sm">
                    SiamBrothersvn.Com
                </div>
            </div>
        </>
    )
}

export default Demo