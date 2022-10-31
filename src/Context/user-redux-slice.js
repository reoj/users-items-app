import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    value: { list: [{ id: 1, name: "Isra" }] },
  },
  reducers: {
    add: (state, action) => {
      const next = state.value.list.length + 1;
      const nwList = state.value.list;
      nwList.push({ id: next, name: action.payload });
      state.value.list = nwList;
    },
    remove: (state, action) => {
      const idToRemove = action.payload;
      const nwList = state.value.list;
      const index = state.value.list.findIndex((e) => {
        return e.id === idToRemove;
      });
      nwList.splice(index, 1);
      state.value.list = nwList;
    },
    edit: (state, action) => {
      const idToEdit = action.payload.id;
      const oldItemIndex = state.value.list.findIndex((e) => {
        return e.id === idToEdit;
      });
      state.value.list[oldItemIndex] = action.payload;
    },
  },
});
export const { add, remove, edit } = userSlice.actions;
export default userSlice.reducer;
