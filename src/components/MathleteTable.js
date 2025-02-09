import React from "react";

const MathleteTable = ({ data }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-700 mb-4">Top Mathletes</h3>
      <table className="w-full table-auto border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left text-sm font-semibold text-gray-700 border border-gray-200">
              Rank
            </th>
            <th className="p-3 text-left text-sm font-semibold text-gray-700 border border-gray-200">
              Name
            </th>
            <th className="p-3 text-left text-sm font-semibold text-gray-700 border border-gray-200">
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((player, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-blue-100`}
            >
              <td className="p-3 text-sm text-gray-800 border border-gray-200">
                {player.id}
              </td>
              <td className="p-3 text-sm text-gray-800 border border-gray-200">
                {player.Mathlete}
              </td>
              <td className="p-3 text-sm text-gray-800 border border-gray-200">
                {player.rating}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MathleteTable;
