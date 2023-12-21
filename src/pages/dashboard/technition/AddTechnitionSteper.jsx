import { useState } from "react";
import FormStepper from "../CommanComponent/FormStepper";
const AddTechnitionSteper = () => {
  const [technitiondata, setTechnitiondata] = useState({
    formTitle: ["Technition Details", "Technition Informaion", "Other"],
    CreateUSer_API_PATH: "/users/create",
    api_Status: {
      isSuccess: "Technition Data Add SuccessFull",
      error: "Technition Data Not Add",
    },
    backevent_path: "/dashboard/technician",
    userType: 3,
  });

  return (
    <>
      <FormStepper formdata={technitiondata} />
    </>
  );
};

export default AddTechnitionSteper;
