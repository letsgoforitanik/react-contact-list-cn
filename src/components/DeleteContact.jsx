import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DeleteContact({ onDelete }) {
    const navigateTo = useNavigate();
    const [deleting, setDeleting] = useState(false);

    const handleCancelBtnClick = () => navigateTo("/");

    function handleDeleteClick() {
        setDeleting(true);
        onDelete && onDelete().then(() => setDeleting(false));
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="card">
                    <h2>
                        <span>
                            Delete <b>Contact</b>
                        </span>
                        <span className="close-btn">X</span>
                    </h2>
                    <div className="card-body">
                        <p>Are you sure you want to delete this contact ?</p>
                        <div className="buttons">
                            <button className="btn btn-default" onClick={handleCancelBtnClick}>
                                Cancel
                            </button>
                            <button className="btn btn-success" onClick={handleDeleteClick} disabled={deleting}>
                                {deleting ? "Deleting..." : "Delete"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
