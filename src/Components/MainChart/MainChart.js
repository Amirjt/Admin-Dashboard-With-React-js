import React from "react";
import { LineChart, Line, XAxis, YAxis ,Tooltip , CartesianGrid } from "recharts";

const data = [
  { name: "Income", uv: 3500, pv: 2400, amt: 2400 },
  { name: "Cost", uv: 7500, pv: 2400, amt: 2400 },
  { name: "Sales", uv: 9000, pv: 2400, amt: 2400 },
  { name: "Else", uv: 3000, pv: 2400, amt: 2400 },
];

export default function MainChart() {
  return (
    <>
     <div className="w-full mt-6 dark:bg-slate-800 bg-main p-10 flex flex-col justify-center items-center rounded-3xl shadow-xl">
     <h2 className="self-start dark:text-second font-bold" >Analytics</h2>
     <LineChart width={1300} className="" height={220} data={data}>
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

export {data}
