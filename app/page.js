'use client'
import React, { useState } from "react";
import Cards from "./components/Cards";
import Images from "./components/Images";
import { FaGreaterThan } from "react-icons/fa";
import { BiSolidUser, BiMessageAltDetail } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";

export default function Home() {
  const [showBeforeDev, setShowBeforeDev] = useState(false);

  const handleOpenBeforeDev = () => {
    setShowBeforeDev(!showBeforeDev);
  };

  return (
    <div className="flex flex-col md:flex-row relative">
      {showBeforeDev && (
        <div>
          <div className="w-45 bg-[#0e1c31] text-white absolute top-1 md:static md:w-auto">
            <div className="inline py-1 px-1">
              <div className="px-3">
                <BiSolidUser className="rounded-xl text-2xl inline" />
                <h2 className="text-semibold text-2xl inline">Hello, User </h2>
                <GrNotification className="text-2xl inline" />
              </div>
            </div>
            <hr />
            <div className="">
              <ul>
                <li className="text-bold hover:bg-[#0a101c] text-xl mt-2 py-2 px-2">
                  <BiMessageAltDetail className="inline" /> Discussion Forum
                </li>
                <li className="text-bold hover:bg-[#0a101c] text-xl mt-2 py-2 px-2">
                  <PiCurrencyDollarSimpleFill className="inline" /> Market Stories
                </li>
                <li className="text-bold ml-6 hover:bg-[#0a101c] text-xl mt-2 py-2 px-2"> Sentiment</li>
                <li className="text-bold ml-6 hover:bg-[#0a101c] text-xl mt-2 py-2 px-2"> Market</li>
                <li className="text-bold ml-6 hover:bg-[#0a101c] text-xl mt-2 py-2 px-2"> Sector</li>
                <li className="text-bold ml-6 hover:bg-[#0a101c] text-xl mt-2 py-2 px-2"> Watchlist</li>
                <li className="text-bold ml-6 hover:bg-[#0a101c] text-xl mt-2 py-2 px-2"> Events</li>
                <li className="text-bold ml-6 hover:bg-[#0a101c] text-xl mt-2 py-2 px-2"> News/Interview</li>
              </ul>
            </div>
          </div>
          <div className="my-[20rem] mr-1 absolute top-1  md:static md:w-auto">
            <button className="bg-blue-800 py-8" onClick={handleOpenBeforeDev}>
              <FaGreaterThan className="text-white" />
            </button>
          </div>
        </div>
      )}
      <div className="flex">
        <div className="my-[20rem] mr-1">
          <button className="bg-blue-800 py-8 fixed  md:static" onClick={handleOpenBeforeDev}>
            <FaGreaterThan className="text-white" />
          </button>
        </div>
        <div>
          <h1 className="text-red-600 font-bold text-3xl bg-slate-200 px-2 py-1 inline">
            DISCUSSION FORUM
          </h1>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
      <div className="ml-10 mt-2">
        <h1 className="font-bold text-2xl text-red-700 bg-slate-200 inline px-2 py-1">
          MARKET STORIES
        </h1>
        <Images />
        <Images />
        <Images />
        <Images />
      </div>
    </div>
  );
}
