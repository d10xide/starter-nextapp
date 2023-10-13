"use client";

import { Card } from "@/components/ui/card";
import { formatPrice } from "@/lib/format";
import { Decimal } from "@prisma/client/runtime/library";
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
interface ChartProps {
  data: {
    name: string;
    total: number;
  }[];
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-slate-200 p-2">
        <p className="label">{`${label} : ${formatPrice(payload[0].value)}`}</p>
      </div>
    );
  }

  return null;
};
const Chart = ({ data }: ChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <ComposedChart layout="vertical" width={500} height={400} data={data}>
        <XAxis type="number" hide />
        <YAxis dataKey="name" type="category" scale="auto" fontSize={8} />
        <Tooltip content={<CustomTooltip />} />
        {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
        <Bar dataKey="total" barSize={20} fill="#413ea0">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
        {/* <Line dataKey="uv" stroke="#ff7300" /> */}
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Chart;
