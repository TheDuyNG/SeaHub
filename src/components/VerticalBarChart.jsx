import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from "recharts";

export default function VerticalBarChart({
  data = [],
  xKey = "value",
  yKey = "hour",
  height = 400,
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 20, right: 40, bottom: 20, left: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        {/* Trục X = value */}
        <XAxis type="number" />

        {/* Trục Y = label (hour) */}
        <YAxis dataKey={yKey} type="category" interval={0} />

        <Tooltip />

        <Bar
          dataKey={xKey}
          barSize={12}
          fill="#38bdf8"
          radius={[0, 6, 6, 0]}
        >
          {/* Hiển thị giá trị trên bar */}
          <LabelList
            dataKey={xKey}
            position="right"
            style={{ fill: "#000", fontSize: 12 }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}