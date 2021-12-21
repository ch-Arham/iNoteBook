import React, {useContext} from "react";
import { Card } from "react-bootstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import NoteContext from "../context/notes/noteContext";

const NoteItem = ({ singleNote }) => {
    const { deleteNote, handleShow } = useContext(NoteContext);
    return (
    <div className="col-md-3">
      <Card className="my-3">
        <Card.Body className="height-same">
          <div className="d-flex align-items-start justify-content-between">
            <Card.Title>{singleNote.title}</Card.Title>
            <div className="d-flex">
            <RiDeleteBinLine className="cursor-pointer mx-2" onClick={()=>deleteNote(singleNote._id)}/>
            <FiEdit className="cursor-pointer mx-2" onClick={()=>handleShow(singleNote)}/>
            </div>
          </div>

          <Card.Text>{singleNote.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NoteItem;

// <IconContext.Provider value={{color:"blue"}} --> make this wrap around the app.js
//to give style to whole icons
