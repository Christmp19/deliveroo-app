import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect';

const initialState = {
    items: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            let newBasket = [...state.items];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove product (id: ${action.payload.id}) as its not in the basket!`)
            }

            state.items = newBasket;
        },
    },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// export const selectBasketItems = (state) => state.basket.items;
// export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) =>
//     total + item.price,0)

// export const selectBasketItemsWithId = (state, id) =>
//     state.basket.items.filter((item) => item.id === id);

 
const selectBasket = (state) => state.basket;

export const selectBasketItemsWithId = createSelector(
    [selectBasket, (state, id) => id],
    (basket, id) => basket.items.filter((item) => item.id === id)
);

export const selectBasketItems = createSelector(
    [selectBasket],
    (basket) => basket.items
);
export const selectBasketTotal = createSelector(
    [selectBasketItems],
    (items) => items.reduce((total, item) => total + item.price, 0)
);


export default basketSlice.reducer;