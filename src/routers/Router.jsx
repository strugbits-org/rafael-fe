import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./../pages/Dashboard";
import MeetingAgenda from "./../pages/MeetingAgenda";
import Reminder from "./../pages/Reminder";
import Anouncement from "./../pages/Anouncement";
import DashboardLayout from "./../components/DashboardLayout";

const Router = () => {
  return (
    <Routes>
      {/* Default Layout routes */}

      <Route path="/" element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/agenda" element={<MeetingAgenda />} />
        <Route path="/reminders" element={<Reminder />} />
        <Route path="/updates" element={<Anouncement />} />
      </Route>
    </Routes>
  );
};

export default Router;
