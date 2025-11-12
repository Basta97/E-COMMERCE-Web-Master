import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Product {
  quantity: number;
  _id: string;
  name: string;
  Image: {
    url: string;
    publicId: string;
  };
  categoryId: {
    _id: string;
  };
  Brand: {
    _id: string;
    Name: string;
  };
  available: "InStock" | "OutOfStock" | string;
  price: number;
  review: number;
  Time: string | null;
  totalPrice: number;
}
interface CartItems {
  cart: Product[];
  loading: boolean;
}

export const AddTocart = createAsyncThunk(
  "cart/AddTocart",
  async ({
    AccessToken,
    userId,
    productId,
    quantity,
  }: {
    AccessToken: string;
    userId: string;
    productId: string;
    quantity: number;
  }) => {
    try {
      const res = await fetch(
        "https://e-commarce-website-eight.vercel.app/api/v1/cart/add-cart",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${AccessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, productId, quantity }),
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Server Error");
      }
      const data = await res.json();
      return data.product;
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : typeof err === "string" ? err : String(err);
      throw new Error(message || "Server Error");
    }
  }
);

export const GetUserCart = createAsyncThunk(
  "cart/GetUserCart",
  async ({ AccessToken }: { AccessToken: string }) => {
    try {
      const res = await fetch(
        "https://e-commarce-website-eight.vercel.app/api/v1/cart/get-cart",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${AccessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Server Error");
      }
      const data = await res.json();
      return data.cart;
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : typeof err === "string" ? err : String(err);
      throw new Error(message || "Server Error");
    }
  }
);

const initialState: CartItems = {
  cart: [],
  loading: true,
};

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddTocart.fulfilled, (state, action: PayloadAction<Product>) => {
        state.cart.push(action.payload);
      })
      .addCase(GetUserCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        GetUserCart.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.cart = action.payload;
          state.loading = false;
        }
      )
      .addCase(GetUserCart.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default cartslice.reducer;
