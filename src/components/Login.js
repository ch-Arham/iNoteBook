import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/notes/noteContext";

const Login = () => {
  const { showAlert } = useContext(NoteContext);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = credentials;
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();
    
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      showAlert("Logged in Successfully", "success");
      navigate("/", { replace: true });
    } else {
      showAlert("Enter Valid Credentials", "danger");
    }
    setCredentials({ email: "", password: "" });
  };
  return (
    <div className="container light-shadow my-3">
      <h2 className="text-center">Login - To Use iNoteBook</h2>
      <Form className="my-3" onSubmit={handleSubmit} style={{paddingLeft: '1.25em', paddingRight: '1.25em'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><span className="font-weight-bold font-size-increase">Email</span></Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="Enter Email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><span className="font-weight-bold font-size-increase">Password</span></Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button
          variant="dark"
          type="submit"
          style={{ display: "block", margin: "0 auto", padding: "7px 140px" }}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
