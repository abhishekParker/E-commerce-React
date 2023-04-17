import { ShoppingCart } from "@mui/icons-material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Badge } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import navLogo from "../nav-logo.png";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { login, logout } from "../store/authSlice";
import { auth } from "../firebase";
const Navbar = () => {
  const cartAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.userAuth.user);
  const username = useSelector((state) => state.userAuth.username);
  const [dropMenu, setDropMenu] = useState(false);
  // const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(cartItems);

  const logoutHandler = async () => {
    await signOut(auth);
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    const user = onAuthStateChanged(auth, (currUser) => {
      const mail = currUser.email;
      dispatch(login(mail));
    });
    return () => {
      user();
    };
  }, [dispatch]);

  return (
    <div className="w-full bg-gray-800 text-white h-20 flex items-center justify-between">
      <div className="">
        <Link to="/">
          <img
            className="cursor-pointer ml-6 w-[130px] h-[50px]"
            src={navLogo}
            alt="logo"
          ></img>
        </Link>
      </div>
      <div className="text-black flex px-2 space-x-3">
        <input
          type="text"
          placeholder="Search..."
          className="w-[18rem] outline-none px-1 rounded"
        />
        <button className="border-2 outline-none border-blue-500 px-3 rounded text-white hover:bg-blue-500 duration-200">
          Search
        </button>
      </div>

      <div className="w-[40%] pl-4 flex items-center justify-between">
        <div className="text-white flex justify center items-center space-x-6">
          <Link to="/home">
            <h3 className="cursor-pointer hover:border-b-2 hover:border-white">
              Home
            </h3>
          </Link>
          <Link to="/products">
            <h3 className="cursor-pointer hover:border-b-2 hover:border-white">
              Products
            </h3>
          </Link>
          <Link to="/Contacts">
            <h3 className="cursor-pointer hover:border-b-2 hover:border-white">
              Contact
            </h3>
          </Link>
        </div>
        {username ? (
          <div className="w-[50%] flex justify-between relative">
            <div
              onClick={() => setDropMenu(!dropMenu)}
              onBlur={() => setDropMenu(false)}
              className={`${
                dropMenu ? "bg-white text-black" : ""
              } min-w-[70%] flex border-[1px] rounded-lg pl-2 justify-between cursor-pointer hover:bg-white hover:text-black duration-200`}
            >
              <h3 className="text-center">welcome, {username && username}</h3>
              <div>
                <KeyboardArrowDownRoundedIcon />
              </div>
            </div>
            <div
              className={`${
                dropMenu ? "block" : "hidden"
              } absolute min-w-[70%] h-[137px] bg-gray-600 z-10 top-9 rounded-md`}
            >
              <div className="px-4 py-2 rounded-t-md hover:bg-gray-200 hover:text-black duration-200 cursor-pointer">
                <p className="font-medium">Pro User</p>
                <p className="">{user}</p>
              </div>
              <hr className="bg-black border-0 border-t-[1px] border-t-gray-500" />
              <div className="px-4 py-1 hover:bg-gray-200 hover:text-black duration-200 cursor-pointer">
                <p className="text-center">Settings</p>
              </div>
              <hr className="bg-black border-0 border-t-[1px] border-t-gray-500 " />
              <div
                onClick={logoutHandler}
                className="px-4 py-2 rounded-b cursor-pointer-md hover:bg-gray-200 hover:text-black duration-200 cursor-pointer"
              >
                <p className="text-center">Logout</p>
              </div>
            </div>
            {/* <h3 className="cursor-pointer">welcome, {username && username}</h3>
            <h3
              className="cursor-pointer hover:border-b-2"
              onClick={logoutHandler}
            >
              Logout
            </h3> */}
          </div>
        ) : (
          <div className="flex w-[25%] justify-between">
            <Link to="/" className="cursor-pointer  hover:border-b-2">
              Signup
            </Link>
            <Link to="/signup" className="cursor-pointer hover:border-b-2">
              Login
            </Link>
          </div>
        )}
      </div>

      <div className="pr-6 cursor-pointer">
        <Link to="/cart">
          <Badge badgeContent={cartAmount} color="secondary">
            <ShoppingCart />
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
