import { useState } from "react";
import axios from "axios";
import "./DemoForm.css";

const DemoForm = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    date: "",
    purpose: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/user/signup", form);

    alert("Submitted ✅");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>×</button>

        <h2>Schedule a free demo</h2>
        <p>Please fill in your details to schedule a free demo.</p>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Full Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <div className="row">
            <input
              placeholder="Mobile"
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              required
            />

            <input
              type="date"
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
            />
          </div>

          <textarea
            placeholder="Purpose"
            onChange={(e) => setForm({ ...form, purpose: e.target.value })}
          />

          <button type="submit">Schedule a Call</button>
        </form>
      </div>
    </div>
  );
};

export default DemoForm;