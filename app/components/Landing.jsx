import React from "react";

const Landing = () => {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-gray-50 flex items-center justify-center">
      <>
        <h1 className="absolute top-[10%] text-9xl font-black text-gray-900 opacity-5 select-none -right-[21rem]">
          BUSINESS
        </h1>
        <h1 className="absolute bottom-[10%] text-9xl font-black text-gray-900 opacity-5 select-none -left-[19rem]">
          BUSINESS
        </h1>
        <div className="absolute top-[15%] hidden lg:flex text-4xl rounded-full w-16 h-16 items-center justify-center shadow-xl border border-gray-200 bg-white select-none left-[12%]">
          😎
        </div>
        <div className="absolute top-[22%] hidden lg:flex text-4xl rounded-full w-16 h-16 items-center justify-center shadow-xl border border-gray-200 bg-white select-none right-[10%]">
          🤩
        </div>
        <div className="absolute bottom-[24%] hidden lg:flex text-4xl rounded-full w-16 h-16 items-center justify-center shadow-xl border border-gray-200 bg-white select-none left-[28%]">
          🤑
        </div>
        <div className="absolute bottom-[29%] hidden lg:flex text-4xl rounded-full w-16 h-16 items-center justify-center shadow-xl border border-gray-200 bg-white select-none right-[28%]">
          😎
        </div>
        <div className="absolute top-[45%] hidden lg:flex text-4xl rounded-full w-16 h-16 items-center justify-center shadow-xl border border-gray-200 bg-white select-none left-[15%]">
          😊
        </div>
      </>
      <div className="flex items-center justify-center container mx-auto py-20">
        <div className="text-center flex flex-col justify-center items-center">
          <h1 className="relative z-20 text-5xl lg:text-6xl w-11/12 lg:w-9/12 xl:w-7/12 mb-10 font-bold text-gray-800">
            Grow your <span className="text-blue-600">Business</span> by our
            agent from now
          </h1>
          <p className="relative z-20 text-xl font-medium w-10/12 lg:w-6/12 mb-5 text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
            mollitia eum magni commodi porro nisi excepturi ducimus nemo
            consequuntur iure. Impedit cumque at dolorem veritatis.
          </p>

          <div className="relative z-20 flex items-center gap-4">
            <button className="btn-primary">Get Started</button>
            <button className="btn-link">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
