const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");

//Rote 1: Get All the Notes using: Get /api/notes/fetchallnotes. Login Required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Internal Server Error");
  }
});

//Rote 2: Add A Note using: POST /api/notes/addnote. Login Required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title  ").isLength({ min: 3 }),
    body("description","Description must be at least 5 characters long").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //if there are errors, send bad request with error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title, description, tag } = req.body;
      //create a new user. await returns the resolved promise in this case the document created
      const note = await Note.create({
        user: req.user.id,
        title,
        description,
        tag,
      });

      res.json(note);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//Rote 3: Update An Existing Note using: PUT /api/notes/updatenote. Login Required
router.put('/updatenote/:id', fetchuser, async (req,res)=>{
    const {title, description, tag} = req.body;
    try{
        //Create a newNote object
        const newNote = {};
        if(title){newNote.title = title;}
        if(description){newNote.description = description;}
        if(tag){newNote.tag = tag;}

        //Find the note to update and update it
        let note = await Note.findById(req.params.id);
        if(!note){return res.status(404).send("Not Found");}

        //note.user.toString() --> note ke user ki id uss id walay ke equal hai jo access karna chah raha hai
        if(note.user.toString() !== req.user.id){ 
            return res.status(401).send("Not Allowed");
        }
        
        note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true});

        res.json({note});
    }catch (err) {
    console.log(err.message);
    res.status(500).send("Internal Server Error");
  }
});

//Rote 4: Delete An Existing Note using: DELETE /api/notes/deletenote. Login Required
router.delete('/deletenote/:id', fetchuser, async (req,res)=>{
    try{
        //Find the note to delete and delete it
        let note = await Note.findById(req.params.id);
        if(!note){return res.status(404).send("Not Found");}
    
        //Allow deletion only if user owns this note
        if(note.user.toString() !== req.user.id){ 
            return res.status(401).send("Not Allowed");
        }
        
        note = await Note.findByIdAndDelete(req.params.id);
    
        res.json({"Success":"Note has been deleted",note});
    }catch (err) {
        console.log(err.message);
        res.status(500).send("Internal Server Error");
      }
});

module.exports = router;
