import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    total: 0,
};

const cartSlicer = createSlice({

    name: "cart",

    initialState,

    reducers: {

        addToCart: (state, action) => {
            state.items.push(action.payload);
            state.total += action.payload.price;
        },

        removeFromCart: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);

            if (itemIndex !== -1) {
                const [removedItem] = state.items.splice(itemIndex, 1);
                state.total -= removedItem.price;
            }
        },

        clearCart: (state) => {
            state.items = [];
            state.total = 0;
        }
    }

});

export const {
    addToCart,
    removeFromCart,
    clearCart
} = cartSlicer.actions;

export default cartSlicer.reducer;