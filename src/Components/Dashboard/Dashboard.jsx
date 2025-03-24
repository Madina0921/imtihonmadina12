import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <nav>
        <Link to="about">About</Link>
        <Link to="blog">Blog</Link>
        <Link to="info">Info</Link>
        <Link to="news">News</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default Dashboard;
