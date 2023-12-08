import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const UserTable = ({ data }) => {
  const [show, setShow] = useState(false);
  const [updateuser, setUpdateuser] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setUpdateuser(data.find((value) => value._id == id));
    setShow(true);
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUpdateuser({ ...updateuser, [name]: value });
  };

  const handleUpdate = () => {
    console.log(updateuser);
    handleClose();
  };
  const handleDelete = async (id) => {
    console.log(`${id} is Delete`);
  };
  return (
    <div>
      {data.length !== 0 ? (
        <table className="table text-center  table-hover mt-3">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Collaborator</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Gender</th>
              <th>StatusText</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.collaborator}</td>
                  <td>{value.firstName}</td>
                  <td>{value.lastName}</td>
                  <td>{value.email}</td>
                  <td>{value.gender}</td>
                  <td>{value.statusText}</td>
                  <td>
                    <Button
                      variant="primary"
                      className="btn btn-success btn-sm fs-5"
                      onClick={() => handleShow(value._id)}
                    >
                      <BiSolidEdit style={{ color: "white" }} />{" "}
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title className="ms-2 fw-bold">
                          Update Users
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group className="d-flex flex-row m-2">
                            <Form.Label className="col-3 w-25">
                              First Name :
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="firstName"
                              placeholder="Enter Your First Name"
                              className=""
                              name="firstName"
                              autoFocus
                              value={updateuser.firstName}
                              onChange={handleChange}
                              required
                            />
                          </Form.Group>
                          <Form.Group className="d-flex flex-row m-2">
                            <Form.Label className="col-3">
                              Last Name :
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className=" "
                              placeholder="Enter Last Name"
                              name="lastName"
                              value={updateuser.lastName}
                              onChange={handleChange}
                            />
                          </Form.Group>

                          <Form.Group className="d-flex flex-row m-2">
                            <Form.Label className="col-3">Name :</Form.Label>
                            <Form.Control
                              type="text"
                              className=""
                              placeholder="Enter  Name"
                              name="name"
                              value={updateuser.name}
                              onChange={handleChange}
                            />
                          </Form.Group>

                          <Form.Group className="d-flex flex-row m-2">
                            <Form.Label className="col-3">Surname :</Form.Label>
                            <Form.Control
                              type="text"
                              className=""
                              placeholder="Enter Surname"
                              name="surname"
                              value={updateuser.surname}
                              onChange={handleChange}
                            />
                          </Form.Group>

                          <Form.Group className="d-flex flex-row m-2 ">
                            <Form.Label className="col-3">
                              Tipo De Document :
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className=""
                              placeholder="Enter Tipo De Document"
                              name="tipoDeDocument"
                              value={updateuser.tipoDeDocument}
                              onChange={handleChange}
                            />
                          </Form.Group>

                          <Form.Group className="d-flex flex-row m-2">
                            <Form.Label className="col-3">
                              Last Surname :
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className=""
                              placeholder="Enter last Surname"
                              name="lastSurname"
                              value={updateuser.lastSurname}
                              onChange={handleChange}
                            />
                          </Form.Group>

                          <Form.Group className="d-flex flex-row m-2">
                            <Form.Label className="col-3">Gender :</Form.Label>
                            <Form.Select
                              name="gender"
                              className=""
                              value={updateuser.gender}
                              onChange={handleChange}
                            >
                              <option value="">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="d-flex flex-row m-2">
                            <Form.Label className="col-3">
                              UserType :
                            </Form.Label>
                            <Form.Select
                              name="userType"
                              className=""
                              value={updateuser.userType}
                              onChange={handleChange}
                            >
                              <option value="">Select UserType</option>
                              <option value="Client">1 - Client</option>
                              <option value="User">2 - User</option>
                              <option value="Admin">3 - Admin</option>
                            </Form.Select>
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleUpdate}>
                          UPDATE
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <button
                      className="btn btn-danger  btn-sm fs-5 ms-2"
                      onClick={() => handleDelete(value._id)}
                    >
                      <MdDelete style={{ color: "white" }} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p className="text-center m-3">Data is Not Define.....</p>
      )}
    </div>
  );
};

export default UserTable;
