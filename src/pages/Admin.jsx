import { useEffect, useState } from "react";

export default function Admin() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/enquiries", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    const result = await res.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Admin Panel</h2>

      {data.map((item) => (
        <div key={item._id}>
          <p>{item.name}</p>
          <p>{item.email}</p>
          <button
  onClick={() => {
    localStorage.removeItem("token");
    window.location.href = "/loginn";
  }}
>
  Logout
</button>
        </div>
      ))}
    </div>
    
  );
}