import { useState } from "react";
import axios from "axios";

function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Sending Data:", form); // 🔍 debug

    try {
      const res = await axios.post(
        "https://parth-in.onrender.com/contact",
        form
      );

      console.log("Response:", res.data);

      alert("Message Sent ✅");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.log("ERROR:", err.response?.data || err.message); // 🔥 debug
      alert("Error ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
      />

      <button type="submit">Send</button>
    </form>
  );
}

export default Form;