// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import api from "../api/api";
import Home from "./Home";

const Dashboard = () => {
  const [modules, setModules] = useState([]);
  const [courseTitle, setCourseTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [debugInfo, setDebugInfo] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const checkAndFetch = async () => {
      try {
        // 1) optional check to confirm session
        const check = await api.get("/auth/check");
        console.log("/auth/check response:", check.data);

        // 2) fetch course navigation
        const res = await api.get("/course/navigation");
        console.log("/course/navigation response:", res.data);
        setCourseTitle(res.data.courseTitle || "");
        setModules(res.data.modules || []);
        setLoading(false);
      } catch (err) {
        console.error(
          "Dashboard auth/fetch error:",
          err?.response?.status,
          err?.response?.data || err.message
        );
        // show helpful info
        if (err.response?.status === 401) {
          setError(
            "You are not logged in or session expired. Redirecting to login..."
          );
          // wait briefly so user sees message, then redirect
          setTimeout(() => (window.location.href = "/login"), 1500);
        } else {
          setError("Something went wrong. See console for details.");
        }
        setLoading(false);
      }
    };

    checkAndFetch();
  }, []);

  // Debug: call server debug route and show results
  const fetchDebugSession = async () => {
    try {
      const r = await api.get("/debug/session");
      console.log("/debug/session:", r.data);
      setDebugInfo(r.data);
    } catch (e) {
      console.error(
        "Error calling /debug/session:",
        e?.response?.status,
        e?.response?.data || e.message
      );
      setDebugInfo({ error: true, message: e?.response?.data || e?.message });
    }
  };

  if (loading)
    return <div className="p-8 text-center">Loading dashboard...</div>;

  return (
    <div className="p-6">
      <Home />
      <div className="mt-6"></div>
    </div>
  );
};

export default Dashboard;
