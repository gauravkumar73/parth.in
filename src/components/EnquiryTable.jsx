import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function AdminPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "users"));
      setUsers(snapshot.docs.map(doc => doc.data()));
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>User Data</h2>

      {users.map((user, i) => (
        <div key={i}>
          <p>{user.firstName} {user.lastName}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.city}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;