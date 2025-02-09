import React from "react";
import { IoLogoOctocat } from "react-icons/io5";
import { mathletes } from "../assets/TableData";

const LeaderBoard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-row items-center justify-between bg-white shadow-md p-4 rounded-lg mb-6 sticky top-0 z-10">
        {/* Profile Icon and Name */}
        <div className="flex items-center space-x-4">
          <IoLogoOctocat className="text-3xl text-indigo-600" />
          <span className="text-xl font-semibold text-gray-800">
            Keval Krishan
          </span>
        </div>

        {/* Stats Section */}
        <div className="flex space-x-6">
          <div className="text-center">
            <span className="block text-gray-500 text-sm">Rating</span>
            <span className="text-lg font-medium text-gray-800">1000</span>
          </div>
          <div className="text-center">
            <span className="block text-gray-500 text-sm">World Rank</span>
            <span className="text-lg font-medium text-gray-800">500</span>
          </div>
          <div className="text-center">
            <span className="block text-gray-500 text-sm">Games Played</span>
            <span className="text-lg font-medium text-gray-800">50</span>
          </div>
        </div>
      </div>

      {/* Leaderboard Table Section */}
      <div className="bg-white shadow-md rounded-lg p-4 max-h-[500px]">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Leaderboard</h2>

        <div className="overflow-x-auto">
          {/* Table Header */}
          <table className="min-w-full table-auto ">
            <thead className="bg-gray-200 sticky top-0 z-10">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Mathlete</th>
                <th className="px-4 py-2 text-left">Rating</th>
              </tr>
            </thead>
          </table>

          {/* Table Body (Scrolls) */}
          <div className="overflow-y-auto max-h-[400px]">
            <table className="min-w-full table-auto ">
              <tbody>
                {mathletes.map((mathlete) => (
                  <tr key={mathlete.id} className="border-t border-gray-300">
                    <td className="px-4 py-2">{mathlete.id}</td>
                    <td className="px-4 py-2">{mathlete.Mathlete}</td>
                    <td className="px-4 py-2">{mathlete.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
