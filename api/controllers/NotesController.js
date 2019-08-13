/**
 * NotesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    all: (req, res) => {
        var notes = Notes.find({}).exec((error) => {
            if (error) res.send(500, {error: 'Database error.'})
            res.send(notes)
        })
    },
};

