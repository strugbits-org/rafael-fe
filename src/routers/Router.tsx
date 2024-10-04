import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import MeetingAgenda from "../pages/MeetingAgenda";
import Reminder from "../pages/Reminder";
import Anouncement from "../pages/Anouncement";

import { AnimatePresence, motion } from "framer-motion";
import DashboardLayout from "../components/layout/DashboardLayout";

const Router = () => {
  const location = useLocation();

  return (
    <DashboardLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Dashboard />
              </motion.div>
            }
          />
          <Route
            path="/agenda"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <MeetingAgenda />
              </motion.div>
            }
          />
          <Route
            path="/reminders"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Reminder />
              </motion.div>
            }
          />
          <Route
            path="/updates"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Anouncement />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </DashboardLayout>
  );
};

export default Router;
