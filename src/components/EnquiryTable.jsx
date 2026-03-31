import { useEffect, useState } from "react";
import axios from "axios";

const EnquiryTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Purpose</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.type}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.date || "-"}</td>
              <td>{item.purpose || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnquiryTable;