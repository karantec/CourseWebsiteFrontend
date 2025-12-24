// src/pages/NotFound.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated 404 */}
        <div className="mb-8 relative">
          <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400"></div>
        </div>

        {/* Fun Message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">
            Oops! Lost in Cyberspace?
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Don't worry, you're not a bad user, not fake, and definitely not banned! 
            You just found a page that doesn't exist. It happens to the best of us! 🚀
          </p>
        </div>

        {/* Floating Icons */}
        <div className="flex justify-center gap-4 mb-8 text-4xl">
          <span className="animate-bounce delay-100">🤔</span>
          <span className="animate-bounce delay-200">🔍</span>
          <span className="animate-bounce delay-300">❓</span>
        </div>

        {/* Countdown Timer */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg">
            <span className="text-gray-700 font-medium">Redirecting in</span>
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse">
              {countdown}
            </span>
            <span className="text-gray-700 font-medium">seconds</span>
          </div>
        </div>

        {/* Action Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          <span>Take Me Home Now</span>
          <span className="text-xl">🏠</span>
        </Link>

        {/* Fun Footer */}
        <p className="mt-8 text-sm text-gray-500 italic">
          "Not all who wander are lost... but this page definitely is."
        </p>
      </div>
    </div>
  );
};

export default NotFound;