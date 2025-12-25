import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";

const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState("loading"); // loading | authenticated | unauthenticated

  useEffect(() => {
    let mounted = true;

    const checkAuth = async () => {
      try {
        await api.get("/auth/check");
        if (mounted) setAuth("authenticated");
      } catch {
        if (mounted) setAuth("unauthenticated");
      }
    };

    checkAuth();
    return () => {
      mounted = false;
    };
  }, []);

  if (auth === "loading") {
    return <div className="p-8 text-center">Checking session...</div>;
  }

  if (auth === "unauthenticated") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
