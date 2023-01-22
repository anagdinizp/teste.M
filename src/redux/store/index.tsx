import { createStore } from "@reduxjs/toolkit";
import dataReducer from "../reducers/dataReducer";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";

const persistConfig = {
  key: "user",
  storage: sessionStorage,
};

const persistedReducer = persistReducer(persistConfig, dataReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { persistor, store };
