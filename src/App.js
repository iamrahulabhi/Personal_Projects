import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Privacy from "./pages/Privacy";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contest from "./pages/Contest";
import Profile from "./pages/Profile";
import DailyChallenge from "./pages/DailyChallenge";
import Feedback from "./pages/Feedback";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import LeaderBoard from "./pages/LeaderBoard";
import OnlineDuelsPage from "./pages/OnlineDuelsPage";
import FriendsPage from "./pages/FriendsPage";
import PracticePage from "./pages/PracticePage";



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Login />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <div className="flex h-screen mt-16">
          <SideBar />
          <div className="flex-1 bg-gray-100 p-4 ml-20">
            <Dashboard />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "/leaderboard",
    element: (
      <div>
        <Navbar />
        <div className="flex h-screen mt-16">
          <SideBar />
          <div className="flex-1 bg-gray-100 p-4 ml-20">
            <LeaderBoard />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "/contest",
    element: (
      <div>
        <Navbar />
        <div className="flex h-screen mt-16">
          <SideBar />
          <div className="flex-1 bg-gray-100 p-4 ml-20">
            <Contest />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "/profile",
    element: (
      <div>
        <Navbar />
        <div className="flex h-screen mt-16">
          <SideBar />
          <div className="flex-1 bg-gray-100 p-4 ml-20">
            <Profile />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "/daily-challenge",
    element: (
      <div>
        <Navbar />
        <div className="flex h-screen mt-16">
          <SideBar />
          <div className="flex-1 bg-gray-100 p-4 ml-20">
            <DailyChallenge />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "/feedback",
    element: (
      <div>
        <Navbar />
        <div className="flex h-screen mt-16">
          <SideBar />
          <div className="flex-1 bg-gray-100 p-4 ml-20">
            <Feedback />
          </div>
        </div>
      </div>
    ),
  },
   {
    path: "/practice-page",
    element: (
      <div>
        <Navbar />
        <div className="flex h-screen mt-16">
          <SideBar />
          <div className="flex-1 bg-gray-100 p-4 ml-20">
            <PracticePage />
          </div>
        </div>
      </div>
    ),
  },
   {
    path: "/friends-page",
    element: (
      <div>
        <Navbar />
        <div className="flex h-screen mt-16">
          <SideBar />
          <div className="flex-1 bg-gray-100 p-4 ml-20">
            <FriendsPage />
          </div>
        </div>
      </div>
    ),
  },
   {
    path: "/duels-page",
    element: (
      <div>
        <Navbar />
        <div className="flex h-screen mt-16">
          <SideBar />
          <div className="flex-1 bg-gray-100 p-4 ml-20">
            <OnlineDuelsPage/>
          </div>
        </div>
      </div>
    ),
  },

  {
    path: "/terms",
    element: <Privacy />,
  },
]);

function App() {
  return (
    <div className="h-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;