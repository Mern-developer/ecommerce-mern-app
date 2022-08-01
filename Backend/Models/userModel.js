import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const user = new Schema({
    name: String,
 email: {type: String, unique: true, required: true},
 password: {type: String, min: 4, max: 12, trim: true, required: true},
 isAdmin: { type: Boolean, default: false, required: true} 
},{
    timestamps: true,
});

const userModel = mongoose.model('userModel', user);


export default userModel;
