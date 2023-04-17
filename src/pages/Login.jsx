import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import background from "../background.jpg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setError(false);
    if (email.includes("@") && password.length > 4) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/home");
      } catch (err) {
        setError("Invalid, Email or Password!!");
        setPassword("");
      }
    } else if (email.length === 0 || password.length === 0) {
      setError("Fields must not be empty!!");
    }
  };
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen relative">
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
          }}
        ></div>
        <form
          onSubmit={formSubmitHandler}
          className="absolute md:w-[50%] md:top-48 lg:w-[30%] lg:top-28 w-[80%] top-50 bg-white/70 border-2 border-black flex flex-col items-center justify-center rounded-lg"
        >
          <div className="py-5">
            <h1 className="text-center text-2xl font-bold">E-commerce Login</h1>
          </div>
          <div className="w-[80%] flex flex-col justify-center space-y-1">
            <p className="text-lg font-medium">Email</p>
            <input
              type="email"
              className="px-3 py-2 border-2 bg-blue-200 border-blue-600 rounded"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-[80%] flex flex-col justify-center space-y-2 py-3">
            <p className="text-lg font-medium">Password</p>
            <input
              type="password"
              className="px-3 py-2 border-2 bg-blue-200 border-blue-600  rounded font-medium"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          {error && <p className="text-red-600 font-medium">{error}</p>}
          <div className="w-[80%] flex flex-col justify-center space-y-2 py-4">
            <button className="bg-[rgb(144,0,255)] py-2 rounded-md text-white text-lg font-medium hover:bg-[rgb(167,67,243)]">
              Login
            </button>
            <div className="flex justify-between items-center p-2">
              <Link to="/signup" className="text-violet-700 underline">
                Create Account
              </Link>
              <a href="/" className="text-violet-700 underline">
                Forgot Password?
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
