import React, { Fragment, useState } from "react";
import TableDisplayer from "../../UI/TableDisplayer";
import CustomForm from "../../UI/CustomForm";
import UserSingle from "./UserSingle";

function UsersList({modalController}) {
  const properties = ["ID", "Name"];
  const dataList = [<UserSingle id="1" name="Isra" />];

  const [usersList, setUsersList] = useState(dataList);
  

  function AddHandler(event) {
    modalController({
      onDisplay: true,
      title: "Adding new user...",
      message: {},
    });
    
  }
  function EditHandler(params) {}
  function DeleteHandler(params) {}
  return (
    <Fragment>
      <TableDisplayer
        modelType="Users"
        colList={properties}
        data={usersList}
        onAdding={AddHandler}
      />
    </Fragment>
  );
}

export default UsersList;
