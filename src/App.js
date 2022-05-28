import logo from './logo.svg';
import './App.css';
import Home from "./Pages/Home"
import Footer from "./Components/Footer"
import {BrowserRouter} from "react-router-dom"
import AppRouter from "./Config/Router"



function App() {
  return (
    <>
    <AppRouter/>
    {/* <Footer/> */}
    </>
  )}

export default App;
