import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalState from './context/index.jsx';


import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    
    <GlobalState> 
      <App />
    </GlobalState>   
    
  </BrowserRouter>
);


