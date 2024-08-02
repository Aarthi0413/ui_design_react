import React from "react";
import { BiCube } from "react-icons/bi";
import { CiDollar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FiTag } from "react-icons/fi";
import { HiArrowSmallUp } from "react-icons/hi2";
import ClusterChart from "../ClusterChart";
import { IoBedOutline } from "react-icons/io5";
import { BiArea } from "react-icons/bi";
import { PiBathtubLight } from "react-icons/pi";
import { GiHomeGarage } from "react-icons/gi";
import { FiArrowUpRight } from "react-icons/fi";

import TableForm from "../TableForm";

const Dashboard = () => (
  <div>
    <div className="flex justify-around gap-4 p-4">
      <div className="border border-gray-300 w-1/4 flex flex-col rounded-lg p-4 bg-white shadow-md">
        <div className="flex items-center mb-4">
          <BiCube className="text-4xl bg-gray-200 rounded-full p-2 text-blue-400 mr-2" />
          <h1 className="font-bold text-lg">Total Properties</h1>
        </div>
        <h1 className="font-bold text-xl mb-2">
          755{" "}
          <span className="text-base text-gray-400 font-semibold">
            Percentages
          </span>
        </h1>
        <hr className="w-full mb-2" />
        <p className="text-sm font-semibold text-black">
          Last Update: <span className="text-blue-400">January 26, 2023</span>
        </p>
      </div>
      <div className="border border-gray-300 w-1/4 flex flex-col rounded-lg p-4 bg-white shadow-md">
        <div className="flex items-center mb-4">
          <FiTag className="text-4xl bg-gray-200 rounded-full p-2 text-blue-400 mr-2" />
          <h1 className="font-bold text-lg">Total Sales</h1>
        </div>
        <h1 className="font-bold text-xl mb-2">
          10{" "}
          <span className="text-base text-gray-400 font-semibold">
            Percentages
          </span>
        </h1>
        <hr className="w-full mb-2" />
        <p className="text-sm font-semibold text-green-500 flex">
          <HiArrowSmallUp className="text-lg" /> -2%{" "}
          <span className="text-gray-500 ml-1"> Compare to last month</span>
        </p>
      </div>
      <div className="border border-gray-300 w-1/4 flex flex-col rounded-lg p-4 bg-white shadow-md">
        <div className="flex items-center mb-4">
          <CiUser className="text-4xl bg-gray-200 rounded-full p-2 text-blue-500 mr-2" />
          <h1 className="font-bold text-lg">Clients</h1>
        </div>
        <h1 className="font-bold text-xl mb-2">72</h1>
        <hr className="w-full mb-2" />
        <p className="text-sm font-semibold text-black">
          Last Update: <span className="text-blue-400">January 26, 2023</span>
        </p>
      </div>
      <div className="border border-gray-300 w-1/4 flex flex-col rounded-lg p-4 bg-white shadow-md">
        <div className="flex items-center mb-4">
          <CiDollar className="text-4xl bg-gray-200 rounded-full p-2 text-blue-500 mr-2" />
          <h1 className="font-bold text-lg">Total Earnings</h1>
        </div>
        <h1 className="font-bold text-xl mb-2">$ 744 M</h1>
        <hr className="w-full mb-2" />
        <p className="text-sm font-semibold text-green-500 flex">
          <HiArrowSmallUp className="text-lg" />
          -20%<span className="text-gray-500 ml-1">Compare to last month</span>
        </p>
      </div>
    </div>

    <div className="flex justify-between p-4">
      {/* Chart Container */}
      <div className="border-2 border-gray-300 rounded-lg p-4 w-2/3 mr-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-xl">Property Overview</h2>
          <select className="border rounded p-2 text-sm">
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
        <div>
          <ClusterChart />
        </div>
      </div>

      {/* Home Image Container */}
      <div className="border-2 border-gray-300 rounded-lg p-4 w-1/3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-xl">Most Visited</h2>
          <p className="text-sm text-blue-400">View All</p>
        </div>
        <div className="flex flex-col w-30 mt-5">
          <img
            src="https://res.cloudinary.com/dhczdaczx/image/upload/v1722573904/home_murlag.jpg"
            alt="Home"
            className="mb-4 w-50 h-40 object-cover rounded-lg"
          />
          <div className="flex justify-between mt-2">
            <h1 className="font-bold text-md">
              Greate White Double Height House
            </h1>
            <p className="font-bold text-md">$ 712,000</p>
          </div>
          <p className="text-sm text-gray-400 font-semibold">
            3891 Ranchview Dr.Richardson, California 62639
          </p>
          <div className="flex mt-5 justify-between">
            <div className="flex">
              <IoBedOutline className="text-2xl font-semibold text-gray-500 mr-1" />
              <p className="text-sm font-semibold text-gray-400">3 Bedroom</p>
            </div>
            <div className="flex">
              <BiArea className="text-2xl font-semibold text-gray-500 mr-1" />
              <p className="text-sm font-semibold text-gray-400">4520 SQFT</p>
            </div>
            <div className="flex">
              <PiBathtubLight className="text-2xl font-semibold text-gray-500 mr-1" />
              <p className="text-sm font-semibold text-gray-400">2 Bathroom</p>
            </div>
            <div className="flex">
              <GiHomeGarage className="text-2xl font-semibold text-gray-500 mr-1" />
              <p className="text-sm font-semibold text-gray-400">Garage</p>
            </div>
          </div>
          <div className="flex mt-5 mb-0 justify-center">
            <h1 className="text-sm font-semibold text-blue-400 ">
              Show Details
            </h1>
            <FiArrowUpRight className="text-2xl font-semibold text-blue-400 ml-2" />
          </div>
        </div>
      </div>
    </div>

    {/* Table */}
    <div className="border-2 border-gray-300 rounded-lg p-4 m-4 mt-2 shadow-md">
      <div className="flex flex-col mb-3">
        <div className="flex justify-between">
        <div className="flex flex-col">
          <h2 className="font-bold text-xl">Transaction History</h2>
          <p className="text-sm mb-4 text-gray-500 font-semibold">
            Check your transaction history carefully
          </p>
        </div>
        <div className="flex mb-4">
          <button className="text-sm px-4 py-2 border border-gray-300 rounded-tl-lg rounded-bl-md text-gray-500 hover:bg-gray-100 font-semibold">
            This Week
          </button>
          <button className="text-sm px-4 py-2 border border-gray-300 text-gray-500 hover:bg-gray-100 font-semibold">
            This Month
          </button>
          <button className="text-sm px-4 py-2 border border-gray-300 rounded-tr-lg rounded-br-md text-gray-500 hover:bg-gray-100 font-semibold">
            This Year
          </button>
        </div>
        </div>
        <TableForm/>
      </div>
      
    </div>
  </div>
);

export default Dashboard;
