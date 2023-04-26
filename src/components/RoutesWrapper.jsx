import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { CreateContact, ModifyContact, ShowContacts } from "../pages";
import { useDispatch } from "react-redux";
import { contactFetchThunk } from "../store/contactFetchThunk";

export default function RoutesWrapper() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(contactFetchThunk) && undefined, []);

    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<ShowContacts />} />
                <Route path="/contacts/:contactId/edit" element={<ModifyContact />} />
                <Route path="/contacts/create" element={<CreateContact />} />
            </Routes>
        </div>
    );
}
