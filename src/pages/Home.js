import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  BookOpen,
  Code,
  Brain,
  Users,
  Layers,
  FileText,
  Database,
  Map,
} from "lucide-react";

// Import your existing components
import CourseInfo from "../components/PageSegment/PageFirst";
import RevisionTable from "../components/PageSegment/Revision";
import DSAStepByStepPlan from "../components/PageSegment/CodingPlan";
import InterviewPrep from "../components/PageSegment/Interview";
import FullStackDevelopment from "../components/PageSegment/PageSecond";
import InterviewResources from "../components/PageSegment/PageThird";
import DataStructuresTable from "../components/PageSegment/PageFourth";
import DSAStudyPlan from "../components/PageSegment/DSAPlan";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [expandedChapters, setExpandedChapters] = useState({});
  const [countdown, setCountdown] = useState(20);
  const timeoutRef = React.useRef(null);
  const countdownIntervalRef = React.useRef(null);
  const navigate = useNavigate();
  const handleLogout = () => {
    // Add your logout logic here
    // console.log("User logged out");
    // alert("You have been logged out due to inactivity");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const resetTimer = () => {
    // Clear existing timeout and countdown
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
    }

    // Reset countdown to 20 seconds
    setCountdown(20);

    // Start countdown interval
    countdownIntervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownIntervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Set new timeout for auto-logout
    timeoutRef.current = setTimeout(() => {
      handleLogout();
    }, 20000);
  };

  React.useEffect(() => {
    // Events that indicate user activity
    const events = [
      "mousedown",
      "mousemove",
      "keypress",
      "scroll",
      "touchstart",
      "click",
    ];

    // Add event listeners
    events.forEach((event) => {
      document.addEventListener(event, resetTimer);
    });

    // Initialize timer
    resetTimer();

    // Cleanup
    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, resetTimer);
      });
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
    };
  }, []);

  const toggleChapter = (chapterId) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  const chapters = [
    {
      id: "course-overview",
      title: "Chapter 1: 851 Hour Course Link + Grand Prizes",
      icon: <BookOpen className="w-5 h-5" />,
      description:
        "Get started with your learning journey and understand the course structure",
      component: <CourseInfo />,
    },
    {
      id: "revision-fundamentals",
      title: "Chapter 2: Linkedin + Resume +Job Referral Support",
      icon: <FileText className="w-5 h-5" />,
      description: "Essential revision techniques and study materials",
      component: <RevisionTable />,
    },
    {
      id: "coding-practice",
      title: "Chapter 3: Beginner DSA Plan",
      icon: <Code className="w-5 h-5" />,
      description: "Structured approach to coding problems and solutions",
      component: <DSAStepByStepPlan />,
    },
    {
      id: "dsa-study-plan",
      title: "Chapter 4: Pro DSA Plan",
      icon: <Map className="w-5 h-5" />,
      description: "Comprehensive study plan for mastering DSA concepts",
      component: <DSAStudyPlan />,
    },

    {
      id: "interview-preparation",
      title: "Chapter 5: Technical Interview Preparation",
      icon: <Brain className="w-5 h-5" />,
      description: "Master the art of technical interviews",
      component: <InterviewPrep />,
    },
    {
      id: "fullstack-development",
      title: "Chapter 6: Full Stack Development With System Design",
      icon: <Layers className="w-5 h-5" />,
      description: "Complete guide to full stack development technologies",
      component: <FullStackDevelopment />,
    },
    {
      id: "interview-resources",
      title: "Chapter 7: Interview Resources & Materials",
      icon: <Users className="w-5 h-5" />,
      description: "Additional resources and materials for interview success",
      component: <InterviewResources />,
    },
  ];

  return (
    <div className="max-w-8xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      {/* Auto-logout Warning Banner */}
      {countdown <= 10 && (
        <div className="fixed top-4 right-4 bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse">
          <p className="font-semibold">
            ⚠️ Inactive! Logging out in {countdown} seconds...
          </p>
        </div>
      )}

      {/* Book Header */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center mb-4">
          <BookOpen className="w-12 h-12 text-blue-600 mr-3" />
          <h1 className="text-4xl font-bold uppercase text-gray-800">
            Main course navigation website
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A comprehensive guide covering everything from fundamentals to
          advanced topics in programming, DSA and interview preparation. <br />
          <span className="text-red-600 font-bold">
            {" "}
            (The Course; Training and Mentoring of this program are the most
            efficient in the whole country ; if you work daily exactly as per
            personalized schedule given by Kumar K in 1-1 Mentoring with faith
            in God no force in this world can stop you)
          </span>
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <FileText className="w-6 h-6 mr-2 text-blue-600" />
          Table of Contents
        </h2>
        <div className="grid gap-2">
          {chapters.map((chapter, index) => (
            <div
              key={chapter.id}
              className="flex items-center py-2 px-3 rounded hover:bg-gray-50 cursor-pointer"
            >
              {chapter.icon}
              <span className="ml-3 text-gray-700 hover:text-blue-600 transition-colors">
                {chapter.title}
              </span>
              <div className="ml-auto text-sm text-gray-500">
                Page {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chapters */}
      <div className="space-y-6">
        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Chapter Header */}
            <div
              className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white cursor-pointer hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
              onClick={() => toggleChapter(chapter.id)}
            >
              <div className="flex items-center">
                {chapter.icon}
                <div className="ml-3">
                  <h2 className="text-xl font-semibold">{chapter.title}</h2>
                  <p className="text-blue-100 text-sm mt-1">
                    {chapter.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                {expandedChapters[chapter.id] ? (
                  <ChevronDown className="w-6 h-6 transform transition-transform duration-200" />
                ) : (
                  <ChevronRight className="w-6 h-6 transform transition-transform duration-200" />
                )}
              </div>
            </div>

            {/* Chapter Content */}
            {expandedChapters[chapter.id] && (
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  {chapter.component}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-12 py-8 border-t border-gray-200">
        <p className="text-gray-600">
          📚 Happy Learning! Remember to practice consistently and stay curious.
        </p>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-6 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center mx-auto"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Logout
        </button>
        <p className="text-sm text-gray-500 mt-3">
          Auto-logout in {countdown} seconds of inactivity
        </p>
      </div>
    </div>
  );
};

export default Home;
