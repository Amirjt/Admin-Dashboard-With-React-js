import React from "react";
import UsersBox from "../../Components/UsersBox/UsersBox";

export default function AllUsers() {
  return (
    <div className="dark:bg-slate-800 p-5 rounded-3xl shadow-xl flex flex-col gap-6 w-[280px] md:w-full">
      <div className="flex flex-col  md:flex-row  items-center justify-between gap-5 md:gap-0 dark:text-main border-b border-solid pb-6 md:pb-3 border-gray-300">
        <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
          <img
            src="https://xsgames.co/randomusers/avatar.php?g=male"
            className="w-12 rounded-full"
            alt=""
          />
          <div className="flex flex-col gap-1 text-sm">
            <span className="">John Michael</span>
            <span className="text-gray-500">john@creative-tim.com</span>
          </div>
        </div>
        <div>
          <span className="font-bold text-second">Manager</span>
        </div>
        <div>
          <span className="mr-10 bg-green-300 text-green-600 px-3 py-1 rounded-md text-sm ml-9 md:ml-0">
            Online
          </span>
        </div>
      </div>
      <div className="flex flex-col  md:flex-row  items-center justify-between gap-5 md:gap-0 dark:text-main border-b border-solid pb-6 md:pb-3 border-gray-300">
        <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
          <img
            src="https://xsgames.co/randomusers/avatar.php?g=female"
            className="w-12 rounded-full"
            alt=""
          />
          <div className="flex flex-col gap-1 text-sm">
            <span className="">Jocklin</span>
            <span className="text-gray-500">Jocklin232@creative-tim.com</span>
          </div>
        </div>
        <div>
          <span className="font-bold text-second">SEO Manager</span>
        </div>
        <div>
          <span className="mr-10 bg-gray-300 text-gray-600 px-3 py-1 rounded-md text-sm ml-9 md:ml-0">
            Offline
          </span>
        </div>
      </div>
      <div className="flex flex-col  md:flex-row  items-center justify-between gap-5 md:gap-0 dark:text-main">
        <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
          <img
            src="https://xsgames.co/randomusers/avatar.php?g=pixel"
            className="w-12 rounded-full"
            alt=""
          />
          <div className="flex flex-col gap-1 text-sm">
            <span className="">Ramtin</span>
            <span className="text-gray-500">Ramtinds2@creative-tim.com</span>
          </div>
        </div>
        <div>
          <span className="font-bold text-second">Backend Developer</span>
        </div>
        <div>
          <span className="mr-10 bg-orange-300 text-orange-600 px-3 py-1 rounded-md text-sm ml-9 md:ml-0">
            Away
          </span>
        </div>
      </div>
    </div>
  );
}
