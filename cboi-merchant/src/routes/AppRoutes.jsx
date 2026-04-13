import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Callback from "../pages/Callback";
import Dashboard from "../pages/Dashboard";
import TransactionReports from "../pages/TransactionReports";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/callback" element={<Callback />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <TransactionReports />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}