import mongoose from 'mongoose';
import crypto from 'crypto';
var Schema = mongoose.Schema;

const surveySchema = new mongoose.Schema({

    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },

    surveyType: String,

    userSurvey:[{}],
    
    is_deleted: {
      type: Boolean,
      default: false
    },

    is_active: {
      type: Boolean,
      default: true
    },

    updatedAt: {
        type: Date,
        default: Date.now()
    },

    createdAt: {
        type: Date,
        default: Date.now()
    }

});

export default mongoose.model('Survey', surveySchema);