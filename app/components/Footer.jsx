import React from "react";

const Footer = () => {
  return (
    <footer className="border-t-2 bg-gray-50 border-gray-200">
      <div className="px-4 py-16 container mx-auto flex gap-6 flex-wrap">
        <div className="flex-1 min-w-[250px]">
          <h1 className="text-xl mb-5 font-semibold text-gray-700">
            Ready to get started?
          </h1>
          <button className="btn-secondary">Download --&gt;</button>
        </div>
        <div className="flex-1 min-w-[250px]">
          <h1 className="text-lg font-semibold mb-5">Services</h1>
          <ul>
            <li className="text-gray-500 my-2 text-lg font-medium">
              Mail Marketing
            </li>
            <li className="text-gray-500 my-2 text-lg font-medium">
              Campaigns
            </li>
            <li className="text-gray-500 my-2 text-lg font-medium">Branding</li>
            <li className="text-gray-500 my-2 text-lg font-medium">Offline</li>
          </ul>
        </div>
        <div className="flex-1 min-w-[250px]">
          <h1 className="text-lg font-semibold mb-5">About</h1>
          <ul>
            <li className="text-gray-500 my-2 text-lg font-medium">
              Our Story
            </li>
            <li className="text-gray-500 my-2 text-lg font-medium">Benefits</li>
            <li className="text-gray-500 my-2 text-lg font-medium">Team</li>
            <li className="text-gray-500 my-2 text-lg font-medium">Careers</li>
          </ul>
        </div>
        <div className="flex-1 min-w-[250px]">
          <h1 className="text-lg font-semibold mb-5">Help</h1>
          <ul>
            <li className="text-gray-500 my-2 text-lg font-medium">FAQs</li>
            <li className="text-gray-500 my-2 text-lg font-medium">
              Contact us
            </li>
          </ul>
        </div>
      </div>

      <div className="p-4 container mx-auto flex flex-col md:flex-row items-center justify-between">
        <ul className="flex gap-4 mb-4 md:mb-0">
          <li className="text-lg text-gray-500 hover:underline cursor-pointer">
            Terms & Conditions
          </li>
          <li className="text-lg text-gray-500 hover:underline cursor-pointer">
            Privacy Policy
          </li>
        </ul>
        <ul className="flex gap-4">
          <i className="uil text-blue-600 text-2xl uil-instagram"></i>
          <i className="uil text-blue-600 text-2xl uil-github"></i>
          <i className="uil text-blue-600 text-2xl uil-dribbble"></i>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
