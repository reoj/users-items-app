import React from "react";
import OffcanvasHeader from "react-bootstrap/esm/OffcanvasHeader";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button"

function TableDisplayer(props) {
  const fielsList = props.colList;
  const dataList = props.data;

  return (
    <div className="table-responsive">
      <OffcanvasHeader className="fs-3 mb-3 col-1">{props.modelType}</OffcanvasHeader>
      <Button className="col-2" onClick={props.onAdding}> + Add {props.modelType}</Button>
      <Table
        className="table table-striped
      table-hover	
      table-borderless
      table-primary
      align-middle"
      >
        <thead key={props.modelType + "_thead"} className="table-light">
          <tr key={props.modelType + "_first_tr"}>
            {fielsList.map((campo) => {
              return <th key={props.modelType + Math.random().toString()}>{campo}</th>;
            })}
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {dataList.map((u) => {
            return (<tr key={props.modelType + Math.random().toString()}>{u}</tr>);
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default TableDisplayer;
