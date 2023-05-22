import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../indexComp";
import { logout } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
function LoginSuccess() {
  const userSucces = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="w-screen flex flex-row justify-center">
        <div className="flex flex-col items-center w-[50%] justify-center gap-2 mt-1 border-solid border-[1px] border-black bg-gray-200">
          <span>
            {" "}
            <span className="font-semibold">Username:</span>{" "}
            {userSucces?.username?.toUpperCase()}
          </span>
          <span>
            {" "}
            <span className="font-semibold">Email:</span> {userSucces?.email}
          </span>
          <button
            onClick={() => handleLogout()}
            className="bg-blue-400 px-2 py-1 rounded-sm mb-1"
          >
            Log out
          </button>
          <button className="bg-blue-400 px-2 py-1 rounded-sm mb-1">
            <Link to="/cart">Go to cart</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginSuccess;
