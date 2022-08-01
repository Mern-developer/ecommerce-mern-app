import express from 'express';
import Stripe from 'stripe'; 
const stripe =new Stripe('sk_test_51LO33tCTYfbwXU9vGKCJaObOQwNcvhjfJtmwu3NQxMPhUg667vDQfKAmxgsCEFKJcy15WY9CVM7jn1ijCJrIqg1600gBP6GyQ1');

const paymentRouter = express.Router();
paymentRouter.post('/create-checkout-session', async (req, res) => {
    console.log(req.body);  
    const { cartItems } = req.body;
    try{
const params = {
    submit_type: 'pay',
    payment_method_types: ['card'],
    billing_address_collection:   'auto',
        line_items: req.body.cartItems.map((item)=>{
            const img = item.image[0];
        return {
            price_data: {
                currency: 'PKR',
            product_data: {
                name: item.name,
                images: [img],
            },
            unit_amount: item.price * 100    
            },
            adjustable_quantity:{
                enable: true,
                minimum: 1
            },
            quantity: item.quantity
        }
        }),
    mode: 'payment', 
    success_url: `${req.headers.origin}/?success=true`,
    cancel_url: `${req.headers.origin}/?canceled=true`,
}
const session = await stripe.checkout.sessions.create(params);
res.status(200).json(session);
  }catch(err){
    res.status(err.statusCode || 500).json(err.message);
  }

});
export default paymentRouter;