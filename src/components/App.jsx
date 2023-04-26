import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "../store";
import { RoutesWrapper } from ".";

export default function App() {
    return (
        <Router>
            <Provider store={store}>
                <RoutesWrapper />
                <Toaster />
            </Provider>
        </Router>
    );
}
