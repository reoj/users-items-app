import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "items",
  initialState: {
    value: { list: [{ id: 1, desc: "Chair", owner: 1 }] },
  },
  reducers: {
    addItemR: (state, action) => {
      const next = state.value.list.length + 1;
      const nwList = state.value.list;
      nwList.push({ id: next, desc: action.payload.desc, owner: action.payload.owner});
      state.value.list = nwList;
    },
    removeItemR: (state, action) => {
      const idToRemove = action.payload;
      const nwList = state.value.list;
      const index = state.value.list.findIndex((e) => {
        return e.id === idToRemove;
      });
      nwList.splice(index, 1);
      state.value.list = nwList;
    },
    editItemR: (state, action) => {
      const idToEdit = action.payload.id;
      const oldItemIndex = state.value.list.findIndex((e) => {
        return e.id === idToEdit;
      });
      state.value.list[oldItemIndex] = action.payload;
    },
  },
});
export const { addItemR, removeItemR, editItemR } = itemSlice.actions;
export default itemSlice.reducer;
