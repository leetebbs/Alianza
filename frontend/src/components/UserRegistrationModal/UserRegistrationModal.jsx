// Modal Component to collect and register user info
// name, lastname, email and userWallet 
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const UserRegistrationModal = ({ show, handleClose, walletAddress }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    walletAddress:''
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

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>User Registration</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* NAME */}
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* LASTNAME */}
          <Form.Group controlId="formLastName">
            <Form.Label> Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* EMAIL */}
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* WALLET ADDRESS */}
          <Form.Group controlId="walletAddress">
            <Form.Label>Wallet Address</Form.Label>
            <Form.Control
              type="text"
              placeholder={walletAddress}
              name="walletAddress"
              value={formData.walletAddress}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Register
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UserRegistrationModal;
