import React from 'react'
import { MdCancel } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { GoClockFill } from "react-icons/go";



export default function UsersBox() {
  return (
    <div className='flex flex-col md:flex-row gap-5 w-full mt-6'>
      <div className='dark:bg-slate-800 bg-main w-full rounded-t-3xl rounded-l-3xl shadow-xl h-52 p-4 flex flex-col gap-3'>
        <h2 className='dark:text-second text-sm font-bold'>Recent Users</h2>
        <ul className='flex flex-col gap-3'>
            <li className='flex items-center justify-around border-b border-solid border-second pb-1.5 '>
                <img src="https://xsgames.co/randomusers/avatar.php?g=male" className='rounded-full w-8' alt="" />
                <span className='dark:text-third text-sm md:text-base ' >Tony Rickman</span>
                <span className='dark:text-third text-sm md:text-base ' >2022.10.10</span>
            </li>
            <li className='flex items-center justify-around border-b border-solid border-second pb-1.5 '>
                <img src="https://xsgames.co/randomusers/avatar.php?g=female" className='rounded-full w-8' alt="" />
                <span className='dark:text-third text-sm md:text-base' >Emilio Skidgel</span>
                <span className='dark:text-third text-sm md:text-base' >2022.11.13</span>
            </li>
            <li className='flex items-center justify-around  pb-1.5 '>
                <img src="https://xsgames.co/randomusers/avatar.php?g=pixel" className='rounded-full w-8' alt="" />
                <span className='dark:text-third text-sm md:text-base' >Billie Troska</span>
                <span className='dark:text-third text-sm md:text-base' >2022.09.20</span>
            </li>
        </ul>
      </div>
      <div className='dark:bg-slate-800 bg-main w-full rounded-t-3xl rounded-l-3xl shadow-xl h-52 p-4 flex flex-col gap-3'>
        <h2 className='dark:text-second text-sm font-bold'>Recent Orders</h2>
        <ul className='flex flex-col gap-3'>
            <li className='flex items-center justify-around border-b border-solid border-second pb-1.5 '>
                <img src="https://xsgames.co/randomusers/avatar.php?g=male" className='rounded-full w-8' alt="" />
                <span className='dark:text-third text-sm md:text-base ' >Tony Rickman</span>
                <span className='dark:text-third text-sm md:text-base ' >2022.10.10</span>
               <div className='bg-red-700 w-6 md:w-28 flex items-center justify-center gap-2 h-8 rounded-md text-white opacity-80 cursor-not-allowed'>
               <span className='hidden md:block text-[13px]' >Canceled</span>
               <MdCancel size={15}/>
               </div>
            </li>
            <li className='flex items-center justify-around border-b border-solid border-second pb-1.5 '>
                <img src="https://xsgames.co/randomusers/avatar.php?g=female" className='rounded-full w-8' alt="" />
                <span className='dark:text-third text-sm md:text-base' >Emilio Skidgel</span>
                <span className='dark:text-third text-sm md:text-base' >2022.11.13</span>
                <div className='bg-green-700 w-6 md:w-28 flex items-center justify-center gap-2 h-8 rounded-md text-white opacity-80 cursor-not-allowed'>
                <span className='hidden md:block text-[13px]' >Accepted</span>
                <TiTick size={20} />
                </div>
            </li>
            <li className='flex items-center justify-around  pb-1.5 '>
                <img src="https://xsgames.co/randomusers/avatar.php?g=pixel" className='rounded-full w-8' alt="" />
                <span className='dark:text-third text-sm md:text-base' >Billie Troska</span>
                <span className='dark:text-third text-sm md:text-base' >2022.09.20</span>
                <div className='bg-orange-500 w-6 md:w-28 flex items-center justify-center gap-2 h-8 rounded-md text-white opacity-80 cursor-not-allowed' >
                <span className='hidden md:block text-[13px]' >Pending</span>
                <GoClockFill size={15}/>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}
