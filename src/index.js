import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthStore from "./store/authStore";
import {BrowserRouter} from "react-router-dom";

const authStore = new AuthStore();

export const AuthContext = createContext({
    authStore,
});

ReactDOM.render(
    <BrowserRouter>
        <AuthContext.Provider value={{authStore}}>
            <App />
        </AuthContext.Provider>
    </BrowserRouter>,
  document.getElementById('root')
);
