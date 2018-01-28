import mongoose from 'mongoose';
import crypto from 'crypto';
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    hash: String,
    salt: String,
    email: {
        type: String,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    last_login: {
        type: Date,
        default: Date.now()
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
    firstName: String,
    lastName: String,
    fullName:String,
    gender: String,
    age: Number,
    height: Number,
    weight: Number,
    mobile: Number,
    dob:Date,
    address:String,
    city:String,
    state:String,
    zipcode:Number,
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


// userSchema.methods.setPassword = function(password){
//     this.salt = crypto.randomBytes(16).toString('hex');
//     let cryptPass = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1');
//     this.hash = cryptPass.toString('hex') ;
// };

userSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function (password, cb) {
    bcrypt.compare(password, this.password, function (err, isMatch) {
        cb(err, isMatch);
    });
};

userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64,'sha1').toString('hex');
    return this.hash === hash;
};

export default mongoose.model('User', userSchema);
