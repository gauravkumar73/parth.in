import { useState } from "react";

export default function Login() {
  const [data, setData] = useState({
    username: "gaurav",
    password: "gaurav123",
  });

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.status === 200) {
        localStorage.setItem("token", result.token);
        window.location.href = "/admin";
      } else {
        alert("Invalid login ❌");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Admin Login</h2>

      <input
        placeholder="Username"
        onChange={(e) =>
          setData({ ...data, username: e.target.value })
        }
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setData({ ...data, password: e.target.value })
        }
      />
      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}