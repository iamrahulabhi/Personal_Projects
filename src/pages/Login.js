import React from "react";
import Slider from "../components/Slider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/dashboard");
  }

  return (
    <div className="w-full  bg-gray-800">
      <div className="flex flex-row w-11/12 mx-auto py-12 mt-20 ">
        {/* Left part */}
        <div className="w-1/2 px-8">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-3xl font-bold text-blue-600">MATIKS</span>
            <div className="h-1 w-12 bg-blue-600"></div>
          </div>
          <h1 className="text-5xl font-extrabold leading-tight mb-4">
            MAKING MATH A <span className="text-blue-600">SPORT</span>
          </h1>
          <p className="text-lg mb-6 text-gray-700">
            Matiks is a community for mathletes, turning math into an
            accessible, exciting sport for everyone.
          </p>
          {/* Buttons */}
          <div className="space-x-4">
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
              Login / Signup
            </button>
            <button
              onClick={clickHandler}
              className="px-6 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Play as Guest
            </button>
          </div>
        </div>

        {/* Sliders */}
        <div className="w-1/2">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Login;
