import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronRight, BookOpen, Code, Brain, Users, Layers, FileText, Map, Clock, LogOut, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import your actual components
import CourseInfo from "../components/PageSegment/PageFirst";
import RevisionTable from "../components/PageSegment/Revision";
import DSAStepByStepPlan from "../components/PageSegment/CodingPlan";
import InterviewPrep from "../components/PageSegment/Interview";
import FullStackDevelopment from "../components/PageSegment/PageSecond";
import InterviewResources from "../components/PageSegment/PageThird";
import DSAStudyPlan from "../components/PageSegment/DSAPlan";

const Home = () => {
  const [expandedChapters, setExpandedChapters] = useState({});
  const [countdown, setCountdown] = useState(20);
  const timeoutRef = useRef(null);
  const countdownIntervalRef = useRef(null);
  const navigate = useNavigate();

  /* ======================= LOGOUT ======================= */
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  /* ======================= AUTO LOGOUT TIMER ======================= */
  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);

    setCountdown(20);

    countdownIntervalRef.current = setInterval(() => {
      setCountdown((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);

    timeoutRef.current = setTimeout(handleLogout, 20000);
  };

  useEffect(() => {
    const events = ["mousedown", "mousemove", "keypress", "scroll", "touchstart", "click"];
    events.forEach((e) => document.addEventListener(e, resetTimer));
    resetTimer();

    return () => {
      events.forEach((e) => document.removeEventListener(e, resetTimer));
      clearTimeout(timeoutRef.current);
      clearInterval(countdownIntervalRef.current);
    };
  }, []);

  /* ======================= SECURITY PROTECTION ======================= */
  useEffect(() => {
    // Disable right click
    const disableRightClick = (e) => e.preventDefault();

    // Disable copy, cut, paste
    const disableClipboard = (e) => e.preventDefault();

    // Disable inspect shortcuts
    const disableKeys = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "C", "J"].includes(e.key)) ||
        (e.ctrlKey && ["U", "S", "C", "V", "X"].includes(e.key))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("copy", disableClipboard);
    document.addEventListener("cut", disableClipboard);
    document.addEventListener("paste", disableClipboard);
    document.addEventListener("keydown", disableKeys);

    // DevTools detection
    const detectDevTools = () => {
      const threshold = 160;
      if (
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold
      ) {
        alert("⚠️ DevTools detected! Logging out.");
        handleLogout();
      }
    };

    const devToolsInterval = setInterval(detectDevTools, 1000);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("copy", disableClipboard);
      document.removeEventListener("cut", disableClipboard);
      document.removeEventListener("paste", disableClipboard);
      document.removeEventListener("keydown", disableKeys);
      clearInterval(devToolsInterval);
    };
  }, []);

  /* ======================= DATA ======================= */
  const toggleChapter = (id) => {
    setExpandedChapters((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const chapters = [
    { id: "c1", title: "Course Overview", subtitle: "Get started with the fundamentals", icon: BookOpen, component: <CourseInfo />, color: "from-blue-500 to-blue-600" },
    { id: "c2", title: "Resume + LinkedIn", subtitle: "Build your professional profile", icon: FileText, component: <RevisionTable />, color: "from-purple-500 to-purple-600" },
    { id: "c3", title: "Beginner DSA Plan", subtitle: "Master data structures step by step", icon: Code, component: <DSAStepByStepPlan />, color: "from-green-500 to-green-600" },
    { id: "c4", title: "Pro DSA Plan", subtitle: "Advanced algorithms and patterns", icon: Brain, component: <DSAStudyPlan />, color: "from-orange-500 to-orange-600" },
    { id: "c5", title: "Interview Prep", subtitle: "Ace your technical interviews", icon: Users, component: <InterviewPrep />, color: "from-red-500 to-red-600" },
    { id: "c6", title: "Full Stack + System Design", subtitle: "Build scalable applications", icon: Layers, component: <FullStackDevelopment />, color: "from-indigo-500 to-indigo-600" },
    { id: "c7", title: "Resources", subtitle: "Tools and materials for success", icon: Map, component: <InterviewResources />, color: "from-pink-500 to-pink-600" },
  ];

  /* ======================= UI ======================= */
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Learning Platform
              </h1>
              <p className="text-sm text-gray-600 mt-1">Your journey to success starts here</p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Session Timer */}
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                countdown < 10 ? 'bg-red-50 text-red-700 animate-pulse' : 'bg-gray-50 text-gray-700'
              }`}>
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">{countdown}s</span>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all hover:shadow-lg"
              >
                <LogOut className="w-4 h-4" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Warning Banner */}
      {countdown <= 10 && (
        <div className="bg-red-500 text-white py-3 px-4 animate-pulse">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
            <Shield className="w-5 h-5" />
            <span className="font-medium">
              Logging out in {countdown}s due to inactivity
            </span>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Course Navigation</h2>
          <p className="text-gray-600">Explore chapters and track your progress</p>
        </div>

        {/* Chapters Grid */}
        <div className="space-y-4">
          {chapters.map((chapter, index) => {
            const Icon = chapter.icon;
            const isExpanded = expandedChapters[chapter.id];
            
            return (
              <div
                key={chapter.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Chapter Header */}
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${chapter.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {chapter.title}
                      </h3>
                      <p className="text-sm text-gray-500">{chapter.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                      Chapter {index + 1}
                    </span>
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-gray-400 transition-transform" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400 transition-transform" />
                    )}
                  </div>
                </button>

                {/* Chapter Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 bg-gray-50 border-t border-gray-100">
                    <div className="mt-4">
                      {chapter.component}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>🔒 Protected session • Auto-logout enabled • {chapters.length} chapters available</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
