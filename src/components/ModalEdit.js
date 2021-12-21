import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import { Modal, Button, Form } from "react-bootstrap";

const ModalEdit = () => {
  const { handleClose, show, note, setNote, editNote ,showAlert} = useContext(NoteContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    //setNote({ etitle: "", edescription: "", etag: "" });
    editNote(note.id, note.etitle, note.edescription, note.etag);
    showAlert("Updated Successfully","success")
    handleClose();
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="my-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                name="etitle"
                value={note.etitle}
                onChange={handleChange}
                required minLength={3}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                name="edescription"
                value={note.edescription}
                onChange={handleChange}
                required minLength={5}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Tag</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tag"
                name="etag"
                value={note.etag}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button disabled={note.etitle.length<3 || note.edescription.length<5} onClick={handleSubmit} variant="dark" type="submit">Update Note</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEdit;
