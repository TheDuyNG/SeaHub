import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

const data = [
  { hour: "0h", value: 0.45 },
  { hour: "6h", value: 0.85 },
  { hour: "12h", value: 1.09 },
  { hour: "18h", value: 0.64 },
  { hour: "23h", value: 0.27 },
];

export default function TideChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={data}>
        <XAxis dataKey="hour" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#0284c7"
          fill="#7dd3fc"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}