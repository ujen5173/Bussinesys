import { Header } from "@/app/components";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto py-28 px-4 flex items-center justify-center min-h-screen">
        <div className="border border-gray-200 rounded-md shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-2">Sign in</h1>
          <p className="text-base mb-4 text-gray-700">
            Stay updated on your professional world
          </p>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="johndoe"
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
                <p className="text-sm text-gray-700 underline cursor-pointer">
                  Forgot Password?
                </p>
              </div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
              />
            </div>
            <button className="btn-primary w-full">Login</button>
          </form>
          <div className="my-4 text-center or">OR</div>
          <button className="btn-oauth">Continue with Google</button>
        </div>
      </div>
    </>
  );
};

export default page;
