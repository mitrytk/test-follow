import { createSlice } from "@reduxjs/toolkit";
import { fetchTweets, follow, unfollow } from "./operations";

const initialState = {
  tweets: [],
  isLoading: false,
};
export const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  extraReducers: {
    [fetchTweets.pending](state) {
      state.isLoading = true;
    },
    [fetchTweets.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.tweets = payload;
    },
    [fetchTweets.rejected](state) {
      state.isLoading = false;
    },
    [follow.pending](state) {
      state.isLoading = true;
    },
    [follow.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.tweets[
        state.tweets.findIndex(({ id }) => id === payload.id)
      ].followers = payload.followers;
    },
    [follow.rejected](state) {
      state.isLoading = false;
    },
    [unfollow.pending](state) {
      state.isLoading = true;
    },
    [unfollow.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.tweets[
        state.tweets.findIndex(({ id }) => id === payload.id)
      ].followers = payload.followers;
    },
    [unfollow.rejected](state) {
      state.isLoading = false;
    },
  },
});
