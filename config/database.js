/*
 * Database connectivity
 */
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
//Check environment development or production
// mongoose.connect('mongodb://localhost:27017/iamivc');
mongoose.connect('mongodb://admin:admin@ds111638.mlab.com:11638/iamlvc');

//check if we are connected successfully or not
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

export default db;
