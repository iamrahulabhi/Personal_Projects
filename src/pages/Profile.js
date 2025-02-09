import React, { useEffect, useState } from "react";
import { PiCat } from "react-icons/pi";
import { IoMdPersonAdd } from "react-icons/io";
import { PreviousGames } from "../assets/TableData";
import LineGraph from "../components/LineGraph";
import axios from "axios";

const Profile = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
//profile committed
  useEffect(() => {
    // Fetch profile data from the Flask API
    axios
      .get("http://localhost:5000/api/profiles")  // Replace with your API URL
      .then((response) => {
        setProfiles(response.data);  // Set the profiles state with the API response
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch((err) => {
        setError("Failed to fetch profiles");
        setLoading(false);
      });
  }, []);

    // Render loading, error, or profiles based on state
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;


  return (
    <div className="flex flex-col lg:flex-row p-6 bg-gray-50 min-h-screen">
      {/* Info and Previous Games Section */}
      <div className="lg:w-3/5 w-full bg-white p-6 rounded-lg shadow-lg">
        {/* Info section */}
        {profiles.length > 0 && (
        <section className="flex items-center space-x-4 mb-8">
          <PiCat className="text-5xl text-gray-600" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{profiles[0].full_name}</h2>
            <p className="text-gray-600">{profiles[0].username}</p>
            <p className="font-semibold text-gray-800">999</p>
            <div className="flex space-x-4 text-sm text-gray-500">
              <span>0 Friends</span>
              <span>0 Followers</span>
              <span>0 Followings</span>
            </div>
          </div>
        </section>
        )}
        {/* Previous Games section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Previous Games
          </h2>
          <div className="space-y-4">
            {PreviousGames.map((currentRecord, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-sm"
              >
                <IoMdPersonAdd className="text-blue-500 text-2xl" />
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-800">
                      {currentRecord.name}
                    </span>
                    <span className="text-gray-600">
                      {currentRecord.points}
                    </span>
                  </div>
                  <div className="text-gray-500">{currentRecord.time}</div>
                </div>
                <div className="text-sm text-gray-500">
                  {currentRecord.status}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Performance graph and Stats Section */}
      <div className="lg:w-2/5 w-full lg:ml-8 mt-8 lg:mt-0 flex flex-col space-y-8">
        <div>
          <LineGraph />
        </div>

        {/* Stats Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Stats</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg">
              <span className="text-gray-600">#2</span>
              <span className="text-gray-600">Games</span>
            </div>
            <div className="border p-4 rounded-lg">
              <span className="text-gray-600">4</span>
              <span className="text-gray-600">Rank</span>
            </div>
            <div className="border p-4 rounded-lg">
              <span className="text-gray-600">1000</span>
              <span className="text-gray-600">Highest Rating</span>
            </div>
            <div className="border p-4 rounded-lg">
              <span className="text-gray-600">1</span>
              <span className="text-gray-600">Longest Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
