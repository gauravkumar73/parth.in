import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

function SignupForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("FORM DATA:", form); // 👈 DEBUG

    await addDoc(collection(db, "users"), {
      ...form,
      createdAt: new Date()
    });

    alert("Form Submitted ✅");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" placeholder="First Name" onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="city" placeholder="City" onChange={handleChange} />

      <button type="submit">Submit</button> {/* 🔥 IMPORTANT */}
    </form>
  );
}

export default SignupForm;