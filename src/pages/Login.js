import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../components/Logo";

export default function Login() {
  const [loginCred, setLoginCred] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginCred((prev) => ({ ...prev, [name]: value }));
  };

  async function handleLogin(e) {
    e.preventDefault();
    // const emailCheck = await fetch(`${BaseUrl}/login`, {
    //   method: "POST",
    //   mode: "cors",
    //   body: JSON.stringify({
    //     email: loginCred.email,
    //     password: loginCred.password,
    //   }),
    //   headers: { "Content-Type": "application/json" },
    //   credentials: "include",
    // });
    // if (!emailCheck.ok) {
    //   const err = await emailCheck.json();
    //   setLoginErr({ ...err });
    //   return;
    // }
    // const tokentobestoredinlocalstorage = await emailCheck.json();

    // localStorage.setItem("token", tokentobestoredinlocalstorage.token);
    // setLgdin(true);
    // setUser(tokentobestoredinlocalstorage.user);
    // setFirstLogin(tokentobestoredinlocalstorage.fl);
    navigate("/");
  }
  const fontsizee = 30;
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{ height: "80vh" }}
    >
      <Row className="w-100">
        <Col
          xs={12}
          md={12}
          className="d-flex justify-content-center align-items-center mb-4"
        >
          <Logo fontsizee={fontsizee} />
        </Col>
        <Col
          xs={12}
          md={12}
          className="d-flex justify-content-center align-items-center"
        >
          <Form
            style={{ width: "100%", maxWidth: "400px" }}
            onSubmit={handleLogin}
          >
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                className="input"
                type="email"
                onChange={handleChange}
                placeholder="Enter email"
                name="email"
                value={loginCred.email || ""}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                className="input"
                type="password"
                onChange={handleChange}
                placeholder="Enter password"
                name="password"
                value={loginCred.password || ""}
              />
            </Form.Group>
            <Button
              type="submit"
              className="mb-3 w-100"
              size="sm"
              disabled={!loginCred.email || !loginCred.password}
              style={{
                backgroundColor: "black",
                color: "white",
                border: "1px black solid",
              }}
            >
              Login
            </Button>
            <Row>
              <Col className="d-flex justify-content-between">
                <Link to="/forgotpassword">Forgot password?</Link>
                <p>
                  Not a member? <Link to="/register">Register</Link>
                </p>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
