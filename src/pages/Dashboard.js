import React from "react";
import { IoIosPeople } from "react-icons/io";
import { FaArrowRight, FaRegStar, FaRegSquare } from "react-icons/fa";
import { IoFlashOutline } from "react-icons/io5";
import MathleteTable from "../components/MathleteTable";
import PlayGame from "../components/PlayGame";
import { TableData } from "../assets/TableData";

const Dashboard = () => {
  const weekData = ["S", "M", "T", "W", "T", "F", "S"];
  const date = new Date();
  const weekday = date.toLocaleString("default", { weekday: "long" });
  const month = date.toLocaleString("default", { month: "short" });
  const dayOfMonth = date.getDate();

  // Format date as "Sunday, Dec 29"
  const formattedDate = `${weekday}, ${month} ${dayOfMonth}`;

  return (
    <div className="p-6 lg:flex lg:gap-8 bg-gray-50 min-h-screen">
      {/* Left Part */}
      <div className="lg:w-1/2">
        {/* Daily Challenge Section */}
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Daily Challenge
        </h2>
        <section className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center gap-4">
              <IoIosPeople className="text-2xl text-indigo-500" />
              <div>
                <p className="font-semibold text-gray-800">Open #146</p>
                <p className="text-sm text-gray-500">{formattedDate}</p>
              </div>
            </div>
            <FaArrowRight className="text-xl text-indigo-500" />
          </div>

          <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center gap-4">
              <FaRegStar className="text-2xl text-yellow-500" />
              <div>
                <p className="font-semibold text-gray-800">DIV 3</p>
                <p className="text-sm text-gray-500">{formattedDate}</p>
              </div>
            </div>
            <FaArrowRight className="text-xl text-yellow-500" />
          </div>
        </section>

        {/* Play Game Section */}
        <div className="mt-6">
          <PlayGame />
        </div>
      </div>

      {/* Right Part */}
      <div className="lg:w-1/2">
        {/* Streak Box */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center gap-4">
            <IoFlashOutline className="text-3xl text-red-500" />
            <div>
              <p className="text-4xl font-bold text-gray-800">0</p>
              <p className="text-sm text-gray-500">Day Streak</p>
              <p className="text-sm text-gray-500">0 Day Best Streak</p>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2 mt-4">
            {weekData.map((currentDay, index) => (
              <div key={index} className="flex flex-col items-center">
                <FaRegSquare className="text-2xl text-gray-300" />
                <span className="text-sm text-gray-600">{currentDay}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Rankers Box */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <MathleteTable data={TableData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
