import React, { Fragment, useState, useEffect} from "react";
import TableDisplayer from "../../UI/TableDisplayer";
import ItemSingle from "./ItemSingle";
import AddItem from "./AddItem";

function ItemsList(props) {
  const mc = props.modalController 
  const itemsList = props.state
  const setItemsList = props.setter

  const properties = ["ID", "Description", "Owner ID"];

  const [newItem, setNewItem] = useState();
  useEffect(() => {
    if (newItem != undefined) {
      //console.log(newItem.name);
      const next = itemsList.length + 1;
      itemsList.push({ id: next, desc: newItem.desc, owner:newItem.owner});
      setItemsList(itemsList);
      setNewItem(undefined);
    }
  }, [newItem]);

  function AddHandler(params) {
    mc({
      onDisplay: true,
      title: "Adding new Item...",
      body: (
        <AddItem
          formController={mc}
          newObjectSetter={setNewItem}
        />
      ),
    });
  }
  function EditHandler(params) {
    
  }
  function DeleteHandler(params) {
    
  }
  return (
    <Fragment>
    <TableDisplayer
      modelType="Items"
      colList={properties}
      onAdding={AddHandler}
    >
      {itemsList.map((i) => {
        return (
          <ItemSingle
            key={"Item" + i.id.toString()}
            idn={i.id}
            description={i.desc}
            owner={i.owner}
          />
        );
      })}
    </TableDisplayer>
  </Fragment>
  );
}

export default ItemsList;
