const router = require('express').Router();
const { createNewNote, deleteNote, validateNote, readNotes  } = require('../../lib/notes');
const { v4: uuidv4 } = require('uuid');




router.get('/notes', (req, res) => {
    let results = readNotes();
    res.json(results);
    console.log("The get has happened");
    console.log(results);
});


router.post('/notes', (req, res) => {
    req.body.id = uuidv4();

    if (!validateNote(req.body)) {
        res.status(404).send('The note is not properly formatted');
    }
    else {
        let notesList = readNotes();
        const note = createNewNote(req.body, notesList);
        res.json(note);
    }
});

router.delete('/notes/:id', (req ,res) => {
    let notesList = readNotes();
    const newNoteArray = deleteNote(req.params.id, notesList);
    res.json(newNoteArray);
    console.log(newNoteArray);
});

module.exports = router;