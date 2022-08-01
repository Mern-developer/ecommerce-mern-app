import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const seedModel = new Schema({
 
    name: String,
    slug: String,
    image: String,
    color: String,
    Fabric: String,
    brand: String,
    category: String,
    size: String,
    disclaimer: String,
    jdotcollection: String,
    details: String,
    note: String,
    Measurement:{
        mtrs1: String,
        mtrs2: String,
        mtrs3: String,
        mtrs4: String,
        mtrs5: String,
    },
    Specfic:{
        s_detail1: String,
        s_detail2: String,
        s_detail3: String,
        s_detail4: String,
        s_detail5: String,
        s_detail6: String,
        s_detail7: String,
        s_detail8: String,
        s_detail9: String,
        s_detail10: String,
        s_detail11: String,
    },
    detailing:{
        points1: String,
        points2: String,
        points3: String,
        points4: String,
        points5: String,
        points6: String,
        points7: String,
        points8: String,
        points9: String,
        points10: String,
        points11: String,
    },
    price: Number,
    countInStock: Number,
    ratings: Number,
    numReviewa: Number,


},{
    timestamps: true
})


const productModel = mongoose.model("productModel", seedModel );
export default productModel;
