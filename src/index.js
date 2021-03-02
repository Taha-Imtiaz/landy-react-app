import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
//for animations of main page
import "antd/dist/antd.css";
import axios from 'axios';

import * as serviceWorker from "./serviceWorker";
import App from "./App";

// axios.defaults.baseURL = 'https://savings-back.herokuapp.com/api'
axios.defaults.baseURL = 'http://localhost:3001/api'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
