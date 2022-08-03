import mongoose from "mongoose";

const Schema = mongoose.Schema;
const mediaSchema= new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name: {type: String},
        type: {type: String},
        picture: {data: Buffer,contentType: String},
    }
) 

const mediaFile =mongoose.model('mediaFile', mediaSchema);
export default mediaFile;