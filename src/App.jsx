import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Admin from "./pages/Admin"; // 👈 add karo

// 👇 Layout control component
function Layout() {
  const location = useLocation();

  // 👇 jaha header/footer nahi chahiye
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/admin";

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        {/* 🌐 Public */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* 🔐 Login */}
        <Route path="/login" element={<Login />} />

        {/* 🔒 Admin */}
        <Route path="/admin" element={<Admin />} />

        {/* baaki routes same rehne de */}
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;