import React from "react";

const Row = ({ rowData }) => {
  return (
    <tr>
      {Object.entries(rowData).map(([key, value]) => {
        if(key === "address"){
            return <td key={key}>{`${value.street} ${value.suite} ${value.city} ${value.zipcode}`}</td>;
        } else if (key === "company"){
            return <td key={key}>{`${value.name} - ${value.bs}`}</td>;
        }
        return <td key={key}>{value.toString()}</td>;
      })}
    </tr>
  );
};

export default Row;
