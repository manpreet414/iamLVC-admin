import mongoose from 'mongoose';
import crypto from 'crypto';
var Schema = mongoose.Schema;
const userQuestionSchema = new Schema({
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    },
    dependency: String,
  	question: {
    	type: String,
    	index: true  
  	},
    interventions: {
        type:Array
    },
    elementType: String,
    gender: String,
    variable: String,
    answerKeys:{
     type: Array 
    },
  	is_deleted: {
      type: Boolean,
      default: false
    },
  	is_active: {
    	type: Boolean,
      default: true
  	}
});

export default mongoose.model('userQuestion', userQuestionSchema);