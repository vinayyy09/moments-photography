import React from "react";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-black text-white py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2 underline underline-offset-8">
            Solutions
          </h6>
          <ul className="pt-4">
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 underline underline-offset-8">
            Support
          </h6>
          <ul className="pt-4">
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 underline underline-offset-8">
            Company
          </h6>
          <ul className="pt-4">
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4 hover:border">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">
          2022 Moments Photography. All rights reserved LLC.
        </p>
        <div className="flex justify-around sm:w-[300px] pt-4 pb-4 text-2xl">
          <FaFacebook className="text-blue-500" />
          <FaInstagram className="text-red-400" />
          <FaTwitter className="text-blue-300" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
