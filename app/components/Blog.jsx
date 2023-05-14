import Image from "next/image";
import React from "react";
import { blogs } from "../constants";

const Blog = () => {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-gray-900 mb-5">
            Read our latest blog
          </h1>
          <p className="text-gray-600 text-lg mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quae.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white w-full md:w-[calc(100%/2-8px)] xl:w-[calc(100%/3-12px)] 2xl:w-[calc(100%/4-16px)] shadow-md border border-gray-100 rounded-xl overflow-hidden"
            >
              <Image
                src={blog.image}
                width={800}
                height={500}
                className="w-full h-52 object-cover"
                alt=""
              />
              <div className="p-6">
                <h1 className="text-xl text-gray-800 mb-3">{blog.title}</h1>
                <p className="blog-description overflow-hidden text-sm text-gray-500 mb-5">
                  {blog.description}
                </p>
                <button className="text-base font-semibold text-blue-600">
                  Learn more --&gt;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
