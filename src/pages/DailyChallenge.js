import React from "react";
import { useState } from "react";
import { getFormattedDate } from "../helpers/dateFormatter";
import { Dcdata } from "../assets/TableData";

const DailyChallenge = () => {
  let today = getFormattedDate();
  let yesterday = getFormattedDate(-1);
  const allLevels = ["Open", "Div 3", "Div 2", "Div 1"];
  const [activeTab, setActiveTab] = useState("Today");
  const [level, setLevel] = useState(allLevels[0]);
  return (
    <div>
      <div>
        {/* Day section */}
        <div className="flex flex-row">
          {/* Today Button */}
          <button
            onClick={() => setActiveTab("Today")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "Today"
                ? "border-2 border-white"
                : "border-transparent"
            }`}
          >
            <div className="flex flex-col">
              <span>Today</span>
              <span>{today}</span>
            </div>
          </button>

          {/* Yesterday Button */}
          <button
            onClick={() => setActiveTab("Yesterday")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "Yesterday"
                ? "border-2 border-white"
                : "border-transparent"
            }`}
          >
            <div className="flex flex-col">
              <span>Yesterday</span>
              <span>{yesterday}</span>
            </div>
          </button>
        </div>
        {/* level section */}
        <div>
          {allLevels.map((currentlevel, index) => (
            <button
              key={index}
              onClick={() => setLevel(currentlevel)}
              className={`px-4 py-2 rounded-lg ${
                level === currentlevel
                  ? "border-2 border-white"
                  : "border-transparent"
              }`}
            >
              {currentlevel}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyChallenge;
