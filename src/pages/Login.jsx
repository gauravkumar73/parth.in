import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const ADMIN_USER = "admin";
  const ADMIN_PASS = "12345";

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <Container fluid className="login-container">
      <Row className="vh-100">

        {/* LEFT IMAGE SECTION */}
        <Col md={6} className="image-section d-none d-md-block">
          <div className="image-grid">
            <img src="/img1.jpg" alt="" />
           
          </div>
        </Col>

        {/* RIGHT LOGIN SECTION */}
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <div className="login-box">

            {/* LOGO */}
            <div className="text-center mb-4">
              <Link to="/">
                <img src="/log.png" alt="logo" className="logo-img" />
              </Link>
              <p className="text-muted mt-2">
                Please enter your login details.
              </p>
            </div>

            {/* FORM */}
            <Form onSubmit={handleLogin}>
              <Form.Control
                className="mb-3"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />

              <Form.Control
                type="password"
                className="mb-3"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button className="w-100 login-btn" type="submit">
                Login
              </Button>
            </Form>

            <div className="text-center mt-3">
              <a href="#">Forgot Password?</a>
            </div>

            <div className="text-center footer mt-4">
              Powered By <b>commrz</b> © 2019-2026
            </div>

          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;