import { Link } from "react-router-dom";
import "./SidebarDashboard.css";

export default function SidebarDashboard() {
  return (
    <div className="vh-100 border-end p-3">
      <h4 className="mb-4">Dashboard</h4>
    <div className="links d-flex flex-wrap ">
<Link
        to="/dashboard"
        className="text-decoration-none text-secondary-emphasis fw-semibold"
      >
        Dashboard Home
      </Link>
      <Link
        to="/dashboard"
        className="text-decoration-none text-secondary-emphasis fw-semibold"
      >
        Dashboard Home
      </Link>
      <Link
        to="/dashboard"
        className="text-decoration-none text-secondary-emphasis fw-semibold"
      >
        Dashboard Home
      </Link>
      <Link
        to="/dashboard"
        className="text-decoration-none text-secondary-emphasis fw-semibold"
      >
        Dashboard Home
      </Link>
    </div>
      
    </div>
  );
}
