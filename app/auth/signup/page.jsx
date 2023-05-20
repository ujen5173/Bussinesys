import { Header } from "@/app/components";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto py-28 px-4 flex items-center justify-center min-h-screen">
        <div className="border border-gray-200 shadow-lg rounded-md p-8">
          <h1 className="text-2xl font-bold mb-2">Sign up</h1>
          <p className="text-base mb-4 text-gray-700">
            Lets join with us and get the best experience
          </p>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="johndoe@example.com"
              />
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
              </div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
              />
            </div>
            <p className="text-sm w-7/12 mx-auto text-center text-gray-600 mb-4">
              By signing up, you agree to our Terms , Data Policy and Cookies
            </p>
            <button className="btn-primary w-full">Sign up </button>
          </form>
          <div className="my-4 text-center or">OR</div>
          <button className="btn-oauth">Continue with Google</button>
        </div>
      </div>
    </>
  );
};

export default page;
