"use client";

import { formatPrice } from "@/lib/format";
import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartProps {
  data: {
    name: string;
    total: number;
  }[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-slate-200 p-2">
        <p className="label">{`${label+1} : ${formatPrice(payload[0].value)}`}</p>
      </div>
    );
  }

  return null;
};

const TinyChart = ({ data }: ChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart width={200} height={20} data={data}>
        <Tooltip content={<CustomTooltip />} />
        <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default TinyChart;
