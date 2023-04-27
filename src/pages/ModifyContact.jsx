import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FormLayout } from "../components";
import { changeContact } from "../api";
import { useDispatch } from "react-redux";
import { editContact } from "../store/contactSlice";

export default function ModifyContact() {
    const { contactId } = useParams();
    const { state } = useLocation();
    const { contact, index } = state;
    const navigateTo = useNavigate();
    const dispatch = useDispatch();

    async function handleSave(info) {
        const contact = await changeContact(contactId, info);

        if (contact instanceof Object) {
            dispatch(editContact({ info, index }));
            toast.success("Contact successfully updated");
            navigateTo("/");
            return;
        }

        toast.error("Some error occurred. Please try again");
    }

    return (
        <div className="card">
            <h2>
                <span>
                    Edit <b>Contact</b>
                </span>
            </h2>
            <FormLayout onSave={handleSave} contact={contact} />
        </div>
    );
}
