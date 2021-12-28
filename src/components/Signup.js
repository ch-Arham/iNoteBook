import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/notes/noteContext";

const Signup = () => {
  const { showAlert } = useContext(NoteContext);
    const [credentials, setCredentials] = useState({ name:"", email: "", password: "", cpassword: "" });
    let navigate = useNavigate();
  
    const handleChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const { name, email, password } = credentials;
      const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      const json = await response.json();
      console.log(json);
      if (json.success) {
        //save the auth token and redirect
        localStorage.setItem("token", json.authToken);
        showAlert("Account Created Successfully", "success");
        navigate("/", { replace: true });
      } else {
        showAlert("Invalid Credentials", "danger");
      }
      setCredentials({ name: "", email: "", password: "" });
    };

    return (
        <div className="container light-shadow mt-3">
      <h2 className="text-center">Signup - Create An Account</h2>
      <Form className="my-3" onSubmit={handleSubmit} style={{paddingLeft: '1.15em', paddingRight: '1.15em'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><span className="font-weight-bold font-size-increase">Name</span></Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Enter Name"
            name="name"
            minLength={3}
            value={credentials.name}
            onChange={handleChange}
          />
        </Form.Group>
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
          <Form.Label className="font-weight-bold font-size-increase">Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="password"
            name="password"
            minLength={5}
            value={credentials.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="font-weight-bold font-size-increase">Confirm Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="confirm password"
            name="cpassword"
            minLength={5}
            value={credentials.cpassword}
            onChange={handleChange}
          />
        </Form.Group>

        <Button
          variant="dark"
          type="submit"
          style={{ display: "block", margin: "0 auto", padding: "7px 140px" }}
        >
          Signup
        </Button>
      </Form>
    </div>
    )
}

export default Signup
