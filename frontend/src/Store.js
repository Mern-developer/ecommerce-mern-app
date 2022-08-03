import React, { createContext, useReducer } from 'react';

export const Store = createContext();
const initialState ={
    userInfo: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')) : null ,
    cart: {
        shippingAddress: localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {} ,
        paymentmethod: localStorage.getItem('paymentMethod') ? localStorage.getItem('paymentMethod') : '' ,
        cartItems: localStorage.getItem('storeItem')? JSON.parse(localStorage.getItem('storeItem')): [],
    },
};

function reducer(state, action){
    switch (action.type) {
        case "ADD_TO_CART":
        const newItem = action.payload;
        const existItem = state.cart.cartItems.find( (item) => item._id === newItem._id);
        const cartItems = existItem ? state.cart.cartItems.map((x)=> x._id === existItem._id ?
        newItem : x) : [...state.cart.cartItems, newItem];
        localStorage.setItem('storeItem', JSON.stringify(cartItems));
        return {...state, cart: { ...state.cart, cartItems } };
        
        case"REMOVE_FROM_CART":
        //we will filter req id from action.payload current item
        {
            const cartItems = state.cart.cartItems.filter( (item)=> item._id !== action.payload._id);
        localStorage.setItem('storeItem', JSON.stringify(cartItems));
            return {
                //keep state as same then in cart make state.cart and onluy update cartItems 
                    ...state, cart: { ...state.cart, cartItems}}
        }
      case 'CART_CLEAR':
        return{...state, cart:{ ...state.cart, cartItems: [] }}
        
        case'USER_SIGNIN':
        return { ...state, userInfo: action.payload }; 
        
        case 'UPLOAD_PRODUCTS':
            return{ ...state, uploadproduct: action.payload }

        case"SIGN_OUT":
       return{ ...state, userInfo: null,
        cart: {
            cartItems: [],
            shippingAddress: {},
            paymentmethod: ''
        } };
      
       case'SAVE_SHIPPING_ADDRESS':
       return{
        ...state, 
        cart: {...state.cart, shippingAddress: action.payload}
       } 
        case'SAVE_PAYMENT_METHOD':
        return{
            ...state, cart: {...state.cart, paymentmethod: action.payload}
        }


       default:
            return state;
    }
}
export function StoreProvider(props){
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{props.children}</Store.Provider>;
}


