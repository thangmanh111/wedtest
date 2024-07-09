import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import swal from "sweetalert";
const initialState = {
  isOpenLogin: false,
  email: localStorage.getItem("login"),
  isLogin: false,
};
export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    dologin: (state, action) => {
      const { email, password } = action.payload;

      if (email === "admin@gmail.com" && password === "1234") {
        swal("Login success!", "", "success");
        localStorage.setItem("login", email);
        localStorage.setItem("isLogin", true);
        return {
          ...state,
          isOpenLogin: false,
          email,
          isLogin: true,
        };
      } else {
        toast.error("Tài khoản hoặc mật khẩu không chính xác!!", {
          duration: 2000,
          position: "top-center",
          style: {
            fontSize: "14px",
          },
        });
        return {
          ...state,
          isOpenLogin: true,
          userName: "",
          isLogin: false,
        };
      }
    },
    updateStateOpenLogin: (state, action) => {
      return {
        ...state,
        isOpenLogin: action.payload,
      };
    },

    doLogout: (state, action) => {
      localStorage.clear();
      return {
        ...state,
        email: "",
        isLogin: false,
      };
    },
  },
});

export const { dologin, updateStateOpenLogin, doLogout } = authSlice.actions;
export default authSlice.reducer;
