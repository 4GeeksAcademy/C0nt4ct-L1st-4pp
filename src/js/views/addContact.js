import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

function AddContact() {
    const { store, actions } = useContext(Context);
    const [newContact, setNewContact] = useState({
        name: "",
        homeAddress: "",
        phone: "",
        email: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.addContact(newContact);
        // clears the form after clicking submitting
        setNewContact({
            name: "",
            homeAddress: "",
            phone: "",
            email: ""
        });
    };

    return (
        <div className="container mt-3">
            <h1 className="text-center" >Add a New Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="inputName">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        placeholder="Full Name"
                        value={newContact.name}
                        onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Enter Email"
                        value={newContact.email}
                        onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputPhone">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputPhone"
                        placeholder="Enter Phone"
                        value={newContact.phone}
                        onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputAddress">Address</label>
                    <textarea
                        className="form-control"
                        id="inputAddress"
                        rows="1"
                        placeholder="Enter Address"
                        value={newContact.homeAddress}
                        onChange={(e) => setNewContact({ ...newContact, homeAddress: e.target.value })}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-secondary">Save</button>
            </form>
            <Link to="/">
                <small>or get back to contacts</small>
            </Link>
        </div>
    )
}

export default AddContact;