import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
    id:string;
    name:string;
    price:number;
    quantity:number;
};

const cartSlice = createSlice({
    name:"cart",
    initialState:{ items:[] as CartItem[] },
    reducers:{
        addItem:(state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if(existingItem){
                existingItem.quantity += action.payload.quantity;
            }else{
                state.items.push(action.payload);
            }
        },
        removeItem:(state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        decreaseItemQuantity:(state, action: PayloadAction<string>)=> {
            const item = state.items.find(item => item.id === action.payload);
            if(item){
                if(item.quantity>1){
                    item.quantity -= 1;
                } else{
                    state.items = state.items.filter(i => i.id !== action.payload);
                }
            }
        },
        clearCart:(state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, clearCart, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;