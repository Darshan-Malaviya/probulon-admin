import React from "react";
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
<MdDelete />;

const UserTable = ({ data }) => {
  const handleEdit = (id) => {
    console.log(`${id} is Edit`);
  };
  const handleDelete = (id) => {
    console.log(`${id} is Delete`);
  };
  return (
    <div>
      {data.length !== 0 ? (
        <table className="table text-center table-hover mt-2">
          <thead>
            <tr>
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
                  <td>{value.firstName}</td>
                  <td>{value.lastName}</td>
                  <td>{value.email}</td>
                  <td>{value.gender}</td>
                  <td>{value.statusText}</td>
                  <td>
                    <button
                      className="btn  bg-success fs-4"
                      onClick={() => handleEdit(value._id)}
                    >
                      <MdEditSquare />
                    </button>
                    <button
                      className="btn fs-4 bg-danger ms-2"
                      onClick={() => handleDelete(value._id)}
                    >
                      <MdDelete />
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
