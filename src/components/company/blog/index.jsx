import React from "react";
import Searchbox from "../../common/Searchbox";
import BlogCard from "./BlogCard";

const cards = [...new Array(12)].fill();

const BlogSection = () => {
  return (
    <section className="px-4 py-30 w-full">
      <h1 className="text-6xl text-center text-white">
        Discover Blogs with <br /> the Best Lorem
      </h1>
      <Searchbox />

      <div className="relative md:px-6">
        <h4 className="text-3xl text-white py-6 border-gray-600">Blog & Case Studies</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center border border-gray-600">
          {cards.map((_, ind)=><BlogCard key={ind}/>)}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
