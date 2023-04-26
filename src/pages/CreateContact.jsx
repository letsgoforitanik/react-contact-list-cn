import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FormLayout } from "../components";
import { addContact } from "../api";
import { addContacts } from "../store/contactSlice";

export default function CreateContact() {
    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    async function handleSave(info) {
        const contact = await addContact(info);

        if (contact instanceof Object) {
            dispatch(addContacts([contact]));
            toast.success("Contact successfully added");
            navigateTo("/");
            return;
        }

        toast.error("Some error occurred. Please try again");
    }

    return (
        <div className="card">
            <h2>
                <span>
                    Create <b>Contact</b>
                </span>
            </h2>
            <FormLayout onSave={handleSave} />
        </div>
    );
}
