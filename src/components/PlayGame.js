import React, { useState } from "react";
import { IoIosPeople } from "react-icons/io";
import { FaPlane } from "react-icons/fa";
import { IoAlarmOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const PlayGame = () => {
  const tabData = [
    {
      title: "ONLINE DUELS",
      desc: "Play against similar rated player",
      icon: <FaPlane className="text-2xl text-blue-500" />,
      buttonText: "Search Mathlete",
    },
    {
      title: "FRIEND",
      desc: "Play against your friend",
      icon: <IoIosPeople className="text-2xl text-green-500" />,
      buttonText: "Create Link",
    },
    {
      title: "PRACTICE",
      desc: "Play against time",
      icon: <IoAlarmOutline className="text-2xl text-red-500" />,
      buttonText: "Practice Now",
    },
  ];

  const timedata = [1, 2, 3, 5];
  const [selectedTab, setSelectedTab] = useState(tabData[0]);
  const [selectedTime, setSelectedTime] = useState(1);
  const navigate = useNavigate();

  const handleNavigation = () => {
  if (selectedTab.title === "ONLINE DUELS") {
    navigate("/duels-page", { state: { time: selectedTime } });
  } else if (selectedTab.title === "FRIEND") {
    navigate("/friends-page", { state: { time: selectedTime } });
  } else if (selectedTab.title === "PRACTICE") {
    navigate("/practice-page", { state: { time: selectedTime } });
  }
};




  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-700 mb-4">Play Games</h3>

      {/* Tab Section */}
      <div className="flex gap-4 mb-6">
        {tabData.map((current, index) => (
          <div
            key={index}
            onClick={() => setSelectedTab(tabData[index])}
            className={`cursor-pointer p-4 rounded-lg flex items-center gap-4 transition 
            ${
              selectedTab.title === current.title
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            <div>{current.icon}</div>
            <div>
              <p className="font-semibold">{current.title}</p>
              <p className="text-sm">{current.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Time Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          {selectedTab.title}
        </h2>
        <p className="text-sm text-gray-500 mb-4">{selectedTab.desc}</p>
        <div className="flex gap-4 mb-6">
          {timedata.map((currentTime, index) => (
            <div
              key={index}
              onClick={() => setSelectedTime(currentTime)}
              className={`cursor-pointer px-4 py-2 rounded-lg font-semibold text-sm transition
              ${
                selectedTime === currentTime
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {currentTime} Min
            </div>
          ))}
        </div>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600" 
        onClick={handleNavigation}>
          {selectedTab.buttonText}
        </button>
      </div>
    </div>
  );
};

export default PlayGame;
