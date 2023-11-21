import React, { useEffect, useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";
import { BarChart, Bar, XAxis } from 'recharts';
const data = [{name: 'Income', uv: 3500 , pv: 2400, amt: 2400},
{name: 'Cost', uv: 7500, pv: 2400, amt: 2400}]


const formatNumber = (number) => {
  return number < 10 ? `0${number}` : number;
};

export default function Boxes() {
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [day , setDay] = useState(null)

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


  useEffect(() => {
    const intervalId = setInterval(() => {
      let date = new Date();
      let hour = formatNumber(date.getHours());
      let minutes = formatNumber(date.getMinutes());
      let seconds = formatNumber(date.getSeconds());
      let day = date.getDay()
      setHour(hour);
      setMinutes(minutes);
      setSeconds(seconds);
      setDay(days[day])
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
   <div className="grid grid-row grid-cols-1 md:grid-cols-4 gap-3">
      <div className="dark:bg-slate-800 bg-main p-5 w-full rounded-t-3xl rounded-l-3xl flex gap-8 justify-center items-center h-40 text-3xl font-bold dark:text-third shadow-xl relative">
        <span className="dark:bg-slate-700 bg-white p-2 md:p-5 rounded-md shadow-md">{hour}</span>
        <span className="dark:bg-slate-700 bg-white p-2 md:p-5 rounded-md shadow-md">{minutes}</span>
        <span className="dark:bg-slate-700 bg-white p-2 md:p-5 rounded-md shadow-md">{seconds}</span>
        <span className="dark:bg-slate-700 bg-white p-2 md:p-2 text-sm rounded-md shadow-md text-second absolute -top-1 -left-1">{day}</span>
      </div>
      <div className="dark:bg-slate-800 bg-main p-4 w-full rounded-t-3xl rounded-l-3xl flex flex-col gap-3 justify-around items-start h-40 dark:text-third shadow-xl relative">
        <h2 className="font-bold text-lg opacity-75" >Income</h2>
        <div className="flex w-full justify-center gap-10 font-bold text-xl items-center">
          <span>$3,500</span>
          <FaArrowDownLong className="text-red-600 text-2xl"/>
        </div>
        <span className="self-end text-sm opacity-75" >In a Month</span>
      </div>
      <div className="dark:bg-slate-800 bg-main p-4 w-full rounded-t-3xl rounded-l-3xl flex flex-col gap-3 justify-around items-start h-40 dark:text-third shadow-xl relative">
        <h2 className="font-bold text-lg opacity-75" >Cost</h2>
        <div className="flex w-full justify-center gap-10 font-bold text-xl items-center">
          <span>$7,500</span>
          <FaArrowUpLong className="text-green-600 text-2xl"/>
        </div>
        <span className="self-end text-sm opacity-75" >In a Month</span>
      </div>
      <div className="dark:bg-slate-800 bg-main p-5 w-full rounded-t-3xl rounded-l-3xl  flex gap-8 justify-center items-center h-40 text-3xl font-bold dark:text-third shadow-xl relative">
  <BarChart width={300} height={150} data={data} className="text-sm mt-4">
    <XAxis dataKey="name" stroke="#8884d8" />
    <Bar dataKey="uv" fill="#ff99c8" barSize={20} />
  </BarChart>
      </div>  
    </div>
    </>
  );
}
