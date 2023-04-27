import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        addContacts: function (state, { payload }) {
            return [...payload, ...state];
        },
        editContact: function (state, { payload }) {
            const { info, index } = payload;
            state[index] = { ...state[index], ...info };
            return state;
        },
        deleteContact: function (state, { payload }) {
            return state.filter((contact, index) => index != payload);
        },
    },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContacts, editContact, deleteContact } = contactsSlice.actions;
