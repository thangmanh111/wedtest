import { createSlice } from "@reduxjs/toolkit";

import toast from "react-hot-toast";
const initialState = {
  carts: [],
  isCartMessageOn: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const { carts } = state;
      const { id, quantity } = action.payload;

      const isCheckCart = carts.some((item) => item.id === id);

      if (!isCheckCart) {
        const item = {
          ...action.payload,
          quantity,
        };
        return {
          ...state,
          carts: [...carts, item],
          isCartMessageOn: true,
        };
      } else {
        const updateItem = carts.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity,
            };
          }
          return item;
        });

        return {
          ...state,
          carts: updateItem,
          isCartMessageOn: true,
        };
      }
    },

    increaseQty: (state, action) => {
      const { id, quantity } = action.payload;
      const { carts } = state;

      const upQuantity = carts.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: quantity + 1,
          };
        }
        return item;
      });

      return {
        ...state,
        carts: upQuantity,
        isCartMessageOn: true,
      };
    },

    decreaseQty: (state, action) => {
      const { id, quantity } = action.payload;
      const { carts } = state;
      const newCart = carts.find((item) => item.id === id);
      if (newCart.quantity > 1) {
        const upQuantity = carts.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: quantity - 1,
            };
          }
          return item;
        });

        return {
          ...state,
          carts: upQuantity,
          isCartMessageOn: true,
        };
      } else {
        const cartDel = carts.filter((item) => item.id !== id);
        toast.success("Xóa thành công!!", {
          duration: 2000,
          position: "top-center",
          style: {
            fontSize: "14px",
          },
        });
        return {
          ...state,
          carts: cartDel,
          isCartMessageOn: true,
        };
      }
    },

    deleteCart: (state, action) => {
      const { carts } = state;
      const { id } = action.payload;

      const delCart = carts.filter((item) => item.id !== id);
      toast.success("Xóa thành công!!", {
        duration: 2000,
        position: "top-center",
        style: {
          fontSize: "14px",
        },
      });
      return {
        ...state,
        carts: delCart,
        isCartMessageOn: true,
      };
    },

    clearCart: (state, action) => {
      return {
        ...state,
        carts: [],
      };
    },
  },
});

export const { addtoCart, increaseQty, decreaseQty, deleteCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
