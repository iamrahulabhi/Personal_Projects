import React from "react";
import { IoFlash } from "react-icons/io5";
//My name is Anjali
const Card = ({ cardData }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
      <div className="flex justify-center items-center text-yellow-500 text-2xl mb-4">
        <IoFlash />
      </div>
      <p className="text-lg font-semibold text-center text-gray-800 mb-4">
        Matiks Weekly Contest
      </p>
      <div className="flex justify-between text-sm text-gray-600 mb-4">
        <span>{cardData.date}</span>
        <span>{cardData.time}</span>
      </div>
      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        {cardData.status}
      </button>
    </div>
  );
};

export default Card;
