import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactSlice";
import { thunkMiddleware } from "./thunkMiddleware";

export const store = configureStore({ reducer: { contacts: contactsReducer }, middleware: [thunkMiddleware] });
