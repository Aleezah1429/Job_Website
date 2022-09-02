import reducer from "./reducer"
import {applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
  }

  
const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer,applyMiddleware(thunk))
const persistor = persistStore(store)

export { store,persistor}