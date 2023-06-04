const mongoose = require('mongoose');


const protfolioSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    gitHub:{
        type: String,
        required: true
    },
    liveLink: {
        type: String,
        required: true
    }
});


const Protfolio = mongoose.model('PROJECTS',protfolioSchema);

module.exports = Protfolio;