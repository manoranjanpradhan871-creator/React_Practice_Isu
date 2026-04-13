import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3>CBOI</h3>

      <NavLink to="/" className="menu">Dashboard</NavLink>
      <NavLink to="/reports" className="menu">Transaction Reports</NavLink>
    </div>
  );
}