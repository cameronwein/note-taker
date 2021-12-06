const router = require('express').Router();
let { notes } = require('../../db/db.json');
const { findById, createNewNote, validateNote, deleteNote } = require('../../lib/notes');
const { v4: uuidv4 } = require('uuid');


router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});


router.post('/notes', (req, res) => {
    req.body.id = uuidv4();

    if (!validateNote(req.body)) {
        res.status(404).send('The note is not properly formatted');
    }
    else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes/:id', (req ,res) => {
    newNoteArray = deleteNote(req.params.id, notes);
    res.json(newNoteArray);
});

module.exports = router;