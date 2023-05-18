import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import { useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import { Navbar } from "../indexComp";
import logo from "../../assets/Images/logo.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const ussR = useSelector((state) => state.user.currentUser);
  const times = useSelector((state) => state.user.timestamp);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(dispatch, { username, password });
    await navigate("/login-success");
  };

  useEffect(() => {
    const executeAfterOneMinute = () => {
      dispatch(logout());
      console.log("One minute has passed.");
    };

    const currentTime = Date.now();
    const timeDiff = currentTime - times;
    const delay = Math.max(0, 1 * 60 * 1000 - timeDiff);

    const timeoutId = setTimeout(() => {
      executeAfterOneMinute();
    }, delay);

    return () => {
      clearTimeout(timeoutId); // Clear the timeout when the component unmounts
    };
  }, [times]);

  return (
    <>
      <Navbar />
      <div className="py-6">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div className="hidden lg:flex rounded-md flex-col justify-center bg-gray-600 items-center lg:w-1/2 bg-cover">
            <img
              className="w-[70%] rounded-md h-[80%]"
              src={logo}
              alt="logo-image"
            />
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
              Brand
            </h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>

            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase"
              >
                login with email
              </a>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="name"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <a href="#" className="text-xs text-gray-500">
                  Forget Password?
                </a>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-8">
              <button
                onClick={handleSubmit}
                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              >
                Login
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <Link to="/register" className="text-xs text-gray-500 uppercase">
                or sign up
              </Link>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
