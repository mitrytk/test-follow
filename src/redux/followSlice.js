import { createSlice, nanoid } from "@reduxjs/toolkit";

export const followSlice = createSlice({
  name: "isFollow",
  initialState: [],
  reducers: {
    setFollow: {
      reducer(state, { payload }) {
        state.push(payload);
      },
      prepare(user) {
        return {
          payload: {
            user,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    unsetFollow(state, { payload }) {
      const index = state.findIndex(({ id }) => id === payload.id);
      state.splice(index + 1, 1);
    },
  },
});

export const { setFollow, unsetFollow } = followSlice.actions;
