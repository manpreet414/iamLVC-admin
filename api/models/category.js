import mongoose from 'mongoose';
import crypto from 'crypto';
var Schema = mongoose.Schema;
const categorySchema = new mongoose.Schema({
  	name: {
    	type: String,
    	index: true
  	},
  	description: String,
  	smallIconURL: String,
  	bigIconURL: String,
  	is_active: {
    	type:Boolean,
    	default:true
  	},
    is_deleted: {
        type: Boolean,
        default: false
    },
  	updatedAt: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model('Category', categorySchema);