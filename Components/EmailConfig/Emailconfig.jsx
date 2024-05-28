import { configureStore, createSlice } from "@reduxjs/toolkit";
const emailslice = createSlice({
  name: "email",
  initialState: {
    from: "",
    to: "",
    subject: "",
    composing: "",
  },
  reducers: {
    setfrom(state, action) {
      state.from = action.payload;
    },
    setTo(state, action) {
      state.to = action.payload;
    },
    setsubject(state, action) {
      state.subject = action.payload;
    },
    setcompose(state, action) {
      state.composing = action.payload;
    },
  },
});

export const { setfrom, setTo, setsubject, setcompose } = emailslice.actions;
export const store = configureStore({
  reducer: {
    email: emailslice.reducer,
  },
});
