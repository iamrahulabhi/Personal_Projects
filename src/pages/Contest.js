import React, { useState } from "react";
import { FaPerson } from "react-icons/fa6";
import { UpcomingContest } from "../assets/TableData";
import { CompletedContest } from "../assets/TableData";
import Card from "../components/Card";

const Contest = () => {
  const buttonData = ["Upcoming", "Completed"];
  const [selectedOption, setSelectedOption] = useState(buttonData[0]);
  const cardsData =
    selectedOption === "Upcoming" ? UpcomingContest : CompletedContest;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Top-level container with 70% width and left alignment */}
      <section className="w-[70%] ml-0">
        {/* Header and Buttons Section */}
        <div className="sticky top-0 bg-gray-100 z-10">
          <div className="flex items-center bg-white p-4 shadow-md rounded-lg mb-6">
            <FaPerson className="text-blue-500 text-3xl mr-4" />
            <div className="flex flex-col flex-grow">
              <p className="text-lg font-semibold text-gray-800">
                MATIKS WEEKLY CONTEST :{" "}
                <span className="text-blue-500">#16</span>{" "}
                <sup className="text-gray-500">2 days</sup>
              </p>
              <p className="text-gray-600">
                Prepare for the ultimate showdown of speed, skills, and smarts
              </p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Know More
            </button>
          </div>

          {/* Buttons section */}
          <div className="flex justify-start space-x-4 mb-4">
            {buttonData.map((current, index) => (
              <button
                key={index}
                onClick={() => setSelectedOption(current)}
                className={`px-4 py-2 rounded-md ${
                  selectedOption === current
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {current}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto max-h-[calc(100vh-150px)]">
          {cardsData.map((cardData, index) => (
            <Card key={index} cardData={cardData} />
          ))}
        </section>
      </section>
    </div>
  );
};

export default Contest;
