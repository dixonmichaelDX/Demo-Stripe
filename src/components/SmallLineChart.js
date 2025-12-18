import React from "react";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Mon", value: 12 },
  { name: "Tue", value: 18 },
  { name: "Wed", value: 14 },
  { name: "Thu", value: 22 },
  { name: "Fri", value: 19 },
  { name: "Sat", value: 25 },
  { name: "Sun", value: 21 },
];

const SmallLineChart = ({ color = "#4f46e5" }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
        <Tooltip
          cursor={{ stroke: "rgba(148, 163, 184, 0.4)", strokeWidth: 1 }}
          contentStyle={{ fontSize: "0.7rem" }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          dot={true}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SmallLineChart;
