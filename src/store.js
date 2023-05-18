import {applyMiddleware, createStore} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import userReducer from "./Reducers/UserReducer";
import localStorageMiddleware from "./localStorageMiddleware";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = createStore(persistedReducer, applyMiddleware(localStorageMiddleware));
const persistor  = persistStore(store);

export { store, persistor};