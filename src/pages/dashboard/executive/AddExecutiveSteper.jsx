import { useState } from "react";
import FormStepper from "../CommanComponent/FormStepper";

const AddExecutiveSteper = () => {
  const [executive, setExecutive] = useState({
    formTitle: ["Executive Details", "Executive Informaion", "Other"],
    CreateUSer_API_PATH: "/users/create",
    api_Status: {
      isSuccess: "Executive Data Add SuccessFull",
      error: "Executive Data Not Add",
    },
    backevent_path: "/dashboard/executive",
    userType: 4,
  });

  return (
<>
  <FormStepper formdata={executive}/>
</>
  );
};

export default AddExecutiveSteper;
