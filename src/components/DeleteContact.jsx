import React from "react";

export default function DeleteContact() {
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
                            <button className="btn btn-default">Cancel</button>
                            <button className="btn btn-success">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
