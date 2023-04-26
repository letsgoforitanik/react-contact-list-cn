import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getFormattedAddress } from "../utils/getFormattedAddress";
import { DeleteContact } from "../components";

export default function ShowContacts() {
    const [showPopup, setShowPopup] = useState(false);
    const contacts = useSelector((state) => state.contacts);
    const navigateTo = useNavigate();

    function handleEditBtnClick(contactId) {
        navigateTo(`/contacts/${contactId}/edit`);
    }

    function handleDeleteBtnClick() {
        setShowPopup(true);
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
                            Add New Employee
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
                                        <button className="pencil-btn" onClick={() => handleEditBtnClick(index)}>
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                                                alt="pencil-icon"
                                            />
                                        </button>
                                        <button className="trash-btn" onClick={handleDeleteBtnClick}>
                                            <img src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" alt="trash-icon" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showPopup && <DeleteContact />}
        </React.Fragment>
    );
}
