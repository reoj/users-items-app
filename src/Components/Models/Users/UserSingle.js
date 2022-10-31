import React, { useContext } from "react";
import ModalContext from "../../../Context/modal-context";
import ActionButtons from "../../UI/ActionButtons";
import DeleteUser from "./DeleteUser";
import EditUser from "./EditUser";

function UserSingle(props) {
  const context = useContext(ModalContext);
  const mc = context.setter;
  function onEditHandler(params) {
    mc({
      onDisplay: true,
      title: "Editing User",
      body: <EditUser item={{ id: props.idn, name: props.name }} />,
    });
  }
  function onDeleteHandler(params) {
    mc({
      onDisplay: true,
      title: "Please confirm deletion of the following User",
      body: <DeleteUser item={{ id: props.idn, name: props.name }} />,
    });
  }
  return (
    <tr>
      <td>{props.idn}</td>
      <td>{props.name}</td>
      <ActionButtons
        clickForEdit={onEditHandler}
        clickForDel={onDeleteHandler}
        itemID={props.idn}
      />
    </tr>
  );
}

export default UserSingle;
