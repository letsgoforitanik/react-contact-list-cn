import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        addContacts: function (state, { payload }) {
            return [...payload, ...state];
        },
    },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContacts } = contactsSlice.actions;
