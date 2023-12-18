import { useState } from "react";
import FormStepper from "../CommanComponent/FormStepper";

const AddSteper = () => {
  const [usersdata, setUsersdata] = useState({
    formTitle: ["User Details", "User Device Informaion", "Other"],
    CreateUSer_API_PATH: "/users/create",
    api_Status: {
      isSuccess: "User Data Add SuccessFull",
      error: "User Data Not Add",
    },
    backevent_path: "/dashboard/users",
    userType:2
  });

  return (
    <>
      <FormStepper formdata={usersdata} />
    </>
  );
};

export default AddSteper;
