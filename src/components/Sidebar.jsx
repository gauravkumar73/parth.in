import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  return (
    <div style={{ width: "200px", background: "#111", color: "#fff", height: "100vh" }}>
      <h3 style={{ padding: "10px" }}>Admin</h3>

      <ul style={{ listStyle: "none", padding: "10px" }}>
        <li><Link to="/dashboard" style={{ color: "#fff" }}>Dashboard</Link></li>
        <li><Link to="/enquiries" style={{ color: "#fff" }}>Enquiries</Link></li>
        <li><Link to="/edit-home" style={{ color: "#fff" }}>Edit Home</Link></li>
      </ul>

      <button onClick={logout} style={{ margin: "10px" }}>Logout</button>
    </div>
  );
};

export default Sidebar;