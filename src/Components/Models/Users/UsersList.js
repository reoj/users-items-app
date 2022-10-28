import React, { Fragment, useState, useEffect } from "react";
import TableDisplayer from "../../UI/TableDisplayer";
import UserSingle from "./UserSingle";
import AddUser from "./AddUser";

function UsersList({ modalController }) {
  const properties = ["ID", "Name"];

  const [usersList, setUsersList] = useState([{ id: 1, name: "Isra" }]);
  const [newUserName, setNewUserName] = useState();

  useEffect(() => {
    if (newUserName != undefined) {
      const next = usersList.length + 1;
      usersList.push({id:next,name:newUserName.name})
      setUsersList(usersList);
      setNewUserName(undefined);
    }
  }, [newUserName]);

  function AddHandler(event) {
    modalController({
      onDisplay: true,
      title: "Adding new user...",
      body: (
        <AddUser
          formController={modalController}
          listController={setNewUserName}
        />
      ),
    });
  }
  function EditHandler(params) {}
  function DeleteHandler(params) {}
  return (
    <Fragment>
      <TableDisplayer
        modelType="Users"
        colList={properties}
        onAdding={AddHandler}
      >
        {usersList.map((u) => {
          return (
            <UserSingle
              key={"User__" + u.id.toString()}
              idn={u.id}
              name={u.name}
            />
          );
        })}
      </TableDisplayer>
    </Fragment>
  );
}

export default UsersList;
