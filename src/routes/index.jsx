import { Routes, Route, Navigate } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { useState } from "react";

export const RoutesMain = () => {
  const [user, setUser] = useState({});
  return (
    <Routes>
      <Route path="/" element={<Login setUserState={setUser} user={user} />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard/:id"
        element={<Dashboard setUserState={setUser} user={user} />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
