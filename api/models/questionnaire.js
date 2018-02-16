let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let questionnaireSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type:String
    },
    iconURL: {
        type:String
    },
    categoryAndQuestions: {
        type:Array
    },
    is_deleted: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    surveyType: {
        type: String
    }
});

let questionnaire = mongoose.model('questionnaire', questionnaireSchema);
module.exports = questionnaire;