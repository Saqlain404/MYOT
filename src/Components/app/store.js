import { configureStore } from "@reduxjs/toolkit";
import getApiInfo from "../features/getApiInfoSlice";
import userReducer from '../app/slice/userSlice'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "redux";
import localforage from "localforage";

const persistConfig = {
  key: "root",
  version: 1,
  storage: localforage,
};

const reducer = combineReducers({
  app: getApiInfo,
  user: userReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
