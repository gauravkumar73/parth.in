import AdminLayout from "../layout/AdminLayout";
import EnquiryTable from "../components/EnquiryTable";

const Enquiries = () => {
  return (
    <AdminLayout>
      <h2>Enquiries</h2>

      <EnquiryTable />  {/* 🔥 DATA YAHAN SHOW HOGA */}
    </AdminLayout>
  );
};

export default Enquiries;