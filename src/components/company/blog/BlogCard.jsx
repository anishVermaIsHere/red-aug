import React from "react";
import { Icons } from "../../common/Icons";
import blog from "./Blog.module.css"

const BlogCard = () => {
  return (
    <div className={`relative flex flex-col justify-between gap-50 p-6 w-full border-r border-b border-gray-600 cursor-pointer ${blog.card}`}>
      <div className="flex justify-between items-center">
        <Icons.noteBookPen className="size-8 text-gray-300"/>
        <div className="text-gray-300">12/04/2025</div>
      </div>
      <div className={`text-white ${blog.readMore}`}>Read More</div>
      <div className={blog.cardFooter}>
        <p className="uppercase text-sm text-yellow-400">Technology</p>
        <p className="text-lg text-white font-semibold">Architectural Design</p>
      </div>
    </div>
  );
};

export default BlogCard;
