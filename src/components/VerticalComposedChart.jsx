import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function VerticalComposedChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        layout="vertical"
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        {/* Trục X = giá trị */}
        <XAxis type="number" />

        {/* Trục Y = giờ */}
        <YAxis dataKey="hour" type="category" />

        <Tooltip />

        {/* Bar = mực nước */}
        <Bar
          dataKey="value"
          barSize={12}
          fill="#38bdf8"
          radius={[0, 6, 6, 0]}
        />

        {/* Line = trend */}
        <Line
          type="monotone"
          dataKey="trend"
          stroke="#f97316"
          strokeWidth={2}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}