import { createAsyncThunk } from "@reduxjs/toolkit";

//const { REACT_APP_MOCK_API_ENDPOINT } = process.env;
const REACT_APP_MOCK_API_ENDPOINT =
  "https://mock-user-auth-server.herokuapp.com/api/v1/";

export const signupUser = createAsyncThunk(
  "users/signupUser",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await fetch(`${REACT_APP_MOCK_API_ENDPOINT}users`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });
      let data = await response.json();

      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        return { ...data, username: name, email: email };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(`${REACT_APP_MOCK_API_ENDPOINT}/auth`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      let data = await response.json();
      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const fetchUserBytoken = createAsyncThunk(
  "users/fetchUserByToken",
  async ({ token }, thunkAPI) => {
    try {
      const response = await fetch(`${REACT_APP_MOCK_API_ENDPOINT}users`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: token,
          "Content-Type": "application/json"
        }
      });
      let data = await response.json();
      if (response.status === 200) {
        return { ...data };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
