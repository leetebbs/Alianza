// Modal Component to collect and register user info
// name, lastname, email and userWallet 
import React, { useState } from 'react';
import './UserRegistrationModal.css'; // Import your CSS file for styling

const UserRegistrationModal = ({ show, handleClose, walletAddress }) => {
    console.log(`modal show prop:` , show);
    
    const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    walletAddress: {walletAddress}
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to register the user on the db and mint NFT
    console.log('Form data submitted:', formData);
    // const registrationSuccessful = await registerUser(formData); **TO insert data on DB
    // Once NFT minted close modal
    // if (registrationSuccessful) {
    handleClose();
    //   }
  };

  console.log('Rendering UserRegistrationModal:', show);
  return (
    <div className={`custom-modal ${show ? 'show' : 'hide'}`}>
      <div className="modal-overlay" onClick={handleClose}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h2>User Registration</h2>
          <button className="close-button" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            {/* NAME */}
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            {/* LASTNAME */}
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            {/* EMAIL */}
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            {/* WALLET ADDRESS */}
            <div className="form-group">
                <label>Wallet Address</label>
                <div className="readonly-input">
                    <p>{walletAddress}</p>
                </div>
              
            </div>
            <button type="submit"onClick={handleSubmit}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegistrationModal;
