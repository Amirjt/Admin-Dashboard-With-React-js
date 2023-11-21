import React from 'react'
import MainChart from '../../Components/MainChart/MainChart'
import MobileChart from '../../Components//MainChart/MobileChart'
import { BarChart , XAxis , Bar , Tooltip , CartesianGrid } from 'recharts'

const data = [{name: 'Income', uv: 3500 , pv: 2400, amt: 2400},
{name: 'Cost', uv: 7500, pv: 2400, amt: 2400},
{name: 'Else', uv: 500, pv: 2400, amt: 2400},
{name: 'Else', uv: 6500, pv: 2400, amt: 2400},
{name: 'Else', uv: 8000, pv: 2400, amt: 2400},
{name: 'Else', uv: 300, pv: 2400, amt: 2400},
{name: 'Else', uv: 4300, pv: 2400, amt: 2400}]

export default function Analytics() {
  return (
    <div>
      <div>
      <div className='hidden md:block'>
        <MainChart/>
        </div>
        <div className='block md:hidden'>
         <MobileChart/>
        </div>
      </div>
      <div className='dark:bg-slate-800 rounded-3xl shadow-xl hidden md:flex justify-center p-4 mt-10'>
      <BarChart width={1300} height={300} data={data} className="text-sm mt-4">
    <XAxis dataKey="name" stroke="#8884d8" />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <CartesianGrid stroke="#ccc" className="opacity-75" strokeDasharray='5 5' />
    <Bar dataKey="uv" fill="#ff99c8" barSize={40} />
  </BarChart>
      </div>
    </div>
  )
}
