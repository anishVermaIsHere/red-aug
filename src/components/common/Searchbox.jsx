import React from "react";
import { Icons } from "./Icons";

const Searchbox = () => {
  return (
    <div className="relative border border-gray-50 rounded-full mx-auto w-full lg:w-1/2 mt-9 mb-10">
      <input
        type="search"
        className="text-white font-thin h-12 text-lg px-6 rounded-full w-full"
        placeholder="Search..."
      />
      <button className="p-1.5 bg-gray-100 rounded-full absolute right-[8px] top-[5px]">
        <Icons.arrowRight className="size-6" />
      </button>
    </div>
  );
};

export default Searchbox;
