import React from "react";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { LiaProductHunt } from "react-icons/lia";
import { IoBarChartOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { CiShoppingTag } from "react-icons/ci";
import { FaAngleDoubleLeft } from "react-icons/fa";

import "./Sidebar.css"

export default function Sidebar({isShow , setIsShow}) {
  return (
    <div
      className={`bg-main dark:bg-slate-800 h-screen ${
        isShow ? "w-[330px]" : "w-20"
      } duration-300 fixed rounded-r-sm flex flex-col p-5 gap-5`}
    >
      {isShow && (
        <h2
          className={`text-lg dark:text-gray-300 mb-5 font-bold mt-1 border-b border-solid border-gray-700 p-2`}
        >
          Welcome To Your Dashboard
        </h2>
      )}
      <ul className="relative">
        <FaAngleDoubleLeft
          onClick={() => setIsShow(!isShow)}
          className={`hidden md:block absolute right-0 -mr-8 -bottom-5 text-gray-800 bg-second rounded cursor-pointer p-1 ${
            !isShow && "rotate-180"
          } duration-300 `}
          size={25}
        />
        <NavLink
          to="/"
          className="group navbar-links flex items-center gap-3 font-bold text-lg dark:text-second md:hover:bg-second hover:text-white p-2 rounded-md duration-300 mb-5"
        >
          <RxDashboard size={25} className="group-hover:rotate-180 duration-300" />
          {isShow && <span>Dashboard</span>}
        </NavLink>
        <NavLink to="/products" className="group navbar-links flex items-center gap-3 font-bold text-lg dark:text-second md:hover:bg-second hover:text-white p-2 rounded-md duration-300 mb-5">
          <LiaProductHunt className="group-hover:rotate-[360deg] duration-300" size={25} />
          {isShow && <span>Add Product</span>}
        </NavLink>
        <NavLink to="/analytics" className="group navbar-links flex items-center gap-3 font-bold text-lg dark:text-second md:hover:bg-second hover:text-white p-2 rounded-md duration-300 mb-5">
          <IoBarChartOutline className="group-hover:rotate-[360deg] duration-300" size={25} />
          {isShow && <span>Analytics</span>}
        </NavLink>
        <NavLink to="/sales" className="group navbar-links flex items-center gap-3 font-bold text-lg dark:text-second md:hover:bg-second hover:text-white p-2 rounded-md duration-300 mb-5">
          <CiShoppingTag className="group-hover:rotate-[360deg] duration-300"  size={25} />
          {isShow && <span>Sales</span>}
        </NavLink>
        <NavLink to="tickets" className="group navbar-links flex items-center gap-3 font-bold text-lg dark:text-second md:hover:bg-second hover:text-white p-2 rounded-md duration-300 mb-5">
          <FaRegMessage className="group-hover:rotate-[360deg] duration-300" size={25} />
          {isShow && <span>Tickets</span>}
        </NavLink>
        <NavLink to="/users" className="group navbar-links flex items-center gap-3 font-bold text-lg dark:text-second md:hover:bg-second hover:text-white p-2 rounded-md duration-300 mb-5">
          <FiUsers className="group-hover:rotate-[360deg] duration-300" size={25} />
          {isShow && <span>Users</span>}
        </NavLink>
      </ul>
    </div>
  );
}
