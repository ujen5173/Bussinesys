"use client";
import Link from "next/link";
import React, { useState } from "react";
import { items } from "../constants";

const Header = () => {
  return (
    <header className="absolute top-0 z-50 left-0 w-full bg-gray-50">
      <nav className="flex items-center justify-between container mx-auto p-4">
        <Logo />
        <NavItems items={items} />
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4 justify-center">
            <Link href="/auth/signup">
              <button className="w-full btn-secondary">Sign up</button>
            </Link>
            <Link href="/auth/login">
              <button className="w-full btn-primary">Login</button>
            </Link>
          </div>
          <MobileNavItems items={items} />
        </div>
      </nav>
    </header>
  );
};

export default Header;

export const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-xl font-semibold text-gray-900">Bussinesys</h1>
    </Link>
  );
};

export const NavItems = ({ items }) => {
  return (
    <ul className="hidden lg:flex items-center justify-center gap-4">
      {items.map((item) => (
        <li
          key={item.id}
          className="px-4 py-2 text-gray-500 hover:text-gray-800 transition duration-150 font-semibold"
        >
          <Link href={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};
export const MobileNavItems = ({ items }) => {
  return (
    <div>
      <input type="checkbox" id="checkbox" hidden />
      <label htmlFor="checkbox" className="cursor-pointer block lg:hidden">
        <span class="material-symbols-outlined">menu</span>
      </label>
      <div
        id="menu"
        className={`flex flex-col transition duration-200 justify-between lg:hidden bg-white mobile-menu h-screen border-l border-gray-300 z-30 w-full max-w-[250px] min-w-[150px]`}
      >
        <div>
          <div className="flex p-4 border-b border-gray-200 mb-2 items-center justify-between">
            <h1 className="text-base font-semibold text-gray-600 select-none">
              Menu
            </h1>
            <label
              htmlFor="checkbox"
              className="flex items-center justify-center bg-gray-200 border border-gray-300 cursor-pointer rounded-md w-10 h-10"
            >
              <span class="material-symbols-outlined">close</span>{" "}
            </label>
          </div>

          <ul>
            {items.map((item) => (
              <li
                key={item.id}
                className="p-4 cursor-pointer text-gray-500 hover:text-gray-800 hover:bg-gray-200 transition duration-150 font-semibold"
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center p-4 flex-col gap-4">
          <Link href="/auth/signup">
            <button className="w-full btn-secondary">Sign up</button>
          </Link>
          <Link href="/auth/login">
            <button className="w-full btn-primary">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
