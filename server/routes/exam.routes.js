const ExamController = require('../controllers/exam.controller')

module.exports = app => {
    app.get("/api/exam/all", ExamController.findAll)
    app.post("/api/exam/create", ExamController.createNewEntry)
    app.get("/api/exam/:specificid", ExamController.findSpecific)
    app.put("/api/exam/update/:specificid", ExamController.updateSpecific)
    app.delete("/api/exam/delete/:specificid", ExamController.deleteSpecific)
}



