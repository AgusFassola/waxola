import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
    id:string;
    name:string;
    price:number;
    quantity:number;
};

type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items:[],
};

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem:(state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if(existingItem){
                existingItem.quantity += 1;
            }else{
                state.items.push({...action.payload, quantity:1 });
            }
        },
        removeItem:(state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        /* updateQuantity: (state, action: PayloadAction<{ id: string; quantity:number }>) =>{
            const item = state.items.find(item => item.id === action.payload.id);
            if(item){
                item.quantity = action.payload.quantity;
            }
        }, */
        clearCart:(state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;