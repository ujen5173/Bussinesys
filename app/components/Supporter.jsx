import React from "react";
import { companies } from "../constants";

const Supporter = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-[1200px] px-4 py-16 mx-auto">
        <h1 className="text-4xl text-center font-semibold mb-10 text-gray-800">
          Over{" "}
          <span className="font-bold text-blue-600">200+ teams worldwide</span>{" "}
          trust us
        </h1>
        <div className="flex gap-4 flex-wrap justify-center">
          {companies.map((company) => (
            <img
              key={company}
              src={`/${company}.png`}
              className="w-auto h-16 grayscale opacity-50"
              alt="Error"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supporter;
