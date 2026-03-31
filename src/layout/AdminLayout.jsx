import Sidebar from "../components/Sidebar";
import AdminHeader from "../components/AdminHeader";

const AdminLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ width: "100%" }}>
        <AdminHeader />
        <div style={{ padding: "20px" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;