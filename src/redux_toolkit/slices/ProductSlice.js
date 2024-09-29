import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("", async () => {
    const res = await fetch("http://localhost:9000/products");
    const data = res.json();
    // console.log(data);
    return data;
})


export const productSlice = createSlice({
  name: "ProductSlice",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
       return state = action.payload;
    });
  },
});

// export const {} productSlice.actions;
export default productSlice.reducer;