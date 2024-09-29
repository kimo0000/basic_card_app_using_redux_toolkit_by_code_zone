import { createSlice } from "@reduxjs/toolkit";



export const actionSlice = createSlice({
  name: "actionSlice",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      const findedProduct = state.find((product) => {
         return product.id === action.payload.id;
      })

      if (findedProduct) {
         findedProduct.quantity += 1;
      } else {
         const productClone = {...action.payload, quantity: 1};
         state.push(productClone);
      }
    },
    decQuantity: (state, action) => {
      const findedProduct = state.find((product) => {
        return product.id === action.payload.id;
      });
      if (findedProduct.quantity > 0) {
         findedProduct.quantity -= 1;
      }

      if (findedProduct.quantity === 0) {
         console.log("Finded");
         state.filter(item => item.id !== findedProduct.id);
      }

      console.log(state);
    },
    addQuantity: (state, action) => {
      const findedProduct = state.find((product) => {
        return product.id === action.payload.id;
      });
     
      findedProduct.quantity += 1;
    },
    deleteProduct: (state, action) => {
       return state.filter(item => item.id !== action.payload.id)
    },
    clearAll: (state, action) => {
       alert('are you sure to delete all products ?');
       return state = [];
    },
  },
  extraReducers: (builder) => {},
});

export const { addProduct, addQuantity, decQuantity, deleteProduct, clearAll } =
  actionSlice.actions;
export default actionSlice.reducer;
