import mongoose from 'mongoose';
import crypto from 'crypto';

var Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    hash: String,
    salt: String,
    email: {
        type: String,
        unique: true,
        index: true
    },
    firstName: String,
    lastName: String,
    gender: String,
    age: Number,
    height: Number,
    weight: Number,
    mobile: Number,
    deviceToken: String,
    is_active: {
        type: Boolean,
        default: false
    },
    is_deleted: {
        type: Boolean,
        default: false
    },
    deletedOn: {
        type: Date
    },
    updatedBy: String,
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});


userSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    let cryptPass = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1');
    this.hash = cryptPass.toString('hex') ;
};

userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64,'sha1').toString('hex');
    return this.hash === hash;
};

export default mongoose.model('User', userSchema);
