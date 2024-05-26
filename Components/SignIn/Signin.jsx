import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import GoogleButton from "react-google-button";
import "../SignIn/Signin.css";
import { UserAuth } from "../Context/AuthContext";

export default function Signin() {
  const { Googlesignin } = UserAuth();

  const handleGoogleLogin = async () => {
    try {
      await Googlesignin();
    } catch (err) {
      console.error(err);
    }
  };

  

  return (
    <>
      <Container className="mt-custom">
        <Row>
          <Col>
            <Card style={{ width: "500px" }} className="shadow-lg">
              <Card.Header style={{ backgroundColor: "#00572d" }}>
                <h3 style={{ marginLeft: "168px" }} className="mt-3">
                  Sign Up
                </h3>
              </Card.Header>
              <Card.Body style={{ backgroundColor: "#f7f5f0" }}>
                <Form>
                  <Form.Group className="mb-4">
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Control
                      type="password"
                      placeholder="Enter Your Password"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      className="mb-4"
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" style={{ marginLeft: "190px" }}>
                    <Button
                      type="button"
                      style={{ backgroundColor: "#00572d" }}
                    >
                      Sign Up
                    </Button>
                  </Form.Group>
                  <Form.Group style={{ marginLeft: "110px" }} className="mb-3 ">
                    <GoogleButton onClick={handleGoogleLogin}></GoogleButton>
                  </Form.Group>
                  <Form.Group style={{ marginLeft: "150px" }} className="mb-3 ">
                    <h5>Forgot Password</h5>
                  </Form.Group>
                  <Form.Group style={{ marginLeft: "68px" }}>
                    <h4>Don't Have an Account? Register</h4>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
