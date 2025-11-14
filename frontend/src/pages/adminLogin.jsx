import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LogIn } from "lucide-react";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Admin Login | ACM Manipal";
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); 
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "https://acm-website-server.onrender.com/admin-login",
        {
          username,
          password,
        }
      );

      localStorage.setItem("token", response.data.token); 
      setIsLoggedIn(true);
      navigate("/"); 
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  if (isLoggedIn) {
    return (
      <div className="text-3xl font-extrabold flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h2>You are already logged in! Just log out if you want 😒.</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md z-10">
        <div className="flex">
          <hr className="border-t-2 border-gray-500 my-4 w-full" />
          <div className="text-2xl font-extrabold mb-4 px-5 font-righteous">
            Login
          </div>
          <hr className="border-t-2 border-gray-500 my-4 w-full" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-gray-700 font-righteous self-start text-xl font-extrabold mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="border-2 border-blue-300 hover:bg-slate-200 focus:bg-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:border-3 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-gray-700 font-righteous font-extrabold self-start text-xl mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-2 hover:bg-slate-200 focus:bg-slate-300 border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:border-3 focus:border-blue-500"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              className="relative flex items-center justify-center gap-2 px-6 py-3  self-center text-center text-xl font-semibold text-white 
                            bg-gradient-to-r from-[#0076CE] to-[#00AEEF] rounded-xl shadow-md transition-all 
                            duration-200 hover:shadow-lg hover:scale-105 active:scale-95 
                            before:absolute before:inset-0 mb-4"
              type="submit"
            >
              <LogIn size={25} strokeWidth={2} />
              <span className="font-righteous">Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
