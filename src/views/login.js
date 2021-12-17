import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Login(props) {
  const { setIsLogin } = props;
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleChangeUserName = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === password) {
      setIsLogin(true);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Label className="mt-3">Username</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChangeUserName}
                placeholder="Username"
              />
              <Form.Label className="mt-3">Password</Form.Label>
              <Form.Control
                type="password"
                onChange={handleChangePassword}
                placeholder="Password"
              />
              <Button className="mt-3" variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
