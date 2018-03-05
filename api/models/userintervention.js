import mongoose from 'mongoose';
import crypto from 'crypto';
var Schema = mongoose.Schema;
const userInterventionSchema = new Schema({
    interventionsId: {
      type: Schema.Types.ObjectId,
      ref: 'Interventions'
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    
    submittedExercise: {},
    
    is_submitted: {
      type:Boolean,
      default:false
    },

    submittedAt: {
        type: Date
    },

    is_active: {
      type:Boolean,
      default:true
    },
    
    is_deleted: {
        type: Boolean,
        default: false
    },
    
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model('userIntervention', userInterventionSchema);