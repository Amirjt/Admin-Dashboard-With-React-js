import React from "react";
import { LineChart, Line, XAxis, YAxis ,Tooltip , CartesianGrid } from "recharts";
import { data } from "./MainChart";
export default function MobileChart() {
  return (
    <>
     <div className="w-full mt-6 dark:bg-slate-800 bg-main p-10 flex justify-center items-center rounded-3xl shadow-xl">
     <LineChart width={205} className="" height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" className="opacity-50" strokeDasharray="4 4"/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
     </div>
    </>
  );
}
