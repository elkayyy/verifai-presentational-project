import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import MyComponent from './Handover/Handover'

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<App />} />
          <Route path="hand" element={<MyComponent/>} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
