import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  ChevronRight,
  BookOpen,
  Code,
  Brain,
  Users,
  Layers,
  FileText,
  Map,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Components
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

  /* =======================
     LOGOUT
  ======================= */
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  /* =======================
     AUTO LOGOUT TIMER
  ======================= */
  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (countdownIntervalRef.current)
      clearInterval(countdownIntervalRef.current);

    setCountdown(20);

    countdownIntervalRef.current = setInterval(() => {
      setCountdown((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);

    timeoutRef.current = setTimeout(handleLogout, 20000);
  };

  useEffect(() => {
    const events = [
      "mousedown",
      "mousemove",
      "keypress",
      "scroll",
      "touchstart",
      "click",
    ];

    events.forEach((e) => document.addEventListener(e, resetTimer));
    resetTimer();

    return () => {
      events.forEach((e) => document.removeEventListener(e, resetTimer));
      clearTimeout(timeoutRef.current);
      clearInterval(countdownIntervalRef.current);
    };
  }, []);

  /* =======================
     SECURITY PROTECTION
  ======================= */
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

  /* =======================
     DATA
  ======================= */
  const toggleChapter = (id) => {
    setExpandedChapters((p) => ({ ...p, [id]: !p[id] }));
  };

  const chapters = [
    {
      id: "c1",
      title: "Chapter 1: Course Overview",
      icon: <BookOpen className="w-5 h-5" />,
      component: <CourseInfo />,
    },
    {
      id: "c2",
      title: "Chapter 2: Resume + LinkedIn",
      icon: <FileText className="w-5 h-5" />,
      component: <RevisionTable />,
    },
    {
      id: "c3",
      title: "Chapter 3: Beginner DSA Plan",
      icon: <Code className="w-5 h-5" />,
      component: <DSAStepByStepPlan />,
    },
    {
      id: "c4",
      title: "Chapter 4: Pro DSA Plan",
      icon: <Map className="w-5 h-5" />,
      component: <DSAStudyPlan />,
    },
    {
      id: "c5",
      title: "Chapter 5: Interview Prep",
      icon: <Brain className="w-5 h-5" />,
      component: <InterviewPrep />,
    },
    {
      id: "c6",
      title: "Chapter 6: Full Stack + System Design",
      icon: <Layers className="w-5 h-5" />,
      component: <FullStackDevelopment />,
    },
    {
      id: "c7",
      title: "Chapter 7: Resources",
      icon: <Users className="w-5 h-5" />,
      component: <InterviewResources />,
    },
  ];

  /* =======================
     UI
  ======================= */
  return (
    <div className="select-none max-w-8xl mx-auto p-6 min-h-screen bg-slate-50">
      {countdown <= 10 && (
        <div className="fixed top-4 right-4 bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse">
          Logging out in {countdown}s due to inactivity
        </div>
      )}

      <h1 className="text-3xl font-bold text-center mb-10">
        Main Course Navigation
      </h1>

      <div className="space-y-6">
        {chapters.map((c) => (
          <div key={c.id} className="bg-white rounded-lg shadow">
            <div
              onClick={() => toggleChapter(c.id)}
              className="cursor-pointer flex justify-between items-center p-5 bg-blue-600 text-white"
            >
              <div className="flex items-center gap-3">
                {c.icon}
                <h2 className="text-lg font-semibold">{c.title}</h2>
              </div>
              {expandedChapters[c.id] ? <ChevronDown /> : <ChevronRight />}
            </div>

            {expandedChapters[c.id] && (
              <div className="p-5 bg-gray-50">{c.component}</div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg"
        >
          Logout
        </button>
        <p className="text-sm text-gray-500 mt-3">
          Auto logout in {countdown}s
        </p>
      </div>
    </div>
  );
};

export default Home;
