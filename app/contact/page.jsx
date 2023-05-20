import React from "react";
import { Header } from "../components";

const page = () => {
  return (
    <>
      <Header />
      <section className="w-full">
        <div className="max-w-[1000px] mx-auto px-4 py-32 flex flex-col justify-center min-h-screen">
          <h1 className="text-5xl font-semibold text-gray-800">
            Love to hear from you, <br /> Let&apos;s get in touch
          </h1>
          <p className="text-xl mb-10 text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>

          <div className="flex gap-4 flex-wrap">
            <div className=" md:w-[calc(100%/2-1rem)] w-full">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div className=" md:w-[calc(100%/2-1rem)] w-full">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div className=" w-full">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div className=" w-full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full border min-h-[10rem] border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <button className="btn-primary">Submit</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
