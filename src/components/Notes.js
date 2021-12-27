import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import ModalEdit from "./ModalEdit";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const { notes, getNotes } = useContext(NoteContext);
  let navigate = useNavigate();
  
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }else{
      navigate('/login', {replace: true});
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <AddNote />

      <ModalEdit />

      <div
        className="row my-5 light-shadow"
        style={{ width: "100%", marginLeft: "0em" }}
      >
        <h2 className="text-center">Your Notes</h2>
        <div className="container mx-2">
          {notes.length === 0 && "No Notes To Display..."}
        </div>
        {notes.map((note) => {
          return <NoteItem key={note._id} singleNote={note}/>;
        })}
      </div>
    </>
  );
};

export default Notes;
