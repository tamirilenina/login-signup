import React, { useState } from "react";
import { Link } from "react-router-dom";

function AjioLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-xl shadow-md w-96 border">
        
        {/* AJIO Logo */}
        <div className="flex items-center justify-center mb-6">
          <div className="text-4xl font-bold tracking-widest text-black">
            AJIO
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email / Mobile */}
          <input
            type="text"
            placeholder="Enter Email or Mobile Number"
            className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            LOGIN
          </button>

        </form>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* OTP Login */}
        <div className="text-center">
          <button className="text-sm text-black font-medium hover:underline">
            Login with OTP
          </button>
        </div>

      </div>

      {/* Sign Up Box */}
      <div className="absolute bottom-10">
        <p className="text-sm text-gray-700">
          New to AJIO?{" "}
          <Link
            to="/signup"
            className="text-black font-semibold hover:underline"
          >
            Create an Account
          </Link>
        </p>
      </div>

    </div>
  );
}

export default AjioLogin;
