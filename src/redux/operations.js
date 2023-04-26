import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6448e438e7eb3378ca389d6b.mockapi.io";

export const fetchTweets = createAsyncThunk(
  "tweets/fetchAll",
  async (_, thunkAPI) => {
    try {
      const respons = await axios.get("/users");
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const follow = createAsyncThunk(
  "tweets/follow",
  async ({ id, ...user }, thunkAPI) => {
    try {
      const respons = await axios.put(`/users/${id}`, {
        ...user,
        followers: user.followers + 1,
      });
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const unfollow = createAsyncThunk(
  "tweets/unfollow",
  async ({ id, ...user }, thunkAPI) => {
    try {
      const respons = await axios.put(`/users/${id}`, {
        ...user,
        followers: user.followers - 1,
      });
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
