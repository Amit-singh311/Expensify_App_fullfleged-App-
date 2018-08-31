import React from 'react'
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/styles.css';


var app_id   = document.getElementById("app");
ReactDOM.render(<AppRouter />, app_id);