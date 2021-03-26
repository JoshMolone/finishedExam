
// HERE IS WHERE YOU NEED TO ADD CONST MONGOOSE
const mongoose = require('mongoose'); 
const db_name = "exam_db"
// Here is where you are connecting to the database
mongoose.connect(`mongodb://localhost/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
        .then(() => console.log('You are connected to the database.....................'))
        .catch(() => console.log('ERROR: connecting to database................', err));