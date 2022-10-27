import React, { Fragment, useState } from "react";
import TableDisplayer from "../../UI/TableDisplayer";
import ItemSingle from "./ItemSingle";

function ItemsList(props) {
  const properties = ["ID", "Description", "Owner ID"];
  const dataList = [
    <ItemSingle id="1" description="Chair" owner="1" />,
  ];

  const [itemsList, setItemsList] = useState(dataList)

  function AddHandler(params) {
    
  }
  function EditHandler(params) {
    
  }
  function DeleteHandler(params) {
    
  }
  return (
    <Fragment>
      <TableDisplayer modelType="Items" colList={properties} data={itemsList} onAdding={AddHandler}/>
    </Fragment>
  );
}

export default ItemsList;
