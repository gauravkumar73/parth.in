import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import emailjs from "@emailjs/browser";

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

    try {
      // 🔥 Save to Firebase
      await addDoc(collection(db, "users"), {
        ...form,
        createdAt: new Date()
      });

      // 📩 Email send (EmailJS)
      emailjs.send(
        "service_g1239zt",     // 👈 replace
        "template_p3siwhp",    // 👈 replace
        form,
        "HDnieeFduOvZhn1Ur"      // 👈 replace
      );

      // 📱 WhatsApp
      const message = `New Enquiry:
Name: ${form.firstName} ${form.lastName}
Phone: ${form.phone}
Email: ${form.email}
City: ${form.city}`;

      window.open(`https://wa.me/918192986623?text=${encodeURIComponent(message)}`);

      alert("Form Submitted ✅");

      // reset form
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: ""
      });

    } catch (error) {
      console.error(error);
      alert("Error submitting form ❌");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded-4">
        <h3 className="text-center mb-4 text-primary">Get In Touch</h3>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="city"
              className="form-control"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-primary w-100 py-2 fw-bold">
            Submit Now 🚀
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;