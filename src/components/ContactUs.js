import React, { useState, useRef, useContext } from "react";
import emailjs from "emailjs-com";
import { Form, Button } from "react-bootstrap";
import NoteContext from "../context/notes/noteContext";

const ContactUs = () => {
  const { showAlert } = useContext(NoteContext);

  const form = useRef();

  const [note, setNote] = useState({
    user_email: "",
    user_name: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k86blgn",
        "template_s2fpakk",
        form.current,
        "user_gA7w7crYpyzZBsmFJ05xU"
      )
      .then(
        (result) => {
          console.log(result.text);
          showAlert("Email Sent Successfully", "success")
        },
        (error) => {
          console.log(error.text);
          showAlert("Email Was Not Sent. Enter Correct Details", "danger")
        }
      );
    setNote({ user_email: "", user_name: "", message: "" });
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container light-shadow">
        <h2 className="text-center">Contact Me - Gmail</h2>
        <Form ref={form} className="my-3" style={{paddingLeft: '1.15em', paddingRight: '1.15em'}} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <span className="font-weight-bold font-size-increase">Name</span>
            </Form.Label>
            <Form.Control
              required
              minLength={3}
              type="text"
              placeholder="Enter Name"
              name="user_name"
              value={note.user_name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <span className="font-weight-bold font-size-increase">Email</span>
            </Form.Label>
            <Form.Control
              type="email"
              required
              placeholder="Enter Email"
              name="user_email"
              value={note.user_email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <span className="font-weight-bold font-size-increase">
                Message
              </span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Message"
              required
              value={note.message}
              name="message"
              minLength={5}
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            variant="dark"
            type="submit"
            style={{ display: "block", margin: "0 auto", padding: "7px 140px" }}
            disabled={note.user_name.length < 3 || note.message.length < 5}
          >
            Send Email
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ContactUs;
