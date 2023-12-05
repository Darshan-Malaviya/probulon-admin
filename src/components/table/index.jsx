import React, { useState } from "react";
import Table from "react-data-table-component";
import { FaSortAmountUp } from "react-icons/fa";

const DataTable = ({ data, columns, handleSelectedRow}) => {
  const [filterText, setFilterText] = useState("");
  const [userData,setUserDAta]=useState([])
  return (
    <Table
      columns={columns}
      data={data.filter((item) => {
        if (filterText !== "")
          return item.firstName
            .toLowerCase()
            .includes(filterText.toLowerCase());
        return item;
      })}
      sortIcon={<FaSortAmountUp />}
      pagination
      selectableRows
      onSelectedRowsChange={handleSelectedRow}
    />
    // {userData?.map((user,index)=>{

    // })}
  );
};

export default DataTable;
