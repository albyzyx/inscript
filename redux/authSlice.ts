import { createSlice, createAsyncThunk, AnyAction } from "@reduxjs/toolkit";

import {
  walletConnect,
  walletConnectIfCache,
  walletDisconnect,
} from "../services/web3/web3Auth";

export const connectWallet = createAsyncThunk(
  "AUTH/CONNECT_WALLET",
  (undefined, thunkAPI) => {
    return new Promise((resolve, reject) => {
      console.log("a");
      walletConnect()
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(thunkAPI.rejectWithValue(err));
        });
    });
  }
);

export const disconnectWallet = createAsyncThunk(
  "AUTH/DISCONNECT_WALLET",
  () => {
    return new Promise<void>((resolve, reject) => {
      walletDisconnect();
      resolve();
    });
  }
);

export const connectWalletIfCache = createAsyncThunk(
  "AUTH/CONNECT_WALLET_CACHE",
  async () => {
    return new Promise((resolve, reject) => {
      walletConnectIfCache()
        .then((data) => {
          resolve(data);
        })
        .catch(() => {
          reject();
        });
    });
  }
);

type AuthStateType = {
  address?: string;
  balance?: string;
};

const INIT_STATE: AuthStateType = {};

const authSlice = createSlice({
  name: "AUTH_STATE",
  initialState: INIT_STATE,
  reducers: {
    setProvider: (state, { payload }) => {},
    setAddress: () => {},
    setChainId: () => {},
  },
  extraReducers: {
    [connectWallet.pending.toString()]: (state) => {},
    [connectWallet.fulfilled.toString()]: (state, { payload }) => {
      state.address = payload.address;
      state.balance = payload.balance;
    },
    [connectWallet.rejected.toString()]: (state, { payload }) => {
      console.error(payload);
    },
    [disconnectWallet.fulfilled.toString()]: (state, { payload }) => {
      state.address = undefined;
    },
    [connectWalletIfCache.fulfilled.toString()]: (state, { payload }) => {
      state.balance = payload.balance;
      state.address = payload.address;
    },
  },
});

export const selectAuthState = (state: { authState: any }) => state.authState;

export default authSlice.reducer;
