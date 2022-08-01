import {loadStripe} from '@stripe/stripe-js';

let stripePromise;

 const getStripe =()=>{ 
    if(!stripePromise){
        stripePromise = loadStripe('pk_test_51LO33tCTYfbwXU9v9T1waCOq3zvJlZVnF65gIszZCkOpF7tMmeBfv0npvJTsIbq689QN7sdaENU8fya1lBZMKobh006ce89NII');
    }
    return stripePromise;
}

export default getStripe;