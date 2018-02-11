import mongoose from 'mongoose';
import crypto from 'crypto';

const questionSchema = new mongoose.Schema({
  	question: {
    	type: String,
    	index: true
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

export default mongoose.model('Question', questionSchema);