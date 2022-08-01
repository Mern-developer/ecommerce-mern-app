import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const order = new Schema({
 orderItems:[
   {
       slug: {type: String, required: true},
       name: {type: String, required: true},
       quantity: {type: Number, required: true},
       price: {type: Number, required: true},
       image: {type: String, required: true},
       product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productModel',
        required: true,
       }
    }
 ],
 shippingAddress:{
    fname:{type: String, required: true},
    address:{type: String, required: true},
    city:{type: String, required: true},
    postal:{type: String, required: true},
    country:{type: String, required: true},
 },
 paymentmethod: {type: String, required: true},
 paymentResult:{
    id: String,
    status: String,
    update_time: String,
    email_address: String,
 },
 itemsPrice:{type: Number, required: true},
 shippingPrice:{type: Number},
 taxPrice:{type: Number, required: true},
 totalPrice:{type: Number, required: true},
user: {type: mongoose.Schema.Types.ObjectId, ref: 'userModel',
reguired: true},
isPaid: {type: Boolean, default: false},
paidAt: {type: Date},
isDelivered: {type: Boolean, default: false},
deliveredAt: {type: Date},
},{
    timestamps: true,
});

const orderModel = mongoose.model('orderModel', order);


export default orderModel;
