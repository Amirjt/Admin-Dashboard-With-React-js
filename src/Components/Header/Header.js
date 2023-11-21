import React from "react";
import { CiCloudSun } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoLanguageOutline } from "react-icons/io5";

export default function Header() {

  return (
    <>
      <div className="fixed w-full top-0 z-50 shadow-sm">
        <div className="bg-main dark:bg-slate-800 h-[60px] md:h-[70px] flex items-center justify-between py-5 px-3 md:px-10">
          <CiCloudSun
            size={35}
            className="bg-third text-white rounded-full p-1 cursor-pointer"
          />
          <div className="w-60 flex flex-row-reverse items-center justify-between">
            <div className="flex flex-row-reverse items-center gap-3">
            <img src="logo.png" className="w-10 h-10 rounded-full cursor-pointer shadow-sm" alt="" />
            <a href="" className="text-sm font-bold text-gray-600 dark:text-gray-300">AmirJt</a>
            </div>
            <div className="flex flex-row-reverse items-center gap-3">
              <CiSettings
                size={30}
                className="bg-third text-white rounded-full p-1 cursor-pointer"
              />
             <div className="relative">
             <IoIosNotificationsOutline
                size={30}
                className="bg-third text-white rounded-full p-1 cursor-pointer shadow-sm"
              />
              <div className="absolute -top-1 -right-1 text-white bg-red-500 p-1 text-[11px] rounded-full w-4 h-4 flex justify-center items-center shadow-sm" >3</div>
             </div>
              <IoLanguageOutline
                size={30}
                className="bg-third text-white rounded-full p-1.5 cursor-pointer shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
