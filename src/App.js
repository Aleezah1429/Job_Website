import logo from './logo.svg';
import './App.css';
import Home from "./Pages/Home"
import Footer from "./Components/Footer"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./Config/Router"
import {Provider} from "react-redux"
import {store,persistor} from './Store/index';
import { PersistGate } from 'redux-persist/integration/react'

function App() {
    return ( 
        <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter / >
        </PersistGate>
        </Provider>
    )
}

export default App;