import mongoose from 'mongoose';
import crypto from 'crypto';
var Schema = mongoose.Schema;
const interventionSchema = new mongoose.Schema({
  	name: {
    	type: String,
    	index: true
  	},

    time: {
      type: String
    },
  	
    interventionsId: Number,
  	
    contents: [{}],
  	
    homework : {
      type:String
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

export default mongoose.model('Interventions', interventionSchema);