import React, { useEffect, useState } from "react";
import api from "../api/api";
import Home from "./Home";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await api.get("/course");
        setCourseTitle(res.data.courseTitle || "");
        setModules(res.data.modules || []);
      } catch (err) {
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false); // 🔥 always runs
      }
    };

    fetchCourse();
  }, []);

  if (loading) {
    return <div className="p-8 text-center">Loading dashboard...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">{courseTitle}</h1>
      <Home />
    </div>
  );
};

export default Dashboard;
