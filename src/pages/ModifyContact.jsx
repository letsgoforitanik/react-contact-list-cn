import React from "react";
import { FormLayout } from "../components";
import { useParams } from "react-router-dom";
import { store } from "../store";

export default function ModifyContact() {
    const { contactId } = useParams();
    const contact = store.getState().contacts[contactId];

    async function handleSave() {}

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
