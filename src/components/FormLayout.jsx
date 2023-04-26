import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function FormLayout({ onSave, contact }) {
    // refs ============
    const [txtName, txtEmail, txtStreet, txtSuite] = [useRef(), useRef(), useRef(), useRef()];
    const [txtCity, txtZipcode, txtPhone, txtWebsite] = [useRef(), useRef(), useRef(), useRef()];
    const navigateTo = useNavigate();

    const handleCancelClick = () => navigateTo("/");

    function handleFormSubmit(event) {
        event.preventDefault();

        const name = txtName.current.value;
        const email = txtEmail.current.value;
        const street = txtStreet.current.value;
        const suite = txtSuite.current.value;
        const city = txtCity.current.value;
        const zipcode = txtZipcode.current.value;
        const phone = txtPhone.current.value;
        const website = txtWebsite.current.value;

        const info = { name, email, address: { street, suite, city, zipcode }, phone, website };

        onSave && onSave(info);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input type="text" required ref={txtName} defaultValue={contact?.name} />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" required ref={txtEmail} defaultValue={contact?.email} />
            </div>
            <div className="form-group">
                <label>Address &gt; Street</label>
                <input type="text" required ref={txtStreet} defaultValue={contact?.address?.street} />
            </div>
            <div className="form-group">
                <label>Address &gt; Suite</label>
                <input type="text" required ref={txtSuite} defaultValue={contact?.address?.suite} />
            </div>
            <div className="form-group">
                <label>Address &gt; City</label>
                <input type="text" required ref={txtCity} defaultValue={contact?.address?.city} />
            </div>
            <div className="form-group">
                <label>Address &gt; Zipcode</label>
                <input type="text" required ref={txtZipcode} defaultValue={contact?.address?.zipcode} />
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input type="tel" required ref={txtPhone} defaultValue={contact?.phone} />
            </div>
            <div className="form-group">
                <label>Website</label>
                <input type="text" required ref={txtWebsite} defaultValue={contact?.website} />
            </div>
            <div className="buttons">
                <button className="btn btn-default" onClick={handleCancelClick}>
                    Cancel
                </button>
                <button className="btn btn-success" type="submit">
                    Save
                </button>
            </div>
        </form>
    );
}
