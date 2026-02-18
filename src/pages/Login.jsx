import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function QuizLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Login Logic
    if (email === "admin@gmail.com" && password === "12345") {
      alert("Login Successful ✅");
      navigate("/dashboard"); // redirect after login
    } else {
      alert("Invalid Email or Password ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      
      <div className="bg-white p-8 rounded-xl shadow-md w-96 border">
        
        {/* QUIZ APP Logo */}
        <div className="flex items-center justify-center mb-6">
          <div className="text-4xl font-bold tracking-wide text-blue-600">
            QUIZ APP
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Login to Start Quiz
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
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

        {/* Guest Login */}
        <div className="text-center">
          <button 
            onClick={() => navigate("/quiz")}
            className="text-sm text-blue-600 font-medium hover:underline"
          >
            Continue as Guest
          </button>
        </div>

      </div>

      {/* Sign Up Box */}
      <div className="absolute bottom-10">
        <p className="text-sm text-gray-700">
          New to Quiz App?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Create an Account
          </Link>
        </p>
      </div>

    </div>
  );
}

export default QuizLogin;
