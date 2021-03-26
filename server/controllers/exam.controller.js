const Exam = require('../models/exam.model')

// Get All Data Inside The AnyName DB
module.exports.findAll = (req,res) => {
    Exam.find()
        .then(allThings => {
            console.log("Retreiving data from Database .............................")
            res.json({results: allThings})
        })
        .catch(err => res.json(err))
}

// CREATE a new entry for the database
module.exports.createNewEntry = (req, res) => {
    Exam.create(req.body)
        .then(newEntry => res.json({results: newEntry}))
        .catch(err => res.json(err))
}

// FIND a specfic entry that exists in the databse
module.exports.findSpecific = (req, res) => {
    Exam.findOne({_id: req.params.specificid})
        .then(specificEntry => res.json({results: specificEntry}))
        .catch(err => res.json(err))
}

// UPDATE a specific entry that exists in the database by ID
module.exports.updateSpecific = (req, res) => {
    Exam.findOneAndUpdate(
        {_id: req.params.specificid}, 
        req.body , 
        {new:true,
        runValidators:true})
        .then(specificUpdate => res.json({results: specificUpdate}))
        .catch(err => res.json(err))
}

// DELETE s specific entry that exists by ID
module.exports.deleteSpecific = (req, res) => {
    Exam.findOneAndDelete({_id: req.params.specificid},{useFindAndModify:false})
        .then(deletedResult => res.json({results: deletedResult}) )
        .catch(err => res.json(err))
}

module.exports.updateSpecific = (req, res) => {
    Exam.findOneAndUpdate(
        {_id: req.params.specificid},
        req.body,
        {new:true, runValidators:true
        })
        .then(updatedThing => res.json({results: updatedThing}))
        .catch(err => res.json(err))
}