import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import NoteContext from "../context/notes/noteContext";

const AddNote = () => {
  const { addNote } = useContext(NoteContext);

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.title && note.description) {
      addNote(note);
    }
    setNote({ title: "", description: "", tag: "" });
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container light-shadow">
        <h2 className="text-center">Add A Note</h2>
        <Form className="my-3  px-2" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><span className="font-weight-bold font-size-increase">Title</span></Form.Label>
            <Form.Control
              type="text"
              minLength={3}
              required
              placeholder="Enter Title"
              name="title"
              value={note.title}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><span className="font-weight-bold font-size-increase">Description</span></Form.Label>
            <Form.Control
              required
              minLength={5}
              type="text"
              placeholder="Description"
              name="description"
              value={note.description}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><span className="font-weight-bold font-size-increase">Tag</span></Form.Label>
            <Form.Control
              type="text"
              placeholder="Tag"
              name="tag"
              value={note.tag}
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            variant="dark"
            type="submit"
            style={{ display: "block", margin: "0 auto", padding: "7px 140px" }}
            disabled= {note.title.length<3 || note.description.length<5} 
          >
            Add Note
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddNote;
