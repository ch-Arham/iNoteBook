import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = (currentNote) => {
    setShow(true);
    setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
   
  }

  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });
  // const updateNote = (currentNote) =>{
  //   setNote(currentNote);
  //   console.log(currentNote)
  // }

  const host = "http://localhost:5000";

  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //Get All Note
  const getNotes = async () => {
    //API Call: for backend
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });

      const json = await response.json();
      setNotes(json);
    
  };

  //Add a Note
  const addNote = async (note) => {
    //API Call: for backend
    const {title,description,tag} = note;
    
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag}),
    });
    const json = await response.json();
    
    //to show at front end
 
    setNotes([...notes, json]);
    showAlert("Note Added Successfully", "success")
    
  };

  //Delete a Note by taking its id
  const deleteNote = async(id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
    const json = await response.json();    
    console.log(json)

    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
    showAlert("Note Is Deleted Successfully", "success");
    window.scrollTo(0, 0);
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes)); //creates deep copy
    //Logic for editing note
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }

    }
    setNotes(newNotes);
    showAlert("Note Is Edited Successfully", "success");
    window.scrollTo(0, 0)
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes, handleClose, handleShow, show, note, setNote, alert, setAlert, showAlert }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;
