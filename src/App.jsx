import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import WebDesign from "./pages/services/WebDesign";
import WebDevelopment from "./pages/services/WebDevelopment";
import WebHosting from "./pages/services/WebHosting";
import GraphicDesign from "./pages/services/GraphicDesign";
import MobileApp from "./pages/services/MobileApp";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import PaymentGateway from "./pages/services/PaymentGateway";
import Ecommerce from "./pages/services/Ecommerce";
import SEO from "./pages/services/SEO";
import Consultation from "./pages/services/Consultation";
import Privacy from "./pages/footer/Privacy";
import Terms from "./pages/footer/Terms";
import Career from "./pages/footer/Career";
import FAQ from "./pages/footer/FAQ";
import Blog from "./pages/footer/Blog";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/web-design" element={<WebDesign />} />
<Route path="/web-development" element={<WebDevelopment />} />
<Route path="/web-hosting" element={<WebHosting />} />
<Route path="/graphic-design" element={<GraphicDesign />} />
<Route path="/mobile-app" element={<MobileApp />} />
<Route path="/digital-marketing" element={<DigitalMarketing />} />
<Route path="/payment-gateway" element={<PaymentGateway />} />
<Route path="/ecommerce" element={<Ecommerce />} />
<Route path="/seo" element={<SEO />} />
<Route path="/consultation" element={<Consultation />} />
<Route path="/privacy" element={<Privacy />} />
<Route path="/terms" element={<Terms />} />
<Route path="/career" element={<Career />} />
<Route path="/faq" element={<FAQ />} />
<Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;