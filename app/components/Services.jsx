import Image from "next/image";
import React from "react";
import { services } from "../constants";

const Services = () => {
  return (
    <>
      <section className="relative flex items-center justify-center px-4 py-16 md:py-24">
        <div className="container w-full flex lg:flex-row mx-auto flex-col gap-12">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl leading-tight font-semibold mb-10 text-gray-800">
              What we can do for your{" "}
              <span className="text-blue-600">business to grow</span> and
              Develop better
            </h1>
            <p className="text-lg lg:text-xl font-medium mb-5 text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium explicabo velit harum fugiat nam quas eius ut
              consequatur eveniet aliquam!
            </p>
            <button className="text-base lg:text-lg font-semibold text-blue-600">
              Learn more --&gt;
            </button>
          </div>

          <div className="flex-1 flex items-center gap-4 flex-wrap">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white w-full sm:w-[calc(100%/2-1rem)] shadow-xl border border-gray-100 rounded-xl p-6 flex flex-col justify-center"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <i className={`${service.icon} text-2xl`} />
                </div>
                <h1 className="text-2xl font-medium text-gray-800 mt-4">
                  {service.title}
                </h1>
                <p className="text-base font-medium text-gray-500 mt-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 py-16 md:py-24">
        <div className="container w-full flex lg:flex-row mx-auto flex-col gap-12">
          <div className="w-full md:w-9/12 lg:w-1/2 mx-auto mb-8">
            <Image
              src={"/graph.png"}
              width={800}
              height={800}
              className="w-full object-cover"
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl mb-5 leading-tight font-bold text-gray-800">
              We are here to help you to{" "}
              <span className="text-blue-600">grow your business</span> and
              increase your ROI
            </h1>
            <p className="text-lg font-medium text-gray-500 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
            <button className="text-lg font-semibold text-blue-600">
              Learn more --&gt;
            </button>{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
