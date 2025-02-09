import React from "react";
import { NavLink } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { MdLeaderboard } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { SiDailydotdev } from "react-icons/si";
import { FcFeedback } from "react-icons/fc";

const SideBar = () => {
  return (
    <div className="w-20 h-screen bg-gray-800 text-white p-2 flex flex-col border-t border-r border-white fixed top-16">
      <ul className="flex flex-col space-y-4">
        <li className="flex flex-col items-center mx-2 px-2 py-1">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `p-2 rounded-md flex flex-col items-center w-full ${
                isActive ? "text-green-500" : ""
              }`
            }
          >
            <FcHome className="text-xl mb-1" />
            <span className="text-sm text-center">Home</span>
          </NavLink>
        </li>
        <li className="flex flex-col items-center mx-2 px-2 py-1">
          <NavLink
            to="/leaderboard"
            className={({ isActive }) =>
              `p-2 rounded-md flex flex-col items-center w-full ${
                isActive ? "text-green-500" : ""
              }`
            }
          >
            <MdLeaderboard className="text-xl mb-1" />
            <span className="text-sm text-center">Leaderboard</span>
          </NavLink>
        </li>
        <li className="flex flex-col items-center mx-2 px-2 py-1">
          <NavLink
            to="/contest"
            className={({ isActive }) =>
              `p-2 rounded-md flex flex-col items-center w-full ${
                isActive ? "text-green-500" : ""
              }`
            }
          >
            <FaTrophy className="text-xl mb-1" />
            <span className="text-sm text-center">Contest</span>
          </NavLink>
        </li>
        <li className="flex flex-col items-center mx-2 px-2 py-1">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `p-2 rounded-md flex flex-col items-center w-full ${
                isActive ? "text-green-500" : ""
              }`
            }
          >
            <CgProfile className="text-xl mb-1" />
            <span className="text-sm text-center">My Profile</span>
          </NavLink>
        </li>
        <li className="flex flex-col items-center mx-2 px-2 py-1">
          <NavLink
            to="/daily-challenge"
            className={({ isActive }) =>
              `p-2 rounded-md flex flex-col items-center w-full ${
                isActive ? "text-green-500" : ""
              }`
            }
          >
            <SiDailydotdev className="text-xl mb-1" />
            <span className="text-sm text-center">Daily Challenge</span>
          </NavLink>
        </li>
        <li className="flex flex-col items-center mx-2 px-2 py-1">
          <NavLink
            to="/feedback"
            className={({ isActive }) =>
              `p-2 rounded-md flex flex-col items-center w-full ${
                isActive ? "text-green-500" : ""
              }`
            }
          >
            <FcFeedback className="text-xl mb-1" />
            <span className="text-sm text-center">Feedback</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
