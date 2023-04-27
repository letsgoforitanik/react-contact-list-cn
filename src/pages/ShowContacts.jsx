import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getFormattedAddress } from "../utils/getFormattedAddress";
import { DeleteContact } from "../components";
import { removeContact } from "../api";
import { toast } from "react-hot-toast";
import { deleteContact } from "../store/contactSlice";

export default function ShowContacts() {
    const [showPopup, setShowPopup] = useState(false);
    const [indexToRemove, setIndexToRemove] = useState(null);
    const contacts = useSelector((state) => state.contacts);
    const navigateTo = useNavigate();
    const dispatch = useDispatch();

    function handleEditBtnClick(contactId, index) {
        const contact = contacts[index];
        navigateTo(`/contacts/${contactId}/edit`, { state: { contact, index } });
    }

    function handleDeleteBtnClick(contactId, index) {
        setIndexToRemove(index);
        setShowPopup(true);
    }

    async function handleContactDelete() {
        const userId = contacts[indexToRemove].id;
        const response = await removeContact(userId);

        if (response instanceof Object) {
            toast.success("Contact successfully deleted");
            dispatch(deleteContact(indexToRemove));
            setShowPopup(false);
            return;
        }

        toast.error("Some error occurred. Please try again");
    }

    if (contacts.length === 0) return <p>Loading ...</p>;

    return (
        <React.Fragment>
            <div className="table-wrapper">
                <div className="table-title">
                    <h2>
                        Manage <b>Contacts</b>
                    </h2>
                    <div>
                        <Link to="/contacts/create" className="btn btn-success">
                            Add New Contact
                        </Link>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact, index) => (
                            <tr key={index}>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{getFormattedAddress(contact.address)}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.website}</td>
                                <td>
                                    <div className="control-buttons">
                                        <button className="pencil-btn" onClick={() => handleEditBtnClick(contact.id, index)}>
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                                                alt="pencil-icon"
                                            />
                                        </button>
                                        <button className="trash-btn" onClick={() => handleDeleteBtnClick(contact.id, index)}>
                                            <img src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" alt="trash-icon" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showPopup && <DeleteContact onDelete={handleContactDelete} />}
        </React.Fragment>
    );
}
