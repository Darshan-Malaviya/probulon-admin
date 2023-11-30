import React, { useState } from "react";
import { Form, Button, Card, CardHeader, CardBody } from "react-bootstrap";

const UserForm = () => {
  const [formData, setFormData] = useState({
    clientId: "",
    typeOfCollaborator: "",
    position: "",
    name: "",
    surname: "",
    lastSurname: "",
    mobile: "",
    secondaryMobile: "",
    email: "",
    secondaryEmail: "",
    taxStatus: "",
    tipoDeDocument: "",
    idNumber: "",
    taxAddress: "",
    postalCode: "",
    town: "",
    province: "",
    country: "",
    notes: "",
    deviceId: "",
    password: "",
    gender: "",
    userType: 2,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Card className="m-2">
      <CardHeader>Add User</CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="firstName" className="d-flex flex-row m-1">
            <Form.Label className="col-3 w-25">First Name</Form.Label>
            <Form.Control
              className="w-25"
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="lastName" className="d-flex flex-row m-1">
            <Form.Label className="col-3">Last Name</Form.Label>
            <Form.Control
              type="text"
              className="w-25"
              placeholder="Enter Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="clientId" className="d-flex flex-row m-1">
            <Form.Label className="col-3">Client Id</Form.Label>
            <Form.Control
              className="w-25"
              type="text"
              placeholder="Enter Client Id"
              name="clientId"
              value={formData.clientId}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="email" className="d-flex flex-row m-1">
            <Form.Label className="col-3">Email</Form.Label>
            <Form.Control
              type="text"
              className="w-25"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="secondaryEmail" className="d-flex flex-row m-1">
            <Form.Label className="col-3">Secondary Email</Form.Label>
            <Form.Control
              type="text"
              className="w-25"
              placeholder="Enter Secondary Emai"
              name="secondaryEmail"
              value={formData.secondaryEmail}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="deviceId" className="d-flex flex-row m-1">
            <Form.Label className="col-3">DeviceId</Form.Label>
            <Form.Control
              type="text"
              className="w-25"
              placeholder="Enter Device Id"
              name="deviceId"
              value={formData.deviceId}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="gender" className="d-flex flex-row m-1">
            <Form.Label className="col-3">Gender</Form.Label>
            <Form.Select
              name="gender"
              className="w-25"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Other</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default UserForm;
