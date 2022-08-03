import mongoose from "mongoose";

const connectDatabase = async ()=>{

    try{
        const connection =  mongoose.connect("mongodb+srv://farhan:TAQ0FmA1cvo7QrZF@cluster0.zwi0jky.mongodb.net/Isonlineshop?retryWrites=true&w=majority", {
            useNewUrlParser: true,           
        });
        console.log("MongoDB is connected");
    }
    catch(err){
            console.log('Error occured: '+err.message);
            process.exit(1);
    }
};

export default connectDatabase;