import React from "react";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import { GrDocumentStore } from "react-icons/gr";


export default function AddNewProduct() {
  return (
    <div className="dark:bg-slate-800 rounded-3xl shadow-xl p-5 flex justify-center flex-col">
      <h2 className="mb-5 font-bold dark:text-second">Add New Product</h2>
      <div className="flex flex-col gap-2">
        <div className="flex items-center rounded-3xl border border-solid border-third  p-3">
          <input
            placeholder="Product Name"
            className="w-full outline-none  placeholder:text-sm bg-transparent dark:text-white"
            type="text"
          />
          <MdOutlineProductionQuantityLimits
            className="mr-2 text-third"
            size={20}
          />
        </div>
        <div className="flex items-center rounded-3xl border border-solid border-third  p-3">
          <input
            placeholder="Product Price"
            className="w-full outline-none  placeholder:text-sm bg-transparent dark:text-white"
            type="text"
          />
          <MdOutlinePriceChange className="mr-2 text-third"
            size={20}/>
        </div>
        <div className="flex items-center rounded-3xl border border-solid border-third  p-3">
          <input
            placeholder="Product Category"
            className="w-full outline-none  placeholder:text-sm bg-transparent dark:text-white"
            type="text"
          />
          <GrDocumentStore className="mr-2 text-third" size={20}/>
        </div>
        <div className="mt-3">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-second"
            for="file_input"
          >
            Product Image
          </label>
          <input
            type="file"
            id="file_input"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-sm cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          />
        </div>
      </div>
      <button className="mt-5 dark:text-second border border-third p-3 rounded-3xl w-1/2 self-center hover:bg-second hover:text-white duration-300 hover:border-none hover:scale-105">
        Add
      </button>
    </div>
  );
}
